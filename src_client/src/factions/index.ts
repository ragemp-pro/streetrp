import './wardrobe';
import './garage';
import './workshop';
import './tablet';
import './actions';
import './gang/capture';

mp.events.subscribe({
	'Factions-ShowDocs': (name: string, faction: string, rank: string) => {
		mp.browsers.showPage('factions/docs', { name, faction, rank });
		mp.browsers.setHideBind(() => mp.browsers.hidePage());
		mp.game.ui.displayRadar(true);
		mp.gui.chat.show(true);
	}
});
