import hud from 'helpers/hud';
import animations from 'helpers/animations';
import attachments from 'helpers/attachments';
import Branch from '../branch';
import Vehicle from '../vehicle';
import { Worker } from '../workers';
import { clothes, vehiclePositions } from './data';

class Warehouse extends Branch {
	private vehicle: Vehicle;

	constructor() {
		super('Warehouse', 1000, clothes);

		mp.events.subscribe({
			'Postal-AddCargoToVehicle': this.addCargoToVehicle.bind(this)
		});

		this.vehicle = new Vehicle(['boxville4'], vehiclePositions.Warehouse);

		this.points.createForOrder(
			{ x: 114.89, y: 100.859, z: 80.881 },
			3,
			this.unloadCargo.bind(this)
		);
	}

	startWork(player: Player) {
		super.startWork(player);

		this.vehicle.spawn(player, this.workers.get(player));
		this.createOrder(player);
	}

	finishWork(player: Player) {
		this.vehicle.destroy(this.workers.get(player));

		super.finishWork(player);
	}

	protected onEnterPoint(player: Player) {
		if (attachments.has(player.mp, 'card_box') || player.mp.vehicle) return;

		const worker = this.workers.get(player);

		animations.playOnServer(player.mp, 'hold_box');
		attachments.add(player.mp, 'card_box');

		player.callEvent('Cargo-ShowVehiclePoint', [
			worker.vehicle,
			'Postal-AddCargoToVehicle'
		]);
	}

	protected async completeOrder(player: Player) {
		await super.completeOrder(player);

		this.createOrder(player);
	}

	protected cancelOrder(player: Player) {
		this.points.hide(player);

		attachments.remove(player.mp, 'card_box');
		animations.stopOnServer(player.mp);

		super.cancelOrder(player);
	}

	private isEnoughCargo(worker: Worker) {
		return worker.cargo >= 5;
	}

	private async unloadCargo(player: Player) {
		const worker = this.workers.get(player);

		if (
			this.vehicle.isOwnedByWorker(worker, player.mp.vehicle) &&
			this.isEnoughCargo(worker)
		) {
			await this.completeOrder(player);

			worker.cargo = 0;
		}
	}

	private addCargoToVehicle(player: Player) {
		const worker = this.workers.get(player);

		if (!worker || !attachments.has(player.mp, 'card_box')) {
			throw new SilentError("player doesn't have box");
		}

		worker.cargo += 1;

		attachments.remove(player.mp, 'card_box');
		animations.stopOnServer(player.mp);

		if (this.isEnoughCargo(worker)) {
			this.points.hide(player, worker.order);
			this.showFinalPoint(player);
		}
	}

	private showFinalPoint(player: Player) {
		this.points.show(player);

		hud.showNotification(
			player,
			'info',
			'Доставьте посылки на склад, отмеченный на карте'
		);
	}
}

export default new Warehouse();
