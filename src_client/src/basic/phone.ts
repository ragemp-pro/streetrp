import binder from 'utils/binder';
import scenarios from './scenarios';
import voice from './voice';

const localPlayer = mp.players.local;

class Phone {
	public interlocutor: PlayerMp;

	private menu: boolean;

	constructor() {
		binder.bind('phone', 'M', this.toggleMenu.bind(this), null);

		this.subscribeToEvents();
	}

	canOpenMenu() {
		if (localPlayer.getVariable('inHand')) {
			mp.game.ui.notifications.show('error', 'Уберите предмет из рук');
			return false;
		}

		return (
			!mp.gui.cursor.visible &&
			mp.browsers.hud &&
			!localPlayer.isFalling() &&
			!localPlayer.isSwimmingUnderWater() &&
			!localPlayer.isCuffed() &&
			!localPlayer.getVariable('isPlayingAnim') &&
			!localPlayer.getVariable('imprisoned')
		);
	}

	private async toggleMenu() {
		if (this.menu) {
			const canClose = await mp.events.callBrowser('Phone-CanClose');
			if (!canClose) return;

			scenarios.stopLocal();

			this.menu = false;
			mp.browsers.hidePage();
		} else if (this.canOpenMenu()) {
			this.openMenu();
		}
	}

	private openMenu() {
		scenarios.playLocal('use_phone');

		mp.events.callBrowser('Phone-SetWallpaper', mp.storage.data.phone.wallpaper);
		mp.browsers.showPage('phone');
		mp.game.ui.displayRadar(true);
		mp.gui.chat.show(true);

		this.menu = true;
	}

	private async startCall(player: PlayerMp) {
		if (this.interlocutor) return;

		this.interlocutor = player;

		mp.events.callRemote('Voice-AddListener', player);

		player.voiceVolume = 1.0;
		player.voice3d = false;

		voice.removeListener(player, false);

		await mp.events.callBrowser('Phone-AcceptCall');
	}

	private async stopCall() {
		await mp.events.callBrowser('Phone-DeclineCall');

		if (!this.interlocutor) return;

		if (mp.players.exists(this.interlocutor)) {
			const localPos = localPlayer.position;
			const playerPos = this.interlocutor.position;
			const dist = mp.game.system.vdist(
				playerPos.x,
				playerPos.y,
				playerPos.z,
				localPos.x,
				localPos.y,
				localPos.z
			);

			if (dist > voice.range) {
				mp.events.callRemote('Voice-RemoveListener', this.interlocutor);
			} else voice.addListener(this.interlocutor, false);
		} else mp.events.callRemote('Voice-RemoveListener', this.interlocutor);

		this.interlocutor = null;
	}

	private setWallpaper(name: string) {
		mp.storage.update({ phone: { ...mp.storage.data.phone, wallpaper: name } });
		mp.events.callBrowser('Phone-SetWallpaper', name, false);
	}

	private subscribeToEvents() {
		mp.events.subscribe({
			'Phone-StartCall': this.startCall.bind(this),
			'Phone-StopCall': this.stopCall.bind(this),
			'Phone-SetWallpaper': this.setWallpaper,
			'Phone-CanOpen': this.canOpenMenu
		});
	}
}

export default new Phone();
