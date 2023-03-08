import CharModel from 'models/Character';
import equipment from './equipment';

export type Appearance = {
	gender: 'male' | 'female';
	skindata: number[];
	facedata: number[];
	headOverlay: [number, number][];
	eyeColor: number;
	hair: {
		style: number;
		color: number;
		highlight: number;
	};
	tattoos: { dict: string; texture: string }[];
};

class Character {
	constructor() {
		mp.events.subscribe({
			'Character-Create': this.create.bind(this),
			'Character-ShowCreator': this.showCreator
		});
	}

	load(player: Player, data: Appearance) {
		const { mp } = player;

		if (!data) return mp.setOwnVariable('isNewbie', true);

		player.gender = data.gender;

		mp.setCustomization(
			data.gender === 'male',
			data.skindata[0],
			data.skindata[1],
			0,
			data.skindata[0],
			data.skindata[1],
			0,
			data.skindata[2],
			data.skindata[3],
			0,
			data.eyeColor,
			data.hair.color,
			data.hair.highlight,
			data.facedata
		);
		mp.setClothes(2, data.hair.style, 0, 0);

		this.setHeadOverlay(mp, data.headOverlay);
		this.setTattoos(mp, data.tattoos);

		equipment.init(player);
	}

	async getPlayerAppearance(player: Player) {
		const data = await CharModel.findById(player.dbId)
			.select({ _id: 0, appearance: 1 })
			.lean();

		return data.appearance as Appearance;
	}

	setTattoos(player: PlayerMp, items: Appearance['tattoos']) {
		player.clearDecorations();

		items.forEach((item) => {
			player.setDecoration(mp.joaat(item.dict), mp.joaat(item.texture));
		});
	}

	private showCreator(player: Player) {
		player.tp({ x: -811.811, y: 175.129, z: 76.745 }, 133, player.mp.id + 100);

		player.callEvent('CharCreator-ShowMenu');
	}

	private async create(
		player: Player,
		data: Appearance,
		clothes: { [name: string]: number }
	) {
		const items: InventoryItem[] = Object.entries(clothes).map(
			([name, style], index) => ({
				name,
				cell: index,
				amount: 1,
				data: { style, color: 0 }
			})
		);

		await this.save(player, data, items);
	}

	private async save(player: Player, data: Appearance, clothes: InventoryItem[]) {
		await CharModel.findByIdAndUpdate(player.dbId, {
			$set: { appearance: data, inventory: clothes }
		});

		player.inventory = clothes;
		this.load(player, data);
		player.inventory.forEach((item) => equipment.equip(player, item));
	}

	private setHeadOverlay(player: PlayerMp, list: [number, number][]) {
		list.forEach((item, index) =>
			player.setHeadOverlay(index, [
				item[0] === -1 ? 255 : item[0],
				1.0,
				item[1],
				item[1]
			])
		);
	}

	private setSkin(player: PlayerMp, gender: string) {
		player.model = mp.joaat(
			gender === 'female' ? 'mp_f_freemode_01' : 'mp_m_freemode_01'
		);
	}

	private setEyes(player: PlayerMp, color: number) {
		player.eyeColor = color;
	}

	private setParents(player: PlayerMp, data: number[]) {
		player.setHeadBlend(data[0], data[1], 0, data[0], data[1], 0, data[2], data[3], 0.0);
	}

	private setFaceFeatures(player: PlayerMp, data: number[]) {
		data.forEach((item, index) => player.setFaceFeature(index, item || 0));
	}

	private setHair(player: PlayerMp, data: Appearance['hair']) {
		player.setClothes(2, data.style, 0, 0);
		player.setHairColor(data.color, data.highlight);
	}
}

export default new Character();
