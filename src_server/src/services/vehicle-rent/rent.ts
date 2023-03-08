import hud from 'helpers/hud';
import money from 'helpers/money';
import vehicleCreator from 'vehicle/creator';
import Service from '../service';

type RentItem = {
	timer?: NodeJS.Timeout;
	vehicle: VehicleMp;
};

class VehicleRent extends Service {
	private readonly model: string;

	private readonly price: number;

	private readonly license?: string;

	private rented: Map<string, RentItem>;

	constructor(
		name: string,
		blip: BlipsOptions,
		model: string,
		price: number,
		license?: string
	) {
		super(name, blip);

		this.price = price;
		this.model = model;
		this.license = license;
		this.rented = new Map();
	}

	onKeyPress(player: Player) {
		this.rentVehicle(player);
	}

	protected subscribeToEvents() {
		mp.events.subscribeToDefault({
			playerQuit: this.terminateRent.bind(this),
			playerEnterVehicle: this.onEnterInVehicle.bind(this),
			playerExitVehicle: this.onExitFromVehicle.bind(this)
		});
	}

	private isAlreadyRented(player: Player) {
		return this.rented.has(player.dbId);
	}

	private async rentVehicle(player: Player) {
		if (this.license && !player.hasLicense(this.license)) {
			return hud.showNotification(player, 'error', 'У вас нет лицензии на данное ТС!');
		}
		if (this.isAlreadyRented(player)) {
			return this.terminateRent(player);
		}

		await money.change(player, 'cash', -this.price, 'vehicle rent');
		await this.spawnVehicle(player);
	}

	private spawnVehicle(player: Player) {
		const { position } = player.mp;

		const vehicle = vehicleCreator.buildTemporary(
			this.model,
			{ ...position, y: position.y + 1.5 },
			90,
			{ player: player.dbId },
			{ paint: { primary: [0, 32, 90, 0], secondary: [0, 32, 90, 0] } }
		);

		this.rented.set(player.dbId, { vehicle });
	}

	private terminateRent(player: Player) {
		const vehicle = this.rented.get(player.dbId);

		if (vehicle) {
			clearTimeout(vehicle.timer);
			mp.vehicles.delete(vehicle.vehicle);

			this.rented.delete(player.dbId);
		}
	}

	private onEnterInVehicle(player: Player, vehicle: VehicleMp) {
		if (vehicle.name === this.model) {
			const rent = this.rented.get(player.dbId);
			if (rent?.timer) clearTimeout(rent.timer);
		}
	}

	private onExitFromVehicle(player: Player, vehicle: VehicleMp) {
		if (vehicle.name === this.model) {
			const rent = this.rented.get(player.dbId);
			if (!rent) return;

			rent.timer = setTimeout(this.terminateRent.bind(this, player), 15 * 60 * 1000);
			hud.showNotification(
				player,
				'info',
				'Через 15 минут аренда закончится, если вы не сядете в ТС'
			);
		}
	}
}

export default VehicleRent;
