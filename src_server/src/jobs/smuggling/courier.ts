import hud from 'helpers/hud';
import inventoryHelper from 'basic/inventory/helper';
import playerInventory from 'player/inventory';
import Branch from '../branch';

class SmugglingCourier extends Branch {
	constructor() {
		super('Courier', 1100);

		this.points.createForOrder(
			{ x: 1486.224, y: 1131.539, z: 114.336 },
			1,
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

		const product = inventoryHelper.findItem(player.inventory, 'cocaine');
		if (!product) return;

		await super.completeOrder(player);
		inventoryHelper.changeItemAmount(player.inventory, product, -1);

		if (!inventoryHelper.findItem(player.inventory, 'cocaine')) {
			this.finishWork(player);
			return hud.showNotification(player, 'error', 'У вас нет необходимого товара');
		}

		super.createOrder(player);
	}

	protected createOrder(player: Player) {
		if (player.mp.vehicle) return;

		this.points.hide(player);
		super.createOrder(player);

		playerInventory.addItem(player, { name: 'cocaine', amount: 4 });
	}
}

export default new SmugglingCourier();
