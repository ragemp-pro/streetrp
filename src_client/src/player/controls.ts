import greenZone from 'basic/green-zone';

const localPlayer = mp.players.local;
const controls = {
	default: [
		12,
		13,
		14,
		15,
		16,
		17,
		37,
		99,
		100,
		140,
		157,
		158,
		159,
		160,
		161,
		162,
		163,
		164,
		165,
		261,
		262,
		263
	],
	attack: [24, 25, 68, 69, 91, 92, 114, 141, 142, 257, 264],
	movement: [21, 22, 23, 75]
};

class PlayerControls {
	private cuffs = false;

	constructor() {
		mp.events.subscribeToDefault({
			render: this.onRender.bind(this)
		});

		mp.events.subscribeToData({
			cuffs: this.onChangeCuffs.bind(this)
		});
	}

	private onChangeCuffs(player: PlayerMp, cuffs: string) {
		if (player.handle !== localPlayer.handle) return;

		const isExists = !!cuffs;

		player.setEnableHandcuffs(isExists);
		this.cuffs = isExists;
	}

	private onRender() {
		controls.default.forEach((item) => this.toggleControl(item, false));

		if (this.cuffs || (greenZone.playerWithin && !localPlayer.getVariable('govMember'))) {
			controls.attack.forEach((item) => this.toggleControl(item, false));
		}
		if (this.cuffs) {
			controls.movement.forEach((item) => this.toggleControl(item, false));
		}
	}

	private toggleControl(id: number, status: boolean) {
		if (status) mp.game.controls.enableControlAction(2, id, true);
		else mp.game.controls.disableControlAction(2, id, true);
	}
}

const playerControls = new PlayerControls();
