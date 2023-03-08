import vehicleCtrl from 'vehicle';
import vehicleState from './state';
import vehicleTuning, { Tuning } from './tuning';
import owning from './owning';

class VehicleBuilder {
	private vehicle?: VehicleMp;

	private tuning: Tuning = { ...vehicleTuning.default };

	constructor(model: string, position: PositionEx, heading: number, dimension = 0) {
		const { x, y, z } = position;
		this.reset(model, new mp.Vector3(x, y, z), heading, dimension);
	}

	build() {
		this.vehicle.setVariable('tuning', this.tuning);

		const result = this.vehicle;
		this.vehicle = null;

		return result;
	}

	setNumberPlate(value: string) {
		this.vehicle.numberPlate = value;
	}

	setOwner(playerId: string, faction?: string) {
		owning.setOwner(this.vehicle, { player: playerId, faction });
	}

	installTuning(options: Partial<Tuning>) {
		this.tuning = { ...this.tuning, ...options };
	}

	private reset(model: string, position: Vector3Mp, heading: number, dimension: number) {
		const { tank, health } = vehicleCtrl.getTypeData(model);

		this.vehicle = mp.vehicles.new(model, position, {
			dimension,
			heading
		});

		this.vehicle.name = model;
		this.vehicle.locked = true;
		this.vehicle.inventory = [];
		this.vehicle.owner = {};

		this.vehicle.setVariables({
			maxHealth: health,
			fuel: {
				current: tank,
				max: tank
			},
			state: { ...vehicleState.initial, locked: true }
		});
	}
}

export default VehicleBuilder;
