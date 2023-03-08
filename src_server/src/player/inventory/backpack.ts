import clothes from 'player/clothes';
import equipment from 'player/equipment';
import inventoryHelper from 'basic/inventory/helper';
import playerStorage from './storage';

class Backpack {
	isEmpty(items: InventoryItem[]) {
		return items.findIndex((item) => item.cell > 5) <= -1;
	}

	getPlayerBackpack(player: Player) {
		const item: InventoryItem = equipment.getEquipment(player, 'backpack');
		return this.getData(item?.name);
	}

	use(player: Player, item: InventoryItem) {
		const backpackData = this.getData(item.name);

		const cells = playerStorage.getMaxCells(player);
		const weight = playerStorage.getMaxWeight(player);

		playerStorage.setCapacity(
			player,
			cells + backpackData.cells,
			weight + backpackData.slots
		);
		clothes.set(player, 'bag', { style: 31, color: 2 });
	}

	remove(player: Player, item: InventoryItem) {
		if (!this.isEmpty(player.inventory)) {
			return mp.events.reject('Уберите предметы из рюкзака');
		}

		const backpackData = this.getData(item.name);

		playerStorage.setCapacity(
			player,
			playerStorage.getMaxCells(player) - backpackData.cells,
			playerStorage.getMaxWeight(player) - backpackData.slots
		);
		clothes.hide(player, 'bag');
	}

	private getData(name: string) {
		const backpack = inventoryHelper.getItemData(name);

		return { cells: +(backpack?.cells ?? 0), slots: +(backpack?.slots ?? 0) };
	}
}

export default new Backpack();
