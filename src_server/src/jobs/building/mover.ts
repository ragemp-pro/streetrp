import animations from 'helpers/animations';
import attachments from 'helpers/attachments';
import Branch from '../branch';
import { clothes } from './data';

class Mover extends Branch {
	constructor() {
		super('Mover', 40, clothes);

		this.points.createForOrder(
			{ x: -450.212, y: -862.715, z: 25.898 },
			1.2,
			this.createOrder.bind(this)
		);
	}

	startWork(player: Player) {
		super.startWork(player);

		this.points.show(player);
	}

	finishWork(player: Player) {
		this.points.hide(player);

		super.finishWork(player);
	}

	protected async onEnterPoint(player: Player) {
		if (player.mp.vehicle) return;

		await super.completeOrder(player);

		this.points.show(player);
	}

	protected createOrder(player: Player) {
		if (player.mp.vehicle) return;

		this.points.hide(player);

		super.createOrder(player);

		animations.playOnServer(player.mp, 'hold_box');
		attachments.add(player.mp, 'wood_bar');
	}

	protected cancelOrder(player: Player) {
		attachments.remove(player.mp, 'wood_bar');
		animations.stopOnServer(player.mp);

		super.cancelOrder(player);
	}
}

export default new Mover();
