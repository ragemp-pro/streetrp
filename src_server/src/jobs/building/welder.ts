import animations from 'helpers/animations';
import attachments from 'helpers/attachments';
import Branch from '../branch';
import { clothes } from './data';

class Welder extends Branch {
	constructor() {
		super('Welder', 51, clothes);
	}

	startWork(player: Player) {
		super.startWork(player);

		this.createOrder(player);
	}

	protected async onEnterPoint(player: Player) {
		if (player.mp.vehicle || attachments.has(player.mp, 'weld_torch')) return;

		attachments.add(player.mp, 'weld_torch');
		animations.playOnServer(player.mp, 'welding');

		mp.players.withTimeout(
			player.mp,
			async () => {
				await this.completeOrder(player);
			},
			8500
		);
	}

	protected async completeOrder(player: Player) {
		if (player.mp.vehicle) return;

		await super.completeOrder(player);

		this.createOrder(player);
	}

	protected cancelOrder(player: Player) {
		super.cancelOrder(player);

		animations.stopOnServer(player.mp);
		attachments.remove(player.mp, 'weld_torch');
	}
}

export default new Welder();
