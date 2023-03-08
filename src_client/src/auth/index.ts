import hud from 'basic/hud';
import gangZones from 'factions/gang/zones';

const player = mp.players.local;

class Auth {
	constructor() {
		mp.events.subscribe({
			'Auth-ShowMenu': this.showMenu,
			'Auth-SuccessLogin': this.onLogin,
			'Auth-SuccessRegister': this.onRegister.bind(this)
		});
	}

	private showMenu() {
		mp.browsers.showPage('auth', { email: mp.storage.data.login });
		gangZones.load();
	}

	private onLogin(email: string) {
		mp.storage.update({ login: email });

		setInterval(() => mp.discord.update('Играет', 'на streetrp.ru'), 10000);
		mp.gui.chat.push(`Добро пожаловать на STREET RolePlay, ${player.name}`);
		mp.gui.chat.push(`!{FF0082}Все для RAGE:MP и GTA 5 сможете найти на нашем сайте - RAGEMP.PRO`);

		hud.updateOnline();
		hud.setPlayerId();

		if (player.getVariable('isNewbie')) {
			return mp.events.callServer('Character-ShowCreator');
		}

		mp.browsers.showPage('daily');
		player.freezePosition(false);
	}

	private onRegister(email: string) {
		mp.storage.update({ login: email });
	}
}

const auth = new Auth();
