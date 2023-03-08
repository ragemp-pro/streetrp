import moment from 'moment';
import offers from 'helpers/offers';
import animations from 'helpers/animations';
import factionsApi from 'factions/api';

type Document = 'passport' | 'licenses' | 'medcard' | 'faction';

class PlayerDocs {
	constructor() {
		mp.events.subscribe({
			'Player-OfferDocs': this.offer.bind(this),
			'Player-ShowDocs': this.show.bind(this)
		});
	}

	offer(player: Player, type: Document) {
		const customer = mp.players.get(player.target as PlayerMp);

		if (!customer) return;

		offers.create(player, customer, {
			onAccept: this.show.bind(this, customer, type, player)
		});
		offers.showWithExpires(customer, player.mp.id, 'Предлагает посмотреть документы');
	}

	show(player: Player, type: Document, target?: Player) {
		const targetPlayer = target ?? player;

		animations.setScenario(targetPlayer, 'give_docs', true);

		switch (type) {
			case 'passport':
				this.showPassport(player, targetPlayer);
				break;
			case 'licenses':
				this.showPlayerDocs(player, 'licenses', { licenses: targetPlayer.licenses });
				break;
			case 'faction':
				this.showFactionDocs(player, targetPlayer);
				break;

			default:
				break;
		}
	}

	private showPlayerDocs(player: Player, type: 'passport' | 'licenses', data: any) {
		player.callEvent('Player-ShowDocsMenu', [type, data]);
	}

	private showPassport(player: Player, target: Player) {
		const [firstName, lastName] = target.getName(true).split('_');
		const { gender, registerAt } = target;

		this.showPlayerDocs(player, 'passport', {
			firstName,
			lastName,
			registerAt: moment(registerAt).format('L'),
			gender: gender === 'male' ? 'М' : 'Ж'
		});
	}

	private showFactionDocs(player: Player, target: Player) {
		player.callEvent('Factions-ShowDocs', [
			target.getName(),
			target.faction,
			factionsApi.getPlayerRank(target)
		]);
	}
}

const docs = new PlayerDocs();
