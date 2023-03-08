import character from 'player/character';

class Barbershop {
	constructor() {
		mp.events.subscribe({
			'Barbershop-ShowMenu': this.showMenu.bind(this),
			'Barbershop-CloseMenu': this.closeMenu.bind(this),
			'Barbershop-GetData': this.getAppearanceData
		});
	}

	private getAppearanceData() {
		const { headOverlay, hair, eyeColor } = character.appearance;

		return { headOverlay, hair, eyeColor };
	}

	private showMenu(data: Partial<typeof character.appearance>, price: number) {
		character.reset(data);
		this.setCamera();

		mp.browsers.showPage('barbershop', { price }, true, true);
	}

	private async closeMenu() {
		await mp.events.callServer('Barbershop-Exit');

		mp.cameras.reset();
		mp.browsers.hidePage();
	}

	private setCamera() {
		const offset = new mp.Vector3(0, 0, 0.6);

		mp.cameras.setToPlayer(offset, offset, 0.7);
	}
}

const service = new Barbershop();
