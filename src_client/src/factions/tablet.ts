import binder from 'utils/binder';
import scenarios from 'basic/scenarios';
import playerCtrl from 'player';

const player = mp.players.local;

class Tablet {
	private faction?: string;

	constructor() {
		binder.bind('tablet', 'F3', this.openMenu.bind(this));
	}

	canOpenMenu() {
		if (player.getVariable('inHand')) {
			return mp.game.ui.notifications.show('error', 'Уберите предмет из рук');
		}

		return (
			!mp.gui.cursor.visible &&
			mp.browsers.hud &&
			!player.isFalling() &&
			!player.isSwimmingUnderWater() &&
			!player.isCuffed() &&
			!player.getVariable('isPlayingAnim') &&
			!player.getVariable('imprisoned')
		);
	}

	private async openMenu() {
		if (!this.canOpenMenu()) return;

		const faction = player.getVariable('faction');
		const rank = await mp.events.callServer('Faction-GetPlayerRank');
		if (!faction || !rank) return;

		scenarios.playLocal('use_tablet');

		mp.browsers.showPage('factions/tablet', {
			user: { name: playerCtrl.getName(player), faction, rank },
			reset: this.faction !== faction
		});
		mp.browsers.setHideBind(this.closeMenu);
		mp.game.ui.displayRadar(true);
		mp.gui.chat.show(true);

		this.faction = faction;
	}

	private closeMenu() {
		scenarios.stopLocal();
		mp.browsers.hidePage();
	}
}

const tablet = new Tablet();
