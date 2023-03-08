import antiCheat from 'basic/anti-cheat';

const localPlayer = mp.players.local;

class Spawn {
	constructor() {
		mp.events.subscribe({
			'Spawn-ShowMenu': this.showMenu.bind(this)
		});
		mp.events.subscribeToDefault({
			playerSelectSpawn: this.onSelect
		});
	}

	private onSelect() {
		if (localPlayer.getVariable('adminLvl')) return;

		antiCheat.init();
	}

	private showMenu(jail: boolean, houses: number[], faction?: string) {
		mp.browsers.showPage('spawn', {
			house: houses.length > 0,
			exit: true,
			start: true,
			org: !!faction,
			jail,
			houses
		});
	}
}

const spawn = new Spawn();

export {};
