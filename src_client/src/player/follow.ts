import { isNumber } from 'lodash';

const localPlayer = mp.players.local;

class Follow {
	private target?: PlayerMp;

	private followInterval?: NodeJS.Timeout;

	constructor() {
		mp.events.subscribeToData({
			follow: (player: PlayerMp, target: number, oldTarget: number) => {
				if (player.handle !== localPlayer.handle) return;

				if (!isNumber(target) && isNumber(oldTarget)) this.reset();
				else this.setTarget(target);
			}
		});
	}

	reset(local = true) {
		this.target = null;
		clearInterval(this.followInterval);
		localPlayer.clearTasks();

		if (!local) mp.events.callServer('FollowActions-Reset');
	}

	private setTarget(playerId: number) {
		const player = mp.players.atRemoteId(playerId);
		if (!player) return;

		this.target = player;
		this.followInterval = setInterval(() => {
			if (!mp.players.exists(this.target) || !this.isNormalDistance()) {
				return this.reset(false);
			}

			localPlayer.taskFollowToOffsetOf(this.target.handle, 0, 0, 0, 1, -1, 1, true);
		}, 2000);
	}

	private isNormalDistance() {
		const { position } = localPlayer;
		const { position: targetPosition } = this.target;

		return (
			mp.game.system.vdist(
				position.x,
				position.y,
				position.z,
				targetPosition.x,
				targetPosition.y,
				targetPosition.z
			) < 20
		);
	}
}

export default new Follow();
