import { ClientError } from 'utils/errors';
import hud from './hud';

type Offer = {
	creator: string;
	onAccept: Function;
	onRefuse?: Function;
};

class Offers {
	private items: Map<string, Offer>;

	constructor() {
		this.items = new Map();

		mp.events.subscribe({
			'Offers-Accept': this.accept.bind(this),
			'Offers-Refuse': this.refuse.bind(this)
		});
	}

	create(creator: Player, target: Player, handlers: Omit<Offer, 'creator'>) {
		if (this.items.has(target.dbId)) throw new SilentError('player has offer');

		this.items.set(target.dbId, { creator: creator.dbId, ...handlers });

		target.callEvent('Offer-Create', creator.dbId);
	}

	showWithExpires(player: Player, sellerId: number, text: string, duration = 5000) {
		player.callEvent('Offer-Show', [sellerId, text, duration]);
	}

	refuse(player: Player) {
		const { dbId: id } = player;
		const offer = this.getOffer(id);

		this.items.delete(id);

		if (offer?.creator) {
			this.notifyAboutStatus(offer.creator, false);

			if (offer.onRefuse) offer.onRefuse();
		}
	}

	private async accept(player: Player) {
		const { dbId: id } = player;
		const offer = this.getOffer(id);

		this.items.delete(id);

		if (!offer?.creator) return;

		try {
			await offer.onAccept();
			this.notifyAboutStatus(offer.creator, true);
		} catch (err) {
			const message = err instanceof ClientError && err.message;
			if (message) hud.showNotification(player, 'error', message);

			this.notifyAboutStatus(offer.creator, false);
		}
	}

	private getOffer(id: string) {
		const offer = this.items.get(id);

		return offer && { ...offer, creator: mp.players.getByDbId(offer.creator) };
	}

	private notifyAboutStatus(player: Player, status: boolean) {
		if (status) hud.showNotification(player, 'success', 'Ваше предложение принято');
		else hud.showNotification(player, 'error', 'Ваше предложение отклонено', true);
	}
}

export default new Offers();
