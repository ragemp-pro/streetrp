import { drawSprite } from 'utils/sprites';
import binder from 'utils/binder';
import hud from './hud';
import phone from './phone';

const localPlayer = mp.players.local;

class Voice {
	public readonly range: number;

	private autoVolume: boolean;

	private listeners: PlayerMp[];

	constructor() {
		this.listeners = [];
		this.range = 10.0;
		this.autoVolume = false;

		this.subscribeToEvents();
		this.runInterval();

		binder.bind('mic', 'Z', this.toggleMic.bind(this), null, true);
	}

	addListener(player: PlayerMp, notify: boolean) {
		if (this.listeners.indexOf(player) !== -1) return;

		if (notify) mp.events.callRemote('Voice-AddListener', player);

		this.listeners.push(player);

		player.isListening = true;
		player.voiceVolume = 1.0;
		player.voice3d = true;
		player.voiceAutoVolume = false;
	}

	removeListener(player: PlayerMp, notify: boolean) {
		const index = this.listeners.indexOf(player);

		if (index !== -1) {
			if (notify) mp.events.callRemote('Voice-RemoveListener', player);

			this.listeners.splice(index, 1);

			player.isListening = false;
		}
	}

	private toggleMic() {
		if (
			localPlayer.getVariable('muted') ||
			localPlayer.getVariable('isDying') ||
			!localPlayer.getVariable('authorized')
		)
			return;

		mp.voiceChat.muted = !mp.voiceChat.muted;

		hud.setMicStatus(!mp.voiceChat.muted);

		if (mp.voiceChat.muted) {
			localPlayer.playFacialAnim('mood_normal_1', 'facials@gen_male@variations@normal');
		} else localPlayer.playFacialAnim('mic_chatter', 'mp_facial');
	}

	private reloadMic() {
		(mp.voiceChat as any).cleanupAndReload(true, true, true);
	}

	private runInterval() {
		setInterval(() => {
			const localPos = localPlayer.position;

			mp.players.forEachInStreamRange((player) => {
				if (player === localPlayer || player.isListening) return;

				if (!phone.interlocutor || phone.interlocutor !== player) {
					const playerPos = player.position;
					const dist = mp.game.system.vdist(
						playerPos.x,
						playerPos.y,
						playerPos.z,
						localPos.x,
						localPos.y,
						localPos.z
					);

					if (dist <= this.range) this.addListener(player, true);
				}
			});

			this.listeners.forEach((player) => {
				if (player.handle !== 0) {
					const playerPos = player.position;
					const dist = mp.game.system.vdist(
						playerPos.x,
						playerPos.y,
						playerPos.z,
						localPos.x,
						localPos.y,
						localPos.z
					);

					if (dist > this.range) this.removeListener(player, true);
					else if (!this.autoVolume) player.voiceVolume = 1 - dist / this.range;
				} else {
					this.removeListener(player, true);
				}
			});
		}, 500);
	}

	private renderSprite() {
		mp.players.forEachInStreamRange((player) => {
			if (player !== localPlayer && player.isVoiceActive) {
				const playerPosition = player.position;
				const localPlayerPosition = localPlayer.position;

				const distance = mp.game.system.vdist(
					localPlayerPosition.x,
					localPlayerPosition.y,
					localPlayerPosition.z,
					playerPosition.x,
					playerPosition.y,
					playerPosition.z
				);

				if (
					distance <= 25 &&
					!player.isOccluded() &&
					!player.isDead() &&
					!player.getVariable('invisible')
				) {
					const headPosition = player.getBoneCoords(12844, 0, 0, 0);
					const headPosition2d = mp.game.graphics.world3dToScreen2d(
						headPosition.x,
						headPosition.y,
						headPosition.z + 0.4
					);

					if (!headPosition2d) return;

					const scale = Math.max(0.1, 1 - distance / 25);
					const scaleSprite = 0.7 * scale;

					const isMuted = false;
					const sprite = isMuted ? 'leaderboard_audio_mute' : 'leaderboard_audio_3';

					const spriteColor = [255, 255, 255, 255];
					const isPhoneTalk = player.getVariable('phoneTalk');

					drawSprite(
						isPhoneTalk ? 'mpinventory' : 'mpleaderboard',
						isPhoneTalk ? 'mp_specitem_remote' : sprite,
						[scaleSprite, scaleSprite],
						0,
						spriteColor,
						headPosition2d.x,
						headPosition2d.y + 0.038 * scale
					);
				}
			}
		});
	}

	private subscribeToEvents() {
		mp.events.subscribeToDefault({
			render: this.renderSprite.bind(this),
			playerStartTalking: (player: PlayerMp) => {
				if (phone.interlocutor !== player) player.voice3d = true;

				player.playFacialAnim('mic_chatter', 'mp_facial');
			},
			playerStopTalking: (player: PlayerMp) => {
				player.playFacialAnim('mood_normal_1', 'facials@gen_male@variations@normal');
			},
			playerQuit: (player: PlayerMp) => {
				if (player.isListening) this.removeListener(player, false);
			}
		});

		mp.events.subscribe({
			'Voice-Reload': this.reloadMic
		});
	}
}

export default new Voice();
