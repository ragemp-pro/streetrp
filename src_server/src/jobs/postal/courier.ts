import hud from 'helpers/hud';
import animations from 'helpers/animations';
import Branch from '../branch';
import Vehicle from '../vehicle';
import { clothes, vehiclePositions } from './data';

class Courier extends Branch {
	private vehicle: Vehicle;

	constructor() {
		super('Courier', 75, clothes);

		this.vehicle = new Vehicle(['faggio3'], vehiclePositions.Courier, [255, 255, 255, 0]);

		this.points.createForOrder(
			{ x: 79.0298, y: 111.396, z: 81.168 },
			1.2,
			this.getCargo.bind(this)
		);
	}

	startWork(player: Player) {
		super.startWork(player);

		this.vehicle.spawn(player, this.workers.get(player));
		this.showCargoPoint(player);
	}

	finishWork(player: Player) {
		this.points.hide(player);
		this.vehicle.destroy(this.workers.get(player));

		super.finishWork(player);
	}

	protected async onEnterPoint(player: Player) {
		if (player.mp.vehicle) return;

		const worker = this.workers.get(player);

		if (worker.cargo) {
			await this.completeOrder(player);
			worker.cargo -= 1;

			animations.setScenario(player, 'drop_package', true);
		}

		if (!worker.cargo) this.showCargoPoint(player);
		else this.createOrder(player);
	}

	private showCargoPoint(player: Player) {
		this.points.show(player);

		hud.showNotification(player, 'info', 'Отправляйтесь на склад за посылками');
	}

	private getCargo(player: Player) {
		if (player.mp.vehicle) return;

		const worker = this.workers.get(player);

		worker.cargo = 4;

		this.points.hide(player);
		this.createOrder(player);
	}
}

export default new Courier();
