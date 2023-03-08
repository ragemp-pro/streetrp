import playerClothes, { ClothesName } from 'player/clothes';

type WardrobeItem = {
	type: ClothesName;
	index: number;
};

export type Clothes = {
	[gender in Player['gender']]: {
		[name in ClothesName]?: ([number, number, ClothesName] | [number, number])[];
	};
};

class FactionWardrobe {
	private clothes: Clothes;

	constructor(clothes: Clothes) {
		this.clothes = clothes;
	}

	showMenu(player: Player) {
		if (!player.faction) return;

		player.togglePrivateDimension();
		player.callEvent('FactionWardrobe-ShowMenu');
	}

	getClothesByType(player: Player, type: ClothesName) {
		const genderClothes = this.getClothesOfGender(player);

		return genderClothes[type] ?? [];
	}

	useClothesItem(player: Player, data: WardrobeItem, prev?: number) {
		const clothes = this.getClothesOfGender(player);
		const { type, index } = data;

		const prevItem = clothes[type][prev];
		const item = clothes[type][index];

		if (prevItem && prevItem[2] !== item[2]) {
			playerClothes.hide(player, prevItem[2] ?? type);
		}

		if (item) {
			const [style, color, name] = item;
			playerClothes.set(player, name ?? type, { style, color });
		}
	}

	private getClothesOfGender(player: Player) {
		return this.clothes[player.gender];
	}
}

export default FactionWardrobe;
