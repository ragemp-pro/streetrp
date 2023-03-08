import vehicleSpawn from './spawn';
import './sync';
import './controls';
import './cruise-control';

export enum Door {
	FRONT_LEFT = 0,
	FRONT_RIGHT = 1,
	BACK_LEFT = 2,
	BACK_RIGHT = 3,
	HOOD = 4,
	TRUNK = 5,
	BACK = 6,
	BACK2 = 7
}

const player = mp.players.local;

class VehicleCtrl {
	constructor() {
		mp.events.subscribe({
			'Vehicle-GetSpec': this.getSpec,
			'Vehicle-GetFreeSeat': this.getFreeSeat,
			'Vehicle-GetSpawnCoords': vehicleSpawn.getClosestSpawnCoords
		});
	}

	isDriver(vehicle: VehicleMp) {
		return vehicle && vehicle.getPedInSeat(-1) === player.handle;
	}

	getNearestInRange(range: number) {
		const { x, y, z } = player.position;

		let currentVehicle: VehicleMp;
		let tempDist = 99999999;

		mp.vehicles.forEachInStreamRange((vehicle) => {
			const { position } = vehicle;
			const dist = mp.game.system.vdist(position.x, position.y, position.z, x, y, z);

			if (dist < range && dist < tempDist) {
				currentVehicle = vehicle;
				tempDist = dist;
			}
		});

		return currentVehicle;
	}

	getFreeSeat(vehicle: VehicleMp) {
		for (let seat = 0; seat < vehicle.getMaxNumberOfPassengers(); seat++) {
			if (vehicle.isSeatFree(seat)) return seat;
		}
	}

	getSpec(model: string) {
		const hash = mp.game.joaat(model);
		const spec = {
			speed: 0,
			acceleration: 0,
			brakes: 0,
			clutch: 0
		};

		spec.speed = Math.round(mp.game.vehicle.getVehicleModelMaxSpeed(hash) / 1.2);
		spec.acceleration = mp.game.vehicle.getVehicleModelAcceleration(hash) * 100;
		spec.brakes = mp.game.vehicle.getVehicleModelMaxBraking(hash) * 100;
		spec.clutch = mp.game.vehicle.getVehicleModelMaxTraction(hash) * 10;

		return spec;
	}
}

export default new VehicleCtrl();
