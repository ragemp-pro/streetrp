import attachments from 'helpers/attachments';
import Branch from '../branch';
import Vehicle from '../vehicle';
import { clothes, vehiclePositions } from './data';

class Forklift extends Branch {
	private vehicle: Vehicle;

	constructor() {
		super('Forklift', 100, clothes);

		this.vehicle = new Vehicle(['forklift'], vehiclePositions.Forklift, [
			255,
			255,
			255,
			0
		]);
	}

	createPoints(coords: PositionEx[]) {
		this.points.createForOrder(
			{ x: 1225.015, y: -3103.149, z: 5.482 },
			4,
			this.createOrder.bind(this)
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
		if (!this.vehicle.isOwnedByWorker(this.workers.get(player), player.mp.vehicle))
			return;

		await super.completeOrder(player);

		this.points.show(player);
	}

	protected createOrder(player: Player) {
		if (!this.vehicle.isOwnedByWorker(this.workers.get(player), player.mp.vehicle))
			return;

		this.points.hide(player);

		super.createOrder(player);

		attachments.add(player.mp.vehicle, 'fork_box');
	}

	protected cancelOrder(player: Player) {
		const { vehicle } = this.workers.get(player);

		attachments.remove(vehicle, 'fork_box');

		super.cancelOrder(player);
	}
}

export default new Forklift();
