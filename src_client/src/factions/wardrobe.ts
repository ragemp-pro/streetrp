type Clothes = {
	[name: string]: [number, number][];
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
	accessories: { angle: 0, dist: 1, height: 0.3 },
	decals: { angle: 0, dist: 1, height: 0.3 }
};

const player = mp.players.local;

class FactionWardrobe {
	private type = 'hat';

	private item = 0;

	private clothes: Clothes = {};

	constructor() {
		mp.events.subscribe({
			'FactionWardrobe-ShowMenu': this.showMenu.bind(this),
			'FactionWardrobe-CloseMenu': this.closeMenu.bind(this),
			'FactionWardrobe-ChangeType': this.changeType.bind(this),
			'FactionWardrobe-ChangeItem': this.setItem.bind(this)
		});
	}

	private showMenu() {
		const onDuty: boolean = player.getVariable('factionWork');

		mp.browsers.showPage('factions/wardrobe', { onDuty }, true, true);
	}

	private async closeMenu() {
		await mp.events.callServer('FactionWardrobe-Exit');

		mp.cameras.reset();
		this.clothes = {};

		mp.browsers.hidePage();
	}

	private async getClothesByType(type: string) {
		if (this.clothes[type]) return;

		const items = await mp.events.callServer('FactionWardrobe-GetClothes', type);

		this.clothes[type] = items;
	}

	private async setItem(item: number, initial = false) {
		if (!this.clothes[this.type]?.length) return;

		const prevItem = this.item;
		this.item = item;

		await mp.events.callServer('FactionWardrobe-WearItem', [
			this.type,
			this.item,
			!initial && prevItem
		]);
	}

	private async changeType(type: string) {
		this.type = type;

		await this.getClothesByType(type);

		this.setItem(0, true);
		this.switchCamera();

		return this.clothes[type].length;
	}

	private switchCamera() {
		const camData = сamPositions[this.type];
		const offset = new mp.Vector3(0, 0, camData.height);

		mp.cameras.setToPlayer(offset, offset, camData.dist, camData.angle);
	}
}

const wardrobe = new FactionWardrobe();

export {};
