import fpsCalc from 'basic/fps';

const player = mp.players.local;

type FishingBar = {
	position: number;
	min: number;
	max: number;
	direction: boolean;
	interval?: NodeJS.Timeout;
};
type Points = {
	current: number;
	needed: number;
};

class Fishing {
	private active = false;

	private markPosition = 0;

	private points: Points;

	private bar: FishingBar;

	constructor() {
		this.bar = {
			position: 0,
			min: 0,
			max: 0,
			direction: true
		};
		this.points = {
			current: 0,
			needed: 0
		};

		mp.events.subscribe({
			'Fishing-ShowMinigame': this.start.bind(this),
			'Fishing-HideMinigame': this.stop.bind(this)
		});
		mp.events.subscribeToDefault({
			render: () => {
				if (!this.active) return;

				this.checkBarPosition();
				this.draw();
			}
		});
	}

	hasSuccess() {
		const { current, needed } = this.points;
		return current >= needed;
	}

	isMouseClicked() {
		return (
			mp.game.controls.isControlPressed(0, 24) &&
			mp.game.controls.isControlJustPressed(0, 24)
		);
	}

	start() {
		if (this.active) return;

		this.resetBar();
		this.points = {
			current: 0,
			needed: 5
		};
		this.active = true;
		player.freezePosition(true);
		fpsCalc.run();

		mp.game.ui.notifications.show('info', 'Кажется, что-то клюнуло!');
	}

	stop() {
		if (!this.active) return;

		this.active = false;
		player.freezePosition(false);
		fpsCalc.stop();
	}

	private getFish() {
		this.stop();
		mp.events.callServer('Fishing-Success', null, false);
	}

	private async dropFish() {
		this.stop();
		await mp.events.callServer('Fishing-Drop');

		mp.game.ui.notifications.show('info', 'Черт, рыба сорвалась...');
	}

	private resetBar() {
		this.bar = {
			min: 0.277,
			max: 0.675,
			position: 0.476,
			direction: true
		};
		this.markPosition = Math.random() * 0.39 + this.bar.min;
	}

	private checkBarPosition() {
		if (!this.isMouseClicked()) return;

		const { position } = this.bar;

		if (position > this.markPosition - 0.02 && position < this.markPosition + 0.02) {
			this.points.current += 1;

			if (this.hasSuccess()) return this.getFish();
			return this.resetBar();
		}

		this.dropFish();
	}

	private draw() {
		const { direction, position, min, max } = this.bar;

		mp.game.graphics.drawRect(0.47, 0.2, 0.39, 0.025, 60, 60, 60, 130);
		mp.game.graphics.drawRect(this.markPosition, 0.2, 0.03, 0.025, 0, 255, 0, 255);
		mp.game.graphics.drawRect(position, 0.19, 0.002, 0.026, 255, 255, 255, 255);

		const offset = fpsCalc.amount >= 80 ? 0.0015 : 0.003;
		this.bar.position += direction ? offset : -offset;

		if (direction && this.bar.position > max) {
			this.bar.position = max;
			this.bar.direction = false;
		} else if (this.bar.position < min) {
			this.bar.position = min;
			this.bar.direction = true;
		}
	}
}
export default new Fishing();
