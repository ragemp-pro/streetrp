import { isNumber } from 'lodash';

class FollowActions {
	constructor() {
		mp.events.subscribe({
			'FollowActions-Reset': this.reset.bind(this),
			'FollowActions-Start': this.startFollow.bind(this),
			'FollowActions-Stop': this.stopFollow.bind(this)
		});
	}

	reset(player: Player) {
		if (this.isFollow(player)) {
			this.setFollow(player, null);
		}
	}

	private startFollow(player: Player) {
		const target = mp.players.get(player.target as any);
		if (!player.entityIsNearby(target?.mp) || this.isFollow(target)) return;

		this.setFollow(target, player);
	}

	private stopFollow(player: Player) {
		const target = mp.players.get(player.target as any);
		if (!player.entityIsNearby(target?.mp) || !this.isFollow(target)) return;

		this.reset(target);
	}

	private isFollow(player: Player) {
		return isNumber(player.mp.getVariable('follow'));
	}

	private setFollow(player: Player, target?: Player) {
		player.mp.setVariable('follow', target?.mp?.id);
	}
}

export default new FollowActions();
