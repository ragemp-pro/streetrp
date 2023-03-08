import hud from 'helpers/hud';
import policeCalls from 'factions/police/calls';
import Branch from '../branch';
import Vehicle from '../vehicle';

class Theft extends Branch {
	private vehicle: Vehicle;

	constructor(type: string, salary: number, vehicle: Vehicle) {
		super(type, salary);

		mp.events.subscribeToDefault({
			playerUnlockVehicle: this.onUnlockVehicle.bind(this)
		});

		this.vehicle = vehicle;
	}

	startWork(player: Player) {
		if (this.workers.amount > 3) {
			hud.showNotification(player, 'error', 'Наводок пока нет, подлетай позже!', true);
			throw new SilentError('limit of workers');
		}

		super.startWork(player);

		const worker = this.workers.get(player);

		this.vehicle.spawn(player, worker, false);
		mp.blips.create(
			worker.vehicle.position,
			{ model: 0, color: 48, name: 'Чекпоинт' },
			player
		);
	}

	finishWork(player: Player) {
		const worker = this.workers.get(player);

		if (worker.vehicle) {
			policeCalls.deleteCall(worker.vehicle.id.toString());
			this.vehicle.destroy(worker);
			mp.blips.delete(player, 'Чекпоинт');
		}

		super.finishWork(player);
	}

	protected async onEnterPoint(player: Player) {
		if (!this.vehicle.isOwnedByWorker(this.workers.get(player), player.mp.vehicle))
			return;

		await this.completeOrder(player);

		this.finishWork(player);
	}

	private onUnlockVehicle(player: Player, vehicle: VehicleMp) {
		if (!this.vehicle.isOwnedByWorker(this.workers.get(player), vehicle)) return;

		this.createOrder(player);

		hud.showNotification(
			player,
			'info',
			'Отлично! Доставь тачку, в указанное место на карте.'
		);
	}
}

export default Theft;
