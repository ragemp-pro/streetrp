import { isNumber } from 'lodash';
import vehicleSync from 'vehicle/sync';
import tuning, { mods } from 'vehicle/tuning';

const player = mp.players.local;

const cameraPositions = [
	{
		position: new mp.Vector3(-338.529, -143.28, 40.146),
		point: new mp.Vector3(-338.348, -122.966, 38.335),
		rotation: 250
	},
	{
		position: new mp.Vector3(-1162.599, -2005.088, 14.523),
		point: new mp.Vector3(-1140.883, -2007.601, 12.181),
		rotation: 137
	},
	{
		position: new mp.Vector3(736.854, -1082.216, 23.391),
		point: new mp.Vector3(730.306, -1093.932, 22.253),
		rotation: 270
	},
	{
		position: new mp.Vector3(1179.594, 2644.904, 38.841),
		point: new mp.Vector3(1170.992, 2637.905, 37.711),
		rotation: 180
	},
	{
		position: new mp.Vector3(110.781, 6620.085, 32.461),
		point: new mp.Vector3(110.716, 6631.907, 32.234),
		rotation: 45
	}
];

class LSC {
	private category: string;

	private index = 0;

	private item = 0;

	private vehicle?: VehicleMp;

	constructor() {
		mp.events.subscribe({
			'LSC-ShowMenu': this.showMenu.bind(this),
			'LSC-CloseMenu': this.closeMenu.bind(this),
			'LSC-GetModAmount': this.getAmountOfMod.bind(this),
			'LSC-GetInstalledItem': this.getInstalledItem.bind(this),
			'LSC-SetCategory': this.changeCategory.bind(this),
			'LSC-SetItem': this.setItem.bind(this),
			'LSC-SetColor': this.changeColor.bind(this)
		});
	}

	private showMenu(index: number, prices: { [name: string]: number }) {
		this.index = index;
		this.vehicle = player.vehicle;

		this.vehicle.freezePosition(true);
		this.vehicle.setOnGroundProperly();

		this.correctRotation();
		this.setCamera(index);
		this.playEngineSound();

		mp.browsers.showPage(
			'lsc',
			{
				prices
			},
			true,
			true
		);
	}

	private closeMenu() {
		vehicleSync.syncTuning(this.vehicle);

		mp.cameras.reset();
		mp.browsers.hidePage();

		this.correctRotation();

		this.vehicle.freezePosition(false);
		this.vehicle = null;
	}

	private changeCategory(name: string) {
		this.category = name;
		this.item = 0;

		return this.getInstalledItem(name);
	}

	private getAmountOfMod(name: keyof typeof mods) {
		return this.vehicle.getNumMods(mods[name]);
	}

	private getInstalledItem(name: string) {
		const data = tuning.get(this.vehicle);
		const item = isNumber(data[name])
			? data[name]
			: isNumber(data.wheels[name])
			? data.wheels[name]
			: -2;

		return item as number;
	}

	private setItem(item: number) {
		switch (this.category) {
			case 'lights':
				this.vehicle.setLights(1);
				tuning.setHeadlights(this.vehicle, item);
				break;
			case 'horn':
				this.vehicle.setMod(mods.horn, item);
				this.vehicle.startHorn(3000, mp.game.joaat('HELDDOWN'), false);
				break;
			case 'turbo':
				this.vehicle.toggleMod(18, true);
				this.vehicle.setMod(mods.turbo, item);
				break;
			case 'neon':
				tuning.setNeon(this.vehicle, [0, 0, 0]);
				break;
			case 'plate':
				this.vehicle.setNumberPlateTextIndex(item + 1);
				break;
			case 'tint':
				this.vehicle.setWindowTint(item + 1);
				break;

			default:
				if (isNumber(mods[this.category])) this.vehicle.setMod(mods[this.category], item);
				break;
		}

		this.item = item + 1;
	}

	private changeColor(data: RGBA) {
		const color = data.slice(0, 3) as RGB;

		if (this.category === 'neon') {
			return tuning.setNeon(this.vehicle, color as RGB);
		}

		switch (this.item) {
			case 0:
				this.vehicle.setModColor1(data[3], 0, 0);
				this.vehicle.setCustomPrimaryColour(...(color as RGB));
				break;
			case 1:
				this.vehicle.setModColor2(data[3], 0);
				this.vehicle.setCustomSecondaryColour(...(color as RGB));
				break;
			case 2:
				this.vehicle.setExtraColours(
					this.vehicle.getExtraColours(0, 0).pearlescentColor,
					data[3]
				);
				break;

			default:
				break;
		}
	}

	private playEngineSound() {
		mp.game.invoke(
			'0xE65F427EB70AB1ED',
			-1,
			'MOD_SHOPS_ENTER_ENGINE_BLIP',
			this.vehicle.handle,
			0,
			0,
			0
		);
	}

	private correctRotation() {
		this.vehicle.setHeading(cameraPositions[this.index].rotation);
	}

	private setCamera(index: number) {
		const { position, point } = cameraPositions[index];

		mp.cameras.set(position, new mp.Vector3(0, 0, 0), point, 58);
	}
}

const lsc = new LSC();
