import { isNumber } from 'lodash';

type Clothes = {
	[name: string]: number[][];
};

const localPlayer = mp.players.local;

const components = {
	jacket: 11,
	shirt: 11,
	pants: 4,
	shoes: 6,
	mask: 1,
	accessories: 7
};
const props = {
	hat: 0,
	glasses: 1,
	watch: 6
};

const сamPositions: {
	[name: string]: { angle: number; dist: number; height: number };
} = {
	hat: { angle: 0, dist: 0.7, height: 0.8 },
	jacket: { angle: 0, dist: 1.1, height: 0.3 },
	shirt: { angle: 0, dist: 1.1, height: 0.3 },
	pants: { angle: 0, dist: 1.2, height: -0.4 },
	shoes: { angle: 0, dist: 0.7, height: -0.7 },
	mask: { angle: 0, dist: 0.7, height: 0.6 },
	watch: { angle: 74, dist: 1, height: 0 },
	glasses: { angle: 0, dist: 0.7, height: 0.6 },
	accessories: { angle: 0, dist: 1, height: 0.3 }
};

class ClothingShop {
	private type = 'hat';

	private item = 0;

	private clothes: Clothes = {};

	constructor() {
		mp.events.subscribe({
			'ClothingShop-ShowMenu': this.showMenu.bind(this),
			'ClothingShop-CloseMenu': this.closeMenu.bind(this),
			'ClothingShop-ChangeType': this.changeType.bind(this),
			'ClothingShop-ChangeItem': this.setItem.bind(this)
		});
	}

	private showMenu() {
		mp.browsers.showPage('clothing_shop', null, true, true);
	}

	private async closeMenu() {
		await mp.events.callServer('ClothingShop-Exit');

		mp.cameras.reset();
		this.clothes = {};

		mp.browsers.hidePage();
	}

	private async getClothesByType(type: string) {
		if (this.clothes[type]) return;

		const items = await mp.events.callServer('ClothingShop-GetClothes', type);

		this.clothes[type] = items;
	}

	private updateClothesData() {
		mp.events.callBrowser('ClothingShop-SetData', {
			price: this.getPriceOfItem(),
			colors: this.getColorsAmount()
		});
	}

	private async setItem(item: number, color: number, next = false, initial = false) {
		this.item = item;

		const style = this.getStyleOfItem();

		await mp.events.callServer('ClothingShop-SetItem', [
			this.type,
			{ style, color },
			initial
		]);

		if (next) this.updateClothesData();
	}

	private async changeType(type: string) {
		this.type = type;

		await this.getClothesByType(type);

		this.setItem(0, 0, true, true);
		this.switchCamera();

		return this.clothes[type].length;
	}

	private getColorsAmount() {
		const style = this.getStyleOfItem();

		return isNumber(components[this.type])
			? localPlayer.getNumberOfTextureVariations(components[this.type], style)
			: localPlayer.getNumberOfPropTextureVariations(props[this.type], style);
	}

	private getPriceOfItem() {
		return this.clothes[this.type][this.item][1];
	}

	private getStyleOfItem() {
		return this.clothes[this.type][this.item][0];
	}

	private switchCamera() {
		const camData = сamPositions[this.type];
		const offset = new mp.Vector3(0, 0, camData.height);

		mp.cameras.setToPlayer(offset, offset, camData.dist, camData.angle);
	}
}

const shop = new ClothingShop();
