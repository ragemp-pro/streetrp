import effects from 'helpers/effects';
import antiCheat from 'basic/anti-cheat';

const localPlayer = mp.players.local;

class PlayerDeath {
	private timeout?: NodeJS.Timeout;

	constructor() {
		mp.events.subscribe({
			'Player-ShowDeathMenu': this.showMenu.bind(this),
			'Player-ClientDie': this.die.bind(this)
		});

		mp.events.subscribeToData({
			isDying: (player: PlayerMp, status: boolean) => {
				if (status || localPlayer.handle !== player.handle) return;

				this.die(false);
			}
		});
	}

	private showMenu(duration: number, medics: number) {
		this.reset();
		this.timeout = setTimeout(this.die.bind(this), duration);

		mp.browsers.showPage('player/death', { duration, medics }, true, true);
	}

	private async die(remote = true) {
		this.reset();
		effects.stopAll();

		if (remote) {
			antiCheat.sleep(6000);
			await mp.events.callServer('Player-Die');
		}

		mp.browsers.hidePage();
	}

	private reset() {
		if (this.timeout) {
			clearTimeout(this.timeout);
			this.timeout = null;
		}
	}
}

const death = new PlayerDeath();
