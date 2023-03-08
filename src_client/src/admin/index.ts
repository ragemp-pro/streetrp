import keycode from 'keycode';
import './fly';
import './esp';
import './spectator';
import './cam';

const player = mp.players.local;

class Admin {
	constructor() {
		mp.keys.bind(+keycode('F4'), false, this.showMenu);

		mp.events.subscribe({
			'Admin-SetGM': this.setInvincible
		});
	}

	private showMenu() {
		const level = player.getVariable('adminLvl');

		if (!level) return;

		mp.browsers.showPage('admin', { level });
		mp.browsers.setHideBind(mp.browsers.hidePage);
	}

	private setInvincible(status: boolean) {
		const adminLvl = player.getVariable('adminLvl');

		if (!adminLvl) return;

		player.setInvincible(status);
		mp.game.graphics.notify(status ? 'GM: ~g~Enabled' : 'GM: ~r~Disabled');
	}
}

const admin = new Admin();
