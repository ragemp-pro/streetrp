import { last } from 'lodash';
import FactionModel from 'models/Faction';
import Inventory from 'basic/inventory';
import playerStorage from 'player/inventory/storage';
import factionJournal from 'factions/journal';

class FactionInventory extends Inventory {
	private items: InventoryItem[];

	private capacity: InventoryCapacity;

	constructor(capacity: InventoryCapacity) {
		super('faction');

		this.items = [];
		this.capacity = capacity;
	}

	init(items: InventoryItem[]) {
		if (this.items.length) return;

		this.items = items;
	}

	getMaxCells() {
		return this.capacity.cells;
	}

	getMaxWeight() {
		return this.capacity.slots;
	}

	showMenu = (player: Player) => {
		playerStorage.showMenu(player, {
			type: this.name,
			cells: this.getMaxCells(),
			slots: this.getMaxWeight(),
			items: this.items
		});
	};

	async moveItem(player: Player, cell: number, targetCell: number) {
		await this.move(this.items, cell, targetCell);
		await this.updateInDb(player.faction, this.items);

		return this.items;
	}

	async separateItem(player: Player, cell: number, amount: number) {
		await this.separate(player, this.items, cell, amount);
		await this.updateInDb(player.faction, this.items);

		return last(this.items);
	}

	async transferItem(player: Player, inside: boolean, cell: number, targetCell: number) {
		await this.transfer(player, player.inventory, this.items, inside, cell, targetCell);
		await this.updateInDb(player.faction, this.items);
		await playerStorage.updateInDb(player.dbId, player.inventory);

		const item = this.getItemOfCell(inside ? this.items : player.inventory, targetCell);

		factionJournal.recordAction(player, inside ? 'put' : 'took', item.name, item.amount);

		return {
			item,
			weight: [this.getCurrentWeight(this.items), this.getCurrentWeight(player.inventory)]
		};
	}

	async updateInDb(id: string, data: InventoryItem[]) {
		await FactionModel.findOneAndUpdate({ name: id }, { $set: { inventory: data } });
	}
}

export default FactionInventory;
