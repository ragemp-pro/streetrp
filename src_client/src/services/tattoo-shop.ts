import { find, findIndex } from 'lodash';
import tattooList from 'data/tattoos.json';

type Tattoo = {
	dict: string;
	texture: string;
};

const localPlayer = mp.players.local;

const сamPositions: {
	[name: string]: { angle: number; dist: number; height: number };
} = {
	head: { angle: 0, dist: 1, height: 0.5 },
	torso: { angle: 0, dist: 1, height: 0.2 },
	leftarm: { angle: 55, dist: 1, height: 0.15 },
	rightarm: { angle: 305, dist: 1, height: 0.15 },
	leftleg: { angle: 55, dist: 1, height: -0.5 },
	rightleg: { angle: 305, dist: 1, height: -0.5 }
};

class TattooShop {
	private type = 'head';

	private limit = 20;

	private item = 0;

	private tattoos: Tattoo[] = [];

	constructor() {
		mp.events.subscribe({
			'TattooShop-ShowMenu': this.showMenu.bind(this),
			'TattooShop-CloseMenu': this.closeMenu.bind(this),
			'TattooShop-ChangeType': this.changeType.bind(this),
			'TattooShop-SetItem': this.setItem.bind(this),
			'TattooShop-Buy': this.buy.bind(this),
			'TattooShop-Remove': this.remove.bind(this)
		});
	}

	private showMenu(tattoos: Tattoo[], prices: { [name: string]: number }) {
		this.tattoos = tattoos;

		mp.browsers.showPage('tattoo_shop', { prices }, true, true);
	}

	private async closeMenu() {
		await mp.events.callServer('TattooShop-Exit');

		mp.cameras.reset();
		this.reset();
		this.tattoos = [];

		mp.browsers.hidePage();
	}

	private reset() {
		localPlayer.clearDecorations();

		this.tattoos.forEach((item) => {
			localPlayer.setDecoration(mp.game.joaat(item.dict), mp.game.joaat(item.texture));
		});
	}

	private setItem(index: number) {
		this.item = index;

		const tattoo = this.getCurrentTatto();

		this.reset();
		localPlayer.setDecoration(mp.game.joaat(tattoo.dict), mp.game.joaat(tattoo.texture));

		return !!find(this.tattoos, tattoo);
	}

	private async changeType(type: string) {
		this.type = type;

		this.switchCamera();

		return {
			items: this.getAmountOfType(),
			isExists: this.setItem(0)
		};
	}

	private getCurrentTatto() {
		const gender = localPlayer.isMale() ? 'male' : 'female';
		const tattoo = tattooList[this.type][this.item];

		return { ...tattoo, texture: tattoo.texture[gender] } as Tattoo;
	}

	private getAmountOfType() {
		return tattooList[this.type] ? tattooList[this.type].length : 0;
	}

	private switchCamera() {
		const camData = сamPositions[this.type];
		const offset = new mp.Vector3(0, 0, camData.height);

		mp.cameras.setToPlayer(offset, offset, camData.dist, camData.angle);
	}

	private async buy(payment: string) {
		if (this.tattoos.length === this.limit) {
			mp.game.ui.notifications.show('error', 'Превышен лимит татуировок', true);

			return mp.events.reject(new Error('limit of tattoos is exceeded'));
		}

		const tattoo = this.getCurrentTatto();

		await mp.events.callServer('TattooShop-Buy', ['add', this.type, tattoo, payment]);

		this.tattoos.push(tattoo);
		this.reset();
	}

	private async remove(payment: string) {
		const tattoo = this.getCurrentTatto();
		const index = findIndex(this.tattoos, tattoo);

		if (index >= 0) {
			await mp.events.callServer('TattooShop-Buy', [
				'remove',
				this.type,
				tattoo,
				payment
			]);

			this.tattoos.splice(index, 1);
		}
	}
}

const shop = new TattooShop();
