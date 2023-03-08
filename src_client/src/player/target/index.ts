import { getLookingAtEntity } from 'utils/player';
import binder from 'utils/binder';
import hud from 'basic/hud';
import playerTarget from './player';
import vehicleTarget from './vehicle';

const localPlayer = mp.players.local;

export type Action = {
	group: string;
	id: string;
};

class TargetMenu {
	public target?: EntityMp;

	private show = false;

	private distTimer?: NodeJS.Timeout;

	constructor() {
		binder.bind('target', 'K', this.toggleMenu.bind(this), null);

		mp.events.subscribeToDefault({
			render: this.onRender.bind(this)
		});
		mp.events.subscribe({
			'Target-CloseMenu': this.toggleMenu.bind(this),
			'Target-SelectItem': this.onSelectAction.bind(this)
		});
	}

	private onRender() {
		if (this.show) return;

		this.target = localPlayer.isInAnyVehicle(false) ? null : getLookingAtEntity(4, false);
		if (this.target) this.highlightTarget();
	}

	async toggleMenu() {
		if ((!this.show && mp.gui.cursor.visible) || !mp.browsers.hud) {
			this.show = false;
			return this.toggleDistTimer();
		}

		if (this.show) await mp.events.callBrowser('Target-Reset');
		else {
			await mp.events.callServer('playerSelectTarget', this.target);
			await mp.events.callBrowser(
				'Target-ShowMenu',
				localPlayer.isInAnyVehicle(false) ? 'vehicle' : this.target?.type ?? 'self'
			);
		}

		this.show = !this.show;

		hud.setCursorVisible(this.show);
		this.toggleDistTimer();
	}

	private onSelectAction(type: string, action: Action) {
		if (localPlayer.isCuffed()) return;

		switch (type) {
			case 'self':
				this.callSelfAction(action);
				break;
			case 'player':
				playerTarget.callAction(this.target as PlayerMp, action);
				break;
			case 'vehicle':
				vehicleTarget.callAction(this.target as VehicleMp, action);
				break;

			default:
				break;
		}
	}

	private callSelfAction(action: Action) {
		switch (action.group) {
			case 'docs':
				mp.events.callServer('Player-ShowDocs', action.id, false);
				break;
			case 'mood':
				mp.events.callRemote('setMood', action.id);
				break;
			case 'walking':
				mp.events.callRemote('setWalkingStyle', action.id);
				break;

			default:
				break;
		}
	}

	private highlightTarget() {
		const { position } = this.target;

		if (this.target.getVariable('invisible')) return;

		mp.game.graphics.drawText(
			binder.getBind('target').key ?? '?',
			[position.x, position.y, position.z],
			{
				font: 4,
				color: [255, 255, 255, 200],
				scale: [0.4, 0.4],
				outline: true,
				centre: true
			}
		);
	}

	private toggleDistTimer() {
		if (!this.show || !this.target) {
			if (this.distTimer) {
				clearInterval(this.distTimer);
				this.distTimer = null;
			}

			return;
		}

		this.distTimer = setInterval(() => {
			const { position } = localPlayer;
			const { position: targetPosition } = this.target;

			const dist = mp.game.system.vdist(
				position.x,
				position.y,
				position.z,
				targetPosition.x,
				targetPosition.y,
				targetPosition.z
			);

			if (dist > 3.2) this.toggleMenu();
		}, 2500);
	}
}

export default new TargetMenu();
