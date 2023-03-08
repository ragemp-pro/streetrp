import { fromObject } from 'utils/vector';

type PointData = {
	marker: MarkerMp;
	event?: string;
};

class Cargo {
	private point?: ColshapeMp;

	constructor() {
		mp.events.subscribe({
			'Cargo-ShowVehiclePoint': this.showVehiclePoint.bind(this)
		});
	}

	removePoint() {
		if (!this.point) return;

		const { marker }: PointData = mp.colshapes.getData(this.point);

		marker.destroy();
		mp.colshapes.destroy(this.point);

		this.point = null;
	}

	private showVehiclePoint(vehicle: VehicleMp, callbackEvent?: string) {
		if (!vehicle || this.point) return;

		const position = vehicle.getWorldPositionOfBone(
			vehicle.getBoneIndexByName('platelight')
		);

		const marker = mp.markers.new(1, fromObject({ ...position, z: position.z - 1 }), 2, {
			dimension: vehicle.dimension,
			color: [207, 152, 25, 100]
		});

		this.point = mp.colshapes.create(
			position,
			2,
			{
				onEnter: this.onEnterPoint.bind(this)
			},
			{
				event: callbackEvent,
				marker
			}
		);
	}

	private async onEnterPoint(data: PointData) {
		const { event } = data;

		try {
			if (event) await mp.events.callServer(event);

			this.removePoint();
		} catch (err) {}
	}
}

export default new Cargo();
