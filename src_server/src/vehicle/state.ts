import VehicleModel from 'models/Vehicle';

export type State = {
	engine: boolean;
	locked: boolean;
	dirt: number;
	health: {
		body: number;
		engine: number;
	};
	roof: number;
	doors: number[];
	wheels: number[];
	windows: number[];
	radioIndex: number;
	trunk: boolean;
	indicators: {
		left: boolean;
		right: boolean;
	};
};

class VehicleState {
	constructor() {
		this.runAutosaveInterval();
	}

	get initial(): State {
		return {
			engine: false,
			locked: false,
			health: {
				body: 1000,
				engine: 1000
			},
			roof: 0,
			trunk: false,
			dirt: 0,
			radioIndex: 0,
			doors: [],
			wheels: [],
			windows: [],
			indicators: {
				left: false,
				right: false
			}
		};
	}

	get(vehicle: VehicleMp): State {
		return (vehicle && vehicle?.getVariable('state')) || {};
	}

	setEngineStatus(vehicle: VehicleMp, status: boolean) {
		vehicle.engine = status;

		this.update(vehicle, { engine: status });
	}

	setRadioStation(vehicle: VehicleMp, station: number) {
		this.update(vehicle, { radioIndex: station });
	}

	setDirtLevel(vehicle: VehicleMp, value: number) {
		this.update(vehicle, { dirt: value });

		mp.players.callInStream(vehicle.position, 'VehicleSync-SetDirtLevel', [
			vehicle,
			value
		]);
	}

	setDoors(vehicle: VehicleMp, doors: number[]) {
		this.update(vehicle, { doors });

		mp.players.callInStream(vehicle.position, 'VehicleSync-SetDoorsState', [
			vehicle,
			doors
		]);
	}

	setLockStatus(vehicle: VehicleMp, status: boolean) {
		vehicle.locked = status;

		this.update(vehicle, { locked: status });

		mp.players.callInStream(vehicle.position, 'VehicleSync-SetLockStatus', [
			vehicle,
			status
		]);
	}

	setHealth(vehicle: VehicleMp, body: number, engine: number) {
		this.update(vehicle, {
			health: { body, engine }
		});

		mp.players.callInStream(vehicle.position, 'VehicleSync-SetHealth', [
			vehicle,
			body,
			engine
		]);
	}

	toggleIndicator(vehicle: VehicleMp, indicator: 'left' | 'right') {
		const { indicators } = this.get(vehicle);

		indicators[indicator] = !indicators[indicator];

		this.update(vehicle, { indicators });

		mp.players.callInStream(vehicle.position, 'VehicleSync-SetIndicators', [
			vehicle,
			indicators.left,
			indicators.right
		]);
	}

	toggleTrunk(vehicle: VehicleMp) {
		const { trunk } = this.get(vehicle);

		this.update(vehicle, { trunk: !trunk });

		return !trunk;
	}

	update(vehicle: VehicleMp, data: Partial<State>) {
		const state = this.get(vehicle);

		vehicle.setVariable('state', { ...state, ...data });
	}

	private runAutosaveInterval() {
		setInterval(() => {
			const operations = [];

			mp.vehicles.forEach((vehicle) => {
				if (!mp.vehicles.exists(vehicle) || !vehicle.dbId) return;

				operations.push({
					updateOne: {
						filter: { _id: vehicle.dbId },
						update: {
							fuel: vehicle.getVariable('fuel').current,
							state: {
								...this.get(vehicle),
								health: { body: vehicle.bodyHealth, engine: vehicle.engineHealth }
							}
						}
					}
				});
			});

			if (operations.length) VehicleModel.bulkWrite(operations);
		}, 3 * 60 * 1000);
	}
}

export default new VehicleState();
