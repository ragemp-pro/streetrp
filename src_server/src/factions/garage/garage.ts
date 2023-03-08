import { getClosestVehicleInRange } from 'utils/vehicle';
import { Tuning } from 'vehicle/tuning';
import { Builder } from 'vehicle/creator';
import vehicles from 'data/vehicles.json';

type Position = PositionEx & { rot: number };
type SpawnPositions = {
	[type in 'all' | 'helicopter' | 'plane']?: Position[];
};

class FactionGarage {
	public readonly vehicles: Map<number, VehicleMp>;

	private models: string[];

	private positions: SpawnPositions;

	private tuning: Partial<Tuning>;

	constructor(positions: SpawnPositions, models: string[], tuning: Partial<Tuning>) {
		this.vehicles = new Map();

		this.positions = positions;
		this.models = models;
		this.tuning = tuning;
	}

	showMenu(player: Player) {
		player.callEvent('Factions-ShowGarage', [this.models]);
	}

	spawnVehicle(player: Player, model: string) {
		const position = this.getFreePosition(model);
		if (!position) return mp.events.reject('Нет свободных паркомест');

		const builder = new Builder(model, position, position.rot, player.mp.dimension);

		builder.setNumberPlate(this.getNumberPlate(player.faction));
		builder.installTuning(this.tuning);
		builder.setOwner(player.dbId, player.faction);

		const vehicle = builder.build();
		this.vehicles.set(vehicle.id, vehicle);
	}

	despawnVehicle(vehicle: VehicleMp) {
		if (vehicle) {
			mp.vehicles.delete(vehicle);
			this.vehicles.delete(vehicle.id);
		}
	}

	private getNumberPlate(faction: string) {
		const vehiclesAmount = this.vehicles.size + 1;

		return faction.slice(0, 4).toUpperCase() + vehiclesAmount;
	}

	private getFreePosition(model: string) {
		const vehicleType: string = vehicles[model]?.type;
		const positions: Position[] = this.positions[vehicleType] ?? this.positions.all;

		const position =
			positions &&
			positions.find((item) => {
				const vehicle = getClosestVehicleInRange(
					new mp.Vector3(item.x, item.y, item.z),
					2
				);

				return !vehicle;
			});

		return position;
	}
}

export default FactionGarage;
