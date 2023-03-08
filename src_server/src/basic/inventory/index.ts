import { isNumber } from 'lodash';
import hud from 'helpers/hud';
import itemHelper from './helper';

export type StorageData = {
	type: 'player' | 'vehicle' | 'house' | 'faction';
	cells: number;
	slots: number;
	items: InventoryItem[];
};

const storages: { [name in StorageData['type']]?: Inventory } = {};

export default abstract class Inventory {
	public readonly name: StorageData['type'];

	constructor(type: StorageData['type']) {
		this.name = type;

		storages[type] = this;
	}

	abstract showMenu(player: Player, storage?: StorageData): void;

	abstract updateInDb(id: string, data: InventoryItem[]): Promise<void>;

	abstract getMaxCells(player: Player): number;

	abstract getMaxWeight(player: Player): number;

	isEnoughSlots(player: Player, storage: InventoryItem[], item: InventoryItem) {
		const freeSlots = this.getMaxWeight(player) - this.getCurrentWeight(storage);

		return freeSlots >= itemHelper.getWeightOfItem(item);
	}

	getCurrentWeight(storage: InventoryItem[]) {
		return +storage
			.reduce((weight, item) => weight + itemHelper.getWeightOfItem(item), 0)
			.toFixed(1);
	}

	getItemOfCell(storage: InventoryItem[], cell: number) {
		return storage.find((item) => item.cell === cell);
	}

	getFreeCell(player: Player, storage: InventoryItem[]) {
		let freeCell: number;

		for (let cell = this.getMaxCells(player) - 1; cell >= 0; cell--) {
			if (!this.getItemOfCell(storage, cell)) {
				freeCell = cell;
				break;
			}
		}

		return freeCell;
	}

	add(player: Player, storage: InventoryItem[], item: Omit<InventoryItem, 'cell'>) {
		if (
			!isNumber(item?.amount) ||
			item.amount <= 0 ||
			!itemHelper.getItemData(item?.name)
		) {
			throw new SilentError('wrong item');
		}

		const cell = this.getFreeCell(player, storage);

		if (!this.isEnoughSlots(player, storage, item as InventoryItem) || !isNumber(cell)) {
			hud.showNotification(player, 'error', 'Недостаточно места в инвентаре', true);
			throw new SilentError('not enough slots');
		}

		storage.push({ ...item, cell });
	}

	protected async move(storage: InventoryItem[], cell: number, targetCell: number) {
		const pickedItem = this.getItemOfCell(storage, cell);
		const targetItem = this.getItemOfCell(storage, targetCell);

		if (!pickedItem || cell === targetCell)
			throw new SilentError('missing selected item');

		if (targetItem && pickedItem.name !== targetItem.name) {
			pickedItem.cell = targetCell;
			targetItem.cell = cell;
		} else if (pickedItem.name === targetItem?.name) {
			await this.addToStack(targetItem, pickedItem);
			itemHelper.removeItem(storage, pickedItem);
		} else if (!targetItem) {
			pickedItem.cell = targetCell;
		} else throw new SilentError('different items');
	}

	protected separate(
		player: Player,
		storage: InventoryItem[],
		cell: number,
		amount: number
	) {
		const item = this.getItemOfCell(storage, cell);
		if (!item) throw new SilentError('missing selected item');

		const freeCell = this.getFreeCell(player, storage);

		if (!isNumber(freeCell)) {
			return mp.events.reject('Отсутствуют свободные ячейки');
		}

		if (amount < 0 || amount >= item.amount) throw new SilentError('wrong amount');

		item.amount -= amount;
		storage.push({ ...item, amount, cell: freeCell });
	}

	protected async transfer(
		player: Player,
		storage: InventoryItem[],
		storage2: InventoryItem[],
		inside: boolean,
		cell: number,
		targetCell: number
	) {
		const pickedItem = this.getItemOfCell(inside ? storage : storage2, cell);
		const targetItem = this.getItemOfCell(inside ? storage2 : storage, targetCell);

		if (
			inside
				? !this.isEnoughSlots(player, storage2, pickedItem)
				: !storages.player.isEnoughSlots(player, storage, pickedItem)
		) {
			return mp.events.reject(`Недостаточно места в ${inside ? 'хранилище' : 'рюкзаке'}`);
		}

		if (pickedItem.name === targetItem?.name) {
			await this.addToStack(targetItem, pickedItem);
		} else if (!targetItem) {
			const item = { ...pickedItem, cell: targetCell };

			if (inside) storage2.push(item);
			else storage.push(item);
		} else throw new SilentError('different types');

		itemHelper.removeItem(inside ? storage : storage2, pickedItem);
	}

	private addToStack(stack: InventoryItem, picked: InventoryItem) {
		const stackSize = itemHelper.getItemData(picked.name).stack;
		const amount = stack.amount + picked.amount;

		if (amount > stackSize) {
			return mp.events.reject('Размер стака данного предмета ограничен');
		}

		stack.amount = amount;
	}
}
