import { sample, random } from 'lodash';
import { getClosestVehicleInRange } from 'utils/vehicle';
import blips from 'helpers/blips';
import vehicleCreator from 'vehicle/creator';
import vehicleTuning, { Tuning } from 'vehicle/tuning';
import { Worker } from './workers';

type Position = PositionEx & { rot?: number };

class JobVehicle {
	private models: string[];

	private positions: Position[];

	private color?: RGBA;

	private tuning?: Partial<Tuning>;

	constructor(
		models: string[],
		positions: Position[],
		color?: RGBA,
		tuning?: Partial<Tuning>
	) {
		this.models = models;
		this.positions = positions;
		this.color = color;
		this.tuning = tuning;
	}

	isOwnedByWorker(worker: Worker, vehicle: VehicleMp) {
		return worker && worker.vehicle?.id === vehicle?.id;
	}

	spawn(player: Player, worker: Worker, owning = true) {
		const model = sample(this.models);
		const position = owning
			? this.getFreePosition() || sample(this.positions)
			: sample(this.positions);

		const vehicle = vehicleCreator.buildTemporary(
			model,
			position,
			position.rot,
			{
				player: owning ? player.dbId : ''
			},
			this.tuning
		);
		this.paintVehicle(vehicle);

		worker.vehicle = vehicle;
		blips.setWaypoint(player.mp, position);
	}

	destroy(worker: Worker) {
		const { vehicle } = worker;

		setTimeout(() => {
			mp.vehicles.delete(vehicle);

			if (worker) worker.vehicle = null;
		}, 100);
	}

	private paintVehicle(vehicle: VehicleMp) {
		const color: RGBA = this.color || [random(0, 255), random(0, 255), random(0, 255), 0];
		vehicleTuning.setPaint(vehicle, color, color);
	}

	private getFreePosition() {
		const position = this.positions.find((item) => {
			const vehicle = getClosestVehicleInRange(new mp.Vector3(item.x, item.y, item.z), 2);

			return !vehicle;
		});

		return position;
	}
}

export default JobVehicle;
