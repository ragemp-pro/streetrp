type Capture = {
	time: number;
	attacker: {
		name: string;
		members: number;
	};
	defender: {
		name: string;
		members: number;
	};
};

const localPlayer = mp.players.local;

class GangCapture {
	private capture?: Capture;

	private captureTimer?: NodeJS.Timeout;

	constructor() {
		mp.events.subscribe({
			'GangCapture-Start': this.start.bind(this),
			'GangCapture-Stop': this.stop.bind(this),
			'GangCapture-UpdateMembers': this.setMembers.bind(this)
		});
	}

	start(time: number, attacker: string, defender: string) {
		if (this.captureTimer) return;

		this.capture = {
			time,
			attacker: {
				name: attacker,
				members: 0
			},
			defender: {
				name: defender,
				members: 0
			}
		};
		this.captureTimer = setInterval(this.decreaseTime.bind(this), 1000);
	}

	stop() {
		if (!this.capture) return;

		clearInterval(this.captureTimer);
		this.captureTimer = null;
		this.capture = null;

		this.updateInfo();
	}

	setMembers(attackers: number, defenders: number) {
		if (!this.capture) return;

		const { attacker, defender } = this.capture;
		attacker.members = attackers;
		defender.members = defenders;
	}

	private decreaseTime() {
		this.capture.time -= 1;
		if (this.capture.time <= 0 || localPlayer.dimension <= 0) return this.stop();

		this.updateInfo();
	}

	private updateInfo() {
		mp.events.callBrowser('HUD-SetCapture', this.capture, false);
	}
}

const gangCapture = new GangCapture();

export {};
