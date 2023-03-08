import { isEmpty } from 'lodash';

type TuningData = {
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

export const mods = {
	spoiler: 0,
	front_bumper: 1,
	rear_bumper: 2,
	sideskirt: 3,
	exhaust: 4,
	frame: 5,
	grille: 6,
	hood: 7,
	roof: 10,
	engine: 11,
	brakes: 12,
	transmission: 13,
	horn: 14,
	suspension: 15,
	armor: 16,
	turbo: 18,
	rims: 23,
	livery: 48
};
const engineSounds = [
	'brabus850',
	'toysupmk4',
	'lambov10',
	'rb26dett',
	'rotary7',
	'musv8',
	'm297zonda',
	'm158huayra',
	'k20a',
	'gt3flat6',
	'predatorv8'
];

class VehicleTuning {
	get(vehicle: VehicleMp) {
		return vehicle?.getVariable('tuning') as TuningData;
	}

	setHeadlights(vehicle: VehicleMp, model: number) {
		vehicle.setLights(2);

		if (model > -1) {
			vehicle.toggleMod(22, true);
			mp.game.invoke('0xE41033B25D003A07', vehicle.handle, model);
		} else {
			vehicle.toggleMod(22, false);
			vehicle.setMod(22, model);
		}
	}

	setPaint(vehicle: VehicleMp, data: TuningData['paint']) {
		const { primary, secondary } = data;

		vehicle.setModColor1(primary[3], 0, 0);
		vehicle.setModColor2(secondary[3], 0);

		vehicle.setCustomPrimaryColour(primary[0], primary[1], primary[2]);
		vehicle.setCustomSecondaryColour(secondary[0], secondary[1], secondary[2]);
	}

	setWheels(vehicle: VehicleMp, data: TuningData['wheels']) {
		const { rims, color, tyres, smoke } = data;
		const { pearlescentColor } = vehicle.getExtraColours(0, 0);

		vehicle.setMod(mods.rims, rims);
		vehicle.setExtraColours(pearlescentColor, color);

		this.setTyres(vehicle, tyres);

		vehicle.toggleMod(20, true);
		vehicle.setTyreSmokeColor(...smoke);
	}

	setTyres(vehicle: VehicleMp, model: number) {
		mp.game.invoke(
			'0x6AF0636DDEDCB6DD',
			vehicle.handle,
			23,
			vehicle.getMod(23),
			model > -1
		);
	}

	setNeon(vehicle: VehicleMp, color: RGB) {
		for (let i = 0; i < 4; i++) vehicle.setNeonLightEnabled(i, true);

		vehicle.setNeonLightsColour(...color);
	}

	setEngineSound(vehicle: VehicleMp, sound = -1) {
		mp.game.invoke('0x4F0C413926060B38', vehicle.handle, engineSounds[sound] || '');
	}

	set(vehicle: VehicleMp, data: TuningData) {
		if (!vehicle || isEmpty(data)) return;

		Object.entries(mods).forEach(([name, id]) => vehicle.setMod(id, data[name] ?? -1));

		vehicle.setNumberPlateTextIndex(data.plate + 1);
		vehicle.setWindowTint(data.tint + 1);

		this.setPaint(vehicle, data.paint);
		this.setHeadlights(vehicle, data.lights);
		this.setWheels(vehicle, data.wheels);
		this.setNeon(vehicle, data.neon);
		this.setEngineSound(vehicle, data.engine_sound);
	}
}

export default new VehicleTuning();
