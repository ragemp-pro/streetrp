class JobCooldown {
	private timeLimit: number;

	private recentWorkers: Map<string, number>;

	constructor(ms: number) {
		this.setTimeLimit(ms);
	}

	isEnded(player: Player) {
		const time = this.recentWorkers.get(player.dbId);
		return !time || Date.now() >= time;
	}

	setTimeLimit(ms: number) {
		this.timeLimit = ms;
		this.reset();
	}

	apply(player: Player) {
		this.recentWorkers.set(player.dbId, Date.now() + this.timeLimit);
	}

	reset(player?: Player) {
		if (player) this.recentWorkers.delete(player.dbId);
		else this.recentWorkers = new Map();
	}
}

export default JobCooldown;
