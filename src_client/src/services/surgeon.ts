import character from 'player/character';

class Surgeon {
	private initialParams: Partial<typeof character.appearance>;

	constructor() {
		this.initialParams = {};

		mp.events.subscribe({
			'Surgeon-ShowMenu': this.showMenu.bind(this),
			'Surgeon-CloseMenu': this.closeMenu.bind(this),
			'Surgeon-GetData': this.getAppearanceData.bind(this)
		});
	}

	private getAppearanceData() {
		const {
			gender,
			skindata,
			facedata,
			headOverlay,
			tattoos,
			hair,
			eyeColor
		} = character.appearance;

		const changedGender = this.initialParams.gender !== gender;

		return {
			gender,
			skindata,
			facedata,
			...(changedGender && { headOverlay, hair, eyeColor, tattoos })
		};
	}

	private showMenu(data: Partial<typeof character.appearance>, price: number) {
		this.initialParams = data;

		character.reset(data);

		this.setCamera();
		mp.browsers.showPage('surgeon', { price });
	}

	private async closeMenu() {
		await mp.events.callServer('Surgeon-Exit');

		this.initialParams = {};

		mp.cameras.reset();
		mp.browsers.hidePage();
	}

	private setCamera() {
		const offset = new mp.Vector3(0, 0, 0.6);

		mp.cameras.setToPlayer(offset, offset, 0.8);
	}
}

const service = new Surgeon();
