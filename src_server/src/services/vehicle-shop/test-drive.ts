import vehicleCreator from 'vehicle/creator';

class TestDrive {
	private vehicles: Map<string, VehicleMp>;

	constructor() {
		this.vehicles = new Map();

		mp.events.subscribe({
			'VehicleShop-StartTestDrive': this.start.bind(this),
			'VehicleShop-StopTestDrive': this.stop.bind(this)
		});
	}

	private start(player: Player, position: PositionEx, model: string, color: RGBA) {
		if (this.vehicles.has(player.dbId)) return;

		const { dimension, heading } = player.mp;
		const vehicle = vehicleCreator.buildTemporary(
			model,
			position,
			heading,
			{ player: player.dbId },
			{ paint: { primary: color, secondary: color } }
		);
		vehicle.dimension = dimension;

		this.vehicles.set(player.dbId, vehicle);

		player.mp.putIntoVehicle(vehicle, 0);
	}

	private stop(player: Player) {
		const vehicle = this.vehicles.get(player.dbId);

		if (vehicle) {
			vehicle.destroy();
			this.vehicles.delete(player.dbId);
		}
	}
}

const testDrive = new TestDrive();
