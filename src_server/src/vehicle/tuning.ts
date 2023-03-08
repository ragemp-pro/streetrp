import VehicleModel from 'models/Vehicle';

export type Tuning = {
	engine: number;
	engine_sound: number;
	turbo: number;
	horn: number;
	transmission: number;
	tint: number;
	suspension: number;
	brakes: number;
	lights: number;
	armor: number;
	lock: number;
	spoiler: number;
	sideskirt: number;
	exhaust: number;
	frame: number;
	grille: number;
	hood: number;
	roof: number;
	front_bumper: number;
	rear_bumper: number;
	neon: RGB;
	plate: number;
	livery: number;
	wheels: {
		rims: number;
		color: number;
		tyres: number;
		smoke: RGB;
	};
	paint: {
		primary: RGBA;
		secondary: RGBA;
	};
};
class VehicleTuning {
	get default(): Tuning {
		return {
			engine: -1,
			engine_sound: -1,
			turbo: -1,
			horn: -1,
			transmission: -1,
			tint: -1,
			suspension: -1,
			brakes: -1,
			lights: -1,
			armor: -1,
			lock: -1,
			spoiler: -1,
			sideskirt: -1,
			exhaust: -1,
			frame: -1,
			grille: -1,
			hood: -1,
			roof: -1,
			front_bumper: -1,
			rear_bumper: -1,
			plate: -1,
			livery: -1,
			wheels: {
				rims: -1,
				color: 0,
				tyres: -1,
				smoke: [255, 255, 255]
			},
			paint: {
				primary: [0, 0, 0, 0],
				secondary: [0, 0, 0, 0]
			},
			neon: [0, 0, 0]
		};
	}

	get(vehicle: VehicleMp) {
		return (vehicle?.getVariable('tuning') || {}) as Tuning;
	}

	getMainItems(data: Partial<Tuning>) {
		const parts = ['engine', 'armor', 'brakes', 'transmission', 'turbo'];
		const items: Partial<Tuning> = {};

		parts.forEach((part) => {
			items[part] = data[part] ?? this.default[part];
		});

		return items;
	}

	setPaint(vehicle: VehicleMp, primary: RGBA, secondary: RGBA) {
		this.update(vehicle, { paint: { primary, secondary } });
	}

	async update(vehicle: VehicleMp, data: Partial<Tuning>) {
		const updated = { ...this.default, ...this.get(vehicle), ...data };

		if (vehicle.dbId) {
			await VehicleModel.findByIdAndUpdate(vehicle.dbId, { $set: { tuning: data } });
		}

		vehicle.setVariable('tuning', updated);
	}
}

export default new VehicleTuning();
