import keycode from 'keycode';

const player = mp.players.local;

class Browser {
	browser: BrowserMp;

	private page: string;

	private hideKey?: number;

	private freeze = false;

	constructor() {
		this.page = '';

		this.init();
	}

	get hudVisible() {
		return this.page === 'hud';
	}

	showPage(
		page: string,
		data: { [name: string]: any } = {},
		cursor = true,
		freeze = false
	) {
		mp.gui.cursor.show(cursor, cursor);
		mp.gui.chat.show(false);
		mp.game.ui.displayRadar(false);

		mp.events.callBrowser('Browser-ShowPage', [page, data ?? {}], false);

		this.page = page;
		this.freeze = freeze;
		this.resetHideKey();

		if (freeze) player.freezePosition(freeze);
	}

	hidePage(page = 'hud') {
		mp.gui.cursor.show(false, false);
		mp.gui.chat.show(true);
		mp.game.ui.displayRadar(true);

		mp.events.callBrowser('Browser-ShowPage', page, false);

		this.resetHideKey();
		this.page = page;

		if (this.freeze) {
			player.freezePosition(false);
			this.freeze = false;
		}
	}

	setHideBind(handler: Function, key = 'esc') {
		const hideKey = +keycode(key);

		mp.keys.bind(hideKey, false, () => mp.gui.cursor.visible && handler());
		this.hideKey = hideKey;
	}

	private resetHideKey() {
		if (this.hideKey) {
			mp.keys.unbind(this.hideKey, false);
			this.hideKey = null;
		}
	}

	private init() {
		this.browser = mp.browsers.new('package://cef/index.html');
		mp.gui.chat.show(false);

		this.browser.markAsChat();
		mp.gui.chat.colors = false;

		mp.events.subscribe({ 'Browser-HidePage': this.hidePage.bind(this) });

		mp.browsers.showPage = this.showPage.bind(this);
		mp.browsers.hidePage = this.hidePage.bind(this);
		mp.browsers.setHideBind = this.setHideBind.bind(this);

		Object.defineProperty(mp.browsers, 'hud', {
			get: () => this.hudVisible
		});
	}
}

export default new Browser();
