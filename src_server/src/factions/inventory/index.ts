import points from 'helpers/points';
import hud from 'helpers/hud';
import factions from 'factions';
import Faction from '../faction';
import Inventory from './inventory';

type Action = 'move' | 'separate' | 'transfer';

class FactionInventories {
	constructor() {
		mp.events.subscribe({
			'Inventory-FactionMove': this.callAction.bind(this, 'move'),
			'Inventory-FactionSeparate': this.callAction.bind(this, 'separate'),
			'Inventory-FactionTransfer': this.callAction.bind(this, 'transfer')
		});
	}

	create(position: PositionEx, capacity: InventoryCapacity, faction: Faction) {
		const inventory = new Inventory(capacity);

		const point = points.create(
			position,
			1,
			{ onKeyPress: this.showMenu.bind(this) },
			{ data: faction.name, color: [24, 132, 219, 100] }
		);
		faction.points.add(point);

		return inventory;
	}

	private hasAccess(player: Player, faction: Faction) {
		return faction?.inventory && faction.hasAccess(player, 'inventory');
	}

	private showMenu(player: Player, factionName: string) {
		const faction = factions.getFaction(factionName);

		if (this.hasAccess(player, faction)) faction.inventory.showMenu(player);
		else hud.showNotification(player, 'error', 'Нет доступа');
	}

	private callAction(action: Action, player: Player, ...data) {
		const faction = factions.getFaction(mp.colshapes.getData(player.mp));
		const inventory = faction?.inventory;

		if (!this.hasAccess(player, faction)) {
			throw new SilentError("doesn't have access for this inventory");
		}

		switch (action) {
			case 'move':
				return inventory.moveItem(player, ...(data as [number, number]));
			case 'separate':
				return inventory.separateItem(player, ...(data as [number, number]));
			case 'transfer':
				return inventory.transferItem(player, ...(data as [boolean, number, number]));

			default:
				break;
		}
	}
}

export { Inventory };

export default new FactionInventories();
