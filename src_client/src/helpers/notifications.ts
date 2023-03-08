class Notifications implements NotificationMp {
	constructor() {
		this.setup();
	}

	show(type: 'success' | 'info' | 'warn' | 'error', message: string, inMenu = false) {
		mp.events.callBrowser('Notifications-ShowItem', [type, message, inMenu], false);
	}

	help(message: string) {
		mp.game.ui.setTextComponentFormat('STRING');
		mp.game.ui.addTextComponentSubstringPlayerName(message);
		mp.game.ui.displayHelpTextFromStringLabel(0, true, true, -1);

		setTimeout(() => mp.game.ui.clearHelp(true), 4000);
	}

	private setup() {
		mp.game.ui.notifications = this;

		mp.events.subscribe({
			'Notifications-Show': this.show,
			'Notifications-Help': this.help
		});
	}
}

export default new Notifications();
