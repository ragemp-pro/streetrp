import animations from 'helpers/animations';
import attachments from 'helpers/attachments';
import Branch from '../branch';
import Vehicle from '../vehicle';
import { Worker } from '../workers';
import { clothes, vehiclePositions } from './data';

class Driver extends Branch {
	private vehicle: Vehicle;

	constructor() {
		super('Driver', 950, clothes);

		mp.events.subscribe({
			'Building-AddCargoToVehicle': this.addCargoToVehicle.bind(this)
		});

		this.vehicle = new Vehicle(['mixer2'], vehiclePositions.Driver, [117, 60, 16, 0]);
	}

	createPoints(coords: PositionEx[]) {
		this.points.createForOrder(
			{ x: 379.733, y: 2883.461, z: 48.653 },
			3,
			this.getCargo.bind(this)
		);

		super.createPoints(coords, 4);
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
		const worker = this.workers.get(player);

		if (
			this.vehicle.isOwnedByWorker(worker, player.mp.vehicle) &&
			this.isEnoughCargo(worker)
		) {
			await super.completeOrder(player);
			worker.cargo = 0;

			this.points.show(player);
		}
	}

	private isEnoughCargo(worker: Worker) {
		return worker.cargo >= 8;
	}

	private addCargoToVehicle(player: Player) {
		const worker = this.workers.get(player);

		if (!worker || !attachments.has(player.mp, 'bucket')) {
			throw new SilentError("player doesn't have bucket");
		}

		worker.cargo += 1;

		attachments.remove(player.mp, 'bucket');
		animations.stopOnServer(player.mp);

		if (this.isEnoughCargo(worker)) {
			this.points.hide(player);

			this.createOrder(player);
		}
	}

	private getCargo(player: Player) {
		if (player.mp.vehicle) return;

		animations.playOnServer(player.mp, 'hold_box');
		attachments.add(player.mp, 'bucket');

		this.showCargoPoint(player);
	}

	private showCargoPoint(player: Player) {
		const { vehicle } = this.workers.get(player);

		player.callEvent('Cargo-ShowVehiclePoint', [vehicle, 'Building-AddCargoToVehicle']);
	}
}

export default new Driver();
