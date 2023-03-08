import { isEqual } from 'lodash';
import friends from './friends';
import './controls';
import './nametags';
import './sync';
import './character';
import './spawn';
import './target';
import './death';
import './follow';

const localPlayer = mp.players.local;
let headsack = false;

mp.events.subscribeToDefault({
	render: () => {
		mp.game.player.setHealthRechargeMultiplier(0.0);
		mp.game.player.restoreStamina(100);
		mp.game.controls.disableControlAction(2, 243, true);

		if (headsack) {
			mp.game.graphics.drawRect(0.0, 0.0, 1.0, 1.0, 0, 0, 0, 253);
			mp.game.graphics.drawRect(0.0, 1.0, 1.0, 1.0, 0, 0, 0, 253);
			mp.game.graphics.drawRect(1.0, 0.0, 1.0, 1.0, 0, 0, 0, 253);
			mp.game.graphics.drawRect(1.0, 1.0, 1.0, 1.0, 0, 0, 0, 253);
		}
	}
});

mp.events.subscribeToData({
	headsack: (player: PlayerMp, status: boolean) => {
		if (player.handle === localPlayer.handle) headsack = status;
	}
});

mp.events.subscribe({
	playerRotation: (increase: boolean) => {
		const { vehicle } = localPlayer;
		const rotation = localPlayer.getRotation(2);

		if (increase) rotation.z += 3.5;
		else rotation.z -= 3.5;

		if (vehicle) vehicle.setRotation(0.0, 0.0, rotation.z, 2, true);
		else localPlayer.setRotation(0.0, 0.0, rotation.z, 2, true);
	},
	playerStopRotation: () => {
		if (localPlayer.vehicle) return;

		localPlayer.taskPlayAnim(
			'amb@world_human_guard_patrol@male@base',
			'base',
			8.0,
			1,
			-1,
			1,
			0.0,
			false,
			false,
			false
		);
		localPlayer.stopAnim('amb@world_human_guard_patrol@male@base', 'base', 0.0);
	},
	'Player-ShowDocsMenu': (type: string, data: any) => {
		mp.browsers.showPage(`player/${type}`, data);
		mp.browsers.setHideBind(() => mp.browsers.hidePage());
		mp.game.ui.displayRadar(true);
		mp.gui.chat.show(true);
	}
});

class Player {
	getName(player: PlayerMp, separator = false) {
		const { name } = player;

		if (player.handle === localPlayer.handle) {
			return separator ? name : name.replace('_', ' ');
		}

		const faction = localPlayer.getVariable('faction');
		const id = player.remoteId;

		const isFriend = friends.isFriend(player);
		const isColleague = faction && isEqual(faction, player.getVariable('faction'));
		const isFamiliar = isColleague || (isFriend && !player.getVariable('inMask'));

		return isFamiliar ? `${player.name.replace('_', ' ')} (${id})` : `Гражданин (${id})`;
	}
}

export default new Player();
