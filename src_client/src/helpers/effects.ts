class Effects {
	private resetTimeout?: NodeJS.Timeout;

	constructor() {
		mp.events.subscribe({
			'Effects-StartDrunkEffect': this.startDrunkEffect.bind(this)
		});
	}

	startDrunkEffect(duration: number) {
		this.stopAll();

		mp.game.graphics.startScreenEffect('Rampage', 0, true);
		mp.game.graphics.startScreenEffect('pennedIn', 0, true);
		mp.game.cam.shakeGameplayCam('DRUNK_SHAKE', 1);

		if (duration > 30000) {
			mp.game.graphics.startScreenEffect('BeastLaunch', 0, true);
			mp.game.graphics.setNoisinessoveride(0.25);
			mp.game.graphics.setNoiseoveride(true);
			mp.game.cam.shakeGameplayCam('DRUNK_SHAKE', 4);
		}

		this.resetTimeout = setTimeout(this.stopAll.bind(this), duration + 1000);
	}

	stopAll() {
		if (this.resetTimeout) {
			clearTimeout(this.resetTimeout);
			this.resetTimeout = null;
		}

		mp.game.graphics.stopScreenEffect('Rampage');
		mp.game.graphics.stopScreenEffect('pennedIn');
		mp.game.graphics.stopScreenEffect('BeastLaunch');
		mp.game.graphics.setNoiseoveride(false);
		mp.game.cam.stopGameplayCamShaking(true);
	}
}

export default new Effects();
