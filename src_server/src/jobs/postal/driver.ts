import hud from 'helpers/hud';
import animations from 'helpers/animations';
import attachments from 'helpers/attachments';
import Branch from '../branch';
import Vehicle from '../vehicle';
import { clothes, vehiclePositions } from './data';

class Driver extends Branch {
	private vehicle: Vehicle;

	constructor() {
		super('Driver', 210, clothes);

		mp.events.subscribe({
			'Postal-GetVehicleCargo': this.getCargoFromVehicle.bind(this)
		});

		this.vehicle = new Vehicle(['boxville2'], vehiclePositions.Driver, [
			255,
			255,
			255,
			0
		]);

		this.points.createForOrder(
			{ x: 67.735, y: 121.388, z: 79.03 },
			3,
			this.loadCargo.bind(this)
		);
	}

	startWork(player: Player) {
		super.startWork(player);

		this.vehicle.spawn(player, this.workers.get(player));
		this.points.show(player);
	}

	finishWork(player: Player) {
		this.points.hide(player);
		this.vehicle.destroy(this.workers.get(player));

		super.finishWork(player);
	}

	protected async onEnterPoint(player: Player) {
		if (player.mp.vehicle) return;

		if (this.playerHasBox(player.mp)) await this.completeOrder(player);
		else this.showCargoPoint(player);
	}

	protected async completeOrder(player: Player) {
		await super.completeOrder(player);

		const worker = this.workers.get(player);

		if (worker.cargo) this.createOrder(player);
		else {
			this.points.show(player);

			hud.showNotification(
				player,
				'info',
				'У вас закончились посылки, отправляйтесь на склад.'
			);
		}
	}

	protected cancelOrder(player: Player) {
		attachments.remove(player.mp, 'card_box');
		animations.stopOnServer(player.mp);

		super.cancelOrder(player);
	}

	private playerHasBox(player: PlayerMp) {
		return attachments.has(player, 'card_box');
	}

	private showCargoPoint(player: Player) {
		const { vehicle } = this.workers.get(player);

		hud.showNotification(player, 'info', 'Возьмите коробку из ТС');

		player.callEvent('Cargo-ShowVehiclePoint', [vehicle, 'Postal-GetVehicleCargo']);
	}

	private getCargoFromVehicle(player: Player) {
		const worker = this.workers.get(player);

		if (player.mp.vehicle || !worker?.cargo || this.playerHasBox(player.mp)) {
			throw new SilentError('cargo error');
		}

		worker.cargo -= 1;

		animations.playOnServer(player.mp, 'hold_box');
		attachments.add(player.mp, 'card_box');
	}

	private loadCargo(player: Player) {
		const worker = this.workers.get(player);

		if (this.vehicle.isOwnedByWorker(worker, player.mp.vehicle)) {
			this.points.hide(player);

			worker.cargo = 5;

			this.createOrder(player);
		}
	}
}

export default new Driver();
