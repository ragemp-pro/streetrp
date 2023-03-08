import { isNumber } from 'lodash';
import inventoryHelper from 'basic/inventory/helper';
import playerInventory from 'player/inventory';
import Warehouse from '../warehouse/warehouse';

export type Products = { [name: string]: number };

class FactionWorkshop {
	private prices: Products;

	private warehouse: Warehouse;

	constructor(products: Products, warehouse: Warehouse) {
		this.prices = products;
		this.warehouse = warehouse;
	}

	showMenu(player: Player) {
		player.callEvent('FactionWorkshop-ShowMenu', [this.warehouse.current, this.prices]);
	}

	async craftItem(player: Player, name: string, amount: number) {
		const price = this.getPrice(name, amount);
		const item = this.getItem(name, amount);

		playerInventory.checkEnoughSlots(player, [item]);

		await this.warehouse.changeMaterials(-price);
		await playerInventory.addItem(player, item);
	}

	private getItem(name: string, amount: number) {
		const faction = this.warehouse.faction.name;
		const type = inventoryHelper.getItemData(name)?.type;

		return type === 'armor'
			? this.getArmorItem(name)
			: { name, amount, data: { faction } };
	}

	private getArmorItem(name: string) {
		const health = inventoryHelper.getItemData(name)?.capacity ?? 100;
		const item = {
			name,
			amount: 1,
			data: { health, color: 0 }
		};

		return item;
	}

	private getPrice(product: string, amount: number) {
		if (!this.prices[product] || !isNumber(amount) || amount <= 0 || amount > 10000) {
			throw new SilentError('wrong product');
		}

		return this.prices[product] * amount;
	}
}

export default FactionWorkshop;
