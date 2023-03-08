class FPSCalculator {
	private fps = 0;

	private frameInterval?: NodeJS.Timeout;

	get amount() {
		return this.fps;
	}

	run() {
		if (this.frameInterval) return;

		let lastFrameCount = FPSCalculator.getFrameCount();

		this.frameInterval = setInterval(() => {
			this.fps = FPSCalculator.getFrameCount() - lastFrameCount;
			lastFrameCount = FPSCalculator.getFrameCount();
		}, 1000);
	}

	stop() {
		if (!this.frameInterval) return;

		this.fps = 0;
		clearInterval(this.frameInterval);
		this.frameInterval = null;
	}

	private static getFrameCount() {
		return mp.game.invoke('0xFC8202EFC642E6F2') as number;
	}
}

export default new FPSCalculator();
