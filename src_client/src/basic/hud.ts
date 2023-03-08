import binder from 'utils/binder';

const player = mp.players.local;

class HUD {
	private isVisible = true;

	constructor() {
		mp.game.ui.setHudColour(143, 203, 54, 148, 255);
		mp.game.ui.setHudColour(144, 203, 54, 148, 255);
		mp.game.ui.setHudColour(145, 203, 54, 148, 255);

		binder.bind('noHUD', 'F5', this.toggle.bind(this));
		binder.bind('cursor', '`', () => this.setCursorVisible(!mp.gui.cursor.visible), null);

		mp.events.subscribeToDefault({ render: this.hideUnnecessaryElements });
		mp.events.subscribe({
			'HUD-GetBinds': this.getBinds,
			'HUD-GetMinimapAnchor': this.getMinimapAnchor,
			'HUD-ShowLevel': this.showLevelStats.bind(this),
			'HUD-ShowInteract': this.showInteract.bind(this)
		});

		setInterval(() => this.updateOnline(), 5000);
	}

	get visible() {
		return this.isVisible;
	}

	set visible(status: boolean) {
		this.isVisible = status;

		mp.game.ui.displayAreaName(status);
		mp.game.ui.displayRadar(status);
		mp.game.ui.displayHud(status);
		mp.gui.chat.show(status);

		mp.events.callBrowser('HUD-SetVisible', status, false);
	}

	showInteract(keyName?: string) {
		if (keyName) {
			mp.game.audio.playSoundFrontend(
				-1,
				'Boss_Blipped',
				'GTAO_Magnate_Hunt_Boss_SoundSet',
				true
			);
		}

		this.triggerEvent('HUD-ShowInteract', keyName);
	}

	showAmmo(count: number) {
		this.triggerEvent('HUD-SetAmmo', count);
	}

	setLocation(street: string, zone: string, greenZone: boolean) {
		this.triggerEvent('HUD-SetLocation', { street, zone, greenZone });
	}

	setMicStatus(status: boolean) {
		this.triggerEvent('HUD-SetMicStatus', status);
	}

	showOffer(seller: string, text: string) {
		this.triggerEvent('HUD-ShowOffer', { seller, text });
	}

	showLevelStats(level: number, experience: [number, number]) {
		this.triggerEvent('HUD-ShowLevel', { current: level, experience });
	}

	updateOnline() {
		mp.events.callBrowser('App-SetOnline', mp.players.length, false);
	}

	setPlayerId() {
		mp.events.callBrowser('Player-SetId', player.getVariable('uid'), false);
	}

	getMinimapAnchor() {
		const sfX = 1.0 / 20.0;
		const sfY = 1.0 / 20.0;
		const safeZone = mp.game.graphics.getSafeZoneSize();
		const aspectRatio = mp.game.graphics.getScreenAspectRatio(false);
		const resolution = mp.game.graphics.getScreenActiveResolution(0, 0);
		const scaleX = 1.0 / resolution.x;
		const scaleY = 1.0 / resolution.y;

		const minimap = {
			scaleX,
			scaleY,
			width: scaleX * (resolution.x / (4 * aspectRatio)),
			height: scaleY * (resolution.y / 5.674),
			topY: 0,
			rightX: 0,
			bottomY: 1.0 - scaleY * (resolution.y * (sfY * (Math.abs(safeZone - 1.0) * 10))),
			leftX: scaleX * (resolution.x * (sfX * (Math.abs(safeZone - 1.0) * 10)))
		};

		minimap.rightX = minimap.leftX + minimap.width;
		minimap.topY = minimap.bottomY - minimap.height;

		return minimap;
	}

	setCursorVisible(status: boolean) {
		if (player.getVariable('isDying')) return;

		mp.gui.cursor.show(status, status);
	}

	private getBinds() {
		return mp.storage.data.binds;
	}

	private toggle() {
		if (!mp.browsers.hud) return;
		this.visible = !this.visible;
	}

	private hideUnnecessaryElements() {
		mp.game.ui.displayAmmoThisFrame(false);
		mp.game.ui.displayAreaName(false);
		mp.game.ui.hideHudComponentThisFrame(6);
		mp.game.ui.hideHudComponentThisFrame(7);
		mp.game.ui.hideHudComponentThisFrame(8);
		mp.game.ui.hideHudComponentThisFrame(9);
		mp.game.ui.hideHudComponentThisFrame(13);
	}

	private triggerEvent(name: string, data: any) {
		if (!mp.browsers.hud) return;

		mp.events.callBrowser(name, data, false);
	}
}

export default new HUD();
