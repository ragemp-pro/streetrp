const player = mp.players.local;

class AdminSpectator {
	constructor() {
		mp.events.subscribe({ 'Admin-Spectate': this.toggle.bind(this) });
	}

	private toggle(target?: PlayerMp) {
		player.freezePosition(!!target);

		if (mp.players.exists(target) && target.handle !== player.handle) {
			player.attachTo(
				target.handle,
				-1,
				-1.5,
				-1.5,
				2,
				0,
				0,
				0,
				true,
				false,
				false,
				false,
				0,
				false
			);
		} else {
			player.detach(true, true);
		}
	}
}

const spectator = new AdminSpectator();

export {};
