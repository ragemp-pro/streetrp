import attachments from 'helpers/attachments';
import Branch from '../branch';
import Vehicle from '../vehicle';
import { clothes, vehiclePositions } from './data';

class Handler extends Branch {
	private vehicle: Vehicle;

	constructor() {
		super('Handler', 200, clothes);

		this.vehicle = new Vehicle(['handler'], vehiclePositions.Handler, [255, 255, 255, 0]);
	}

	createPoints(coords: PositionEx[]) {
		this.points.createForOrder(
			{ x: 957.923, y: -2908.317, z: 5.902 },
			7,
			this.createOrder.bind(this)
		);

		super.createPoints(coords, 7);
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

		attachments.add(player.mp.vehicle, 'fork_container');
	}

	protected cancelOrder(player: Player) {
		const { vehicle } = this.workers.get(player);

		attachments.remove(vehicle, 'fork_container');

		super.cancelOrder(player);
	}
}

export default new Handler();
