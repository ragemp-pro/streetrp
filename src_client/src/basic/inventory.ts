import binder from 'utils/binder';

const player = mp.players.local;

class Inventory {
	constructor() {
		mp.events.subscribe({
			'Inventory-ShowMenu': this.showMenu,
			'Inventory-SetCapacity': this.setCapacity
		});

		this.setBinds();
	}

	private showMenu(
		items: any[],
		weight: number,
		maxWeight: number,
		cells: number,
		data: any
	) {
		mp.browsers.hidePage();

		const prop = data?.items ? 'storage' : 'equipment';

		mp.browsers.showPage('inventory', {
			items,
			cells,
			[prop]: data,
			weight: { current: weight, max: maxWeight }
		});

		mp.browsers.setHideBind(() => mp.browsers.hidePage());
	}

	private useQuickItem(id: number) {
		if (!mp.browsers.hud || player.isCuffed()) return;

		const slot = `quick_${id}`;
		const isExists = !!player.getVariable(slot);

		if (isExists) mp.events.callServer('Inventory-UseQuick', slot, false);
	}

	private removeFromHand() {
		if (!mp.browsers.hud || !player.getVariable('inHand')) return;

		mp.events.callServer('Inventory-UnequipItem', 'hands', false);
	}

	private setCapacity(cells: number, weight: number) {
		if (!mp.browsers.hud) {
			mp.events.callBrowser('Inventory-SetCapacity', [cells, weight], false);
		}
	}

	private setBinds() {
		binder.bind('inventory', 'I', () => {
			if (!mp.browsers.hud || player.isCuffed()) return;

			mp.events.callServer('Inventory-ShowPlayerMenu', null, false);
		});
		binder.bind('inventory_hand', '0', this.removeFromHand);

		for (let index = 1; index <= 3; index++) {
			const name = `quick_${index}`;
			binder.bind(name, index.toString(), () => this.useQuickItem(index));
		}
	}
}

const inventory = new Inventory();
