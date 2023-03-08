const localPlayer = mp.players.local;

class AFK {
	private readonly maxMins = 15;

	private time = 0;

	startCheck() {
		setInterval(() => this.check(), 60000);
	}

	private check() {
		this.time += 1;

		if (this.isActive()) this.time = 0;

		if (this.time >= this.maxMins) {
			mp.events.callServer('Player-KickAfk', null, false);
		}
	}

	private isActive() {
		return (mp.game.controls.isControlPressed(0, 32) ||
			mp.game.controls.isControlPressed(0, 33) ||
			mp.game.controls.isControlPressed(0, 321) ||
			mp.game.controls.isControlPressed(0, 34) ||
			mp.game.controls.isControlPressed(0, 35) ||
			mp.game.controls.isControlPressed(0, 24) ||
			localPlayer.getVariable('isDying') ||
			localPlayer.dimension !== 0 ||
			(localPlayer.isInAnyVehicle(false) &&
				localPlayer.vehicle &&
				localPlayer.vehicle.getSpeed() > 0)) as boolean;
	}
}

export default new AFK();
