import { last } from 'lodash';
import VehicleModel from 'models/Vehicle';
import hud from 'helpers/hud';
import Inventory from 'basic/inventory';
import playerInventory from 'player/inventory/storage';
import owning from './owning';
import vehicleState from './state';
import vehicleCtrl from './index';

class VehicleInventory extends Inventory {
	constructor() {
		super('vehicle');

		mp.events.subscribe({
			'Inventory-ShowVehicleMenu': this.showMenu.bind(this),
			'Inventory-VehicleMove': this.moveItem.bind(this),
			'Inventory-VehicleSeparate': this.separateItem.bind(this),
			'Inventory-VehicleTransfer': this.transferItem.bind(this)
		});
	}

	getMaxCells(player: Player) {
		const vehicle = player.target as VehicleMp;
		return vehicleCtrl.getTypeData(vehicle?.name).trunk.cells;
	}

	getMaxWeight(player: Player) {
		const vehicle = player.target as VehicleMp;
		return vehicleCtrl.getTypeData(vehicle?.name).trunk.slots;
	}

	showMenu(player: Player) {
		const vehicle = player.target as VehicleMp;

		if (
			player.mp.vehicle ||
			(!owning.isOwner(vehicle, player) && !vehicleState.get(vehicle).trunk)
		) {
			return hud.showNotification(player, 'error', 'Багажник закрыт!');
		}

		playerInventory.showMenu(player, {
			type: this.name,
			cells: this.getMaxCells(player),
			slots: this.getMaxWeight(player),
			items: vehicle.inventory
		});
	}

	async moveItem(player: Player, cell: number, targetCell: number) {
		const vehicle = player.target as VehicleMp;

		await this.move(vehicle.inventory, cell, targetCell);
		await this.updateInDb(vehicle.dbId, vehicle.inventory);

		return vehicle.inventory;
	}

	async separateItem(player: Player, cell: number, amount: number) {
		const vehicle = player.target as VehicleMp;

		await this.separate(player, vehicle.inventory, cell, amount);
		await this.updateInDb(vehicle.dbId, vehicle.inventory);

		return last(vehicle.inventory);
	}

	async transferItem(player: Player, inside: boolean, cell: number, targetCell: number) {
		const vehicle = player.target as VehicleMp;

		await this.transfer(
			player,
			player.inventory,
			vehicle.inventory,
			inside,
			cell,
			targetCell
		);
		await this.updateInDb(vehicle.dbId, vehicle.inventory);
		await playerInventory.updateInDb(player.dbId, player.inventory);

		return {
			item: this.getItemOfCell(inside ? vehicle.inventory : player.inventory, targetCell),
			weight: [
				this.getCurrentWeight(vehicle.inventory),
				this.getCurrentWeight(player.inventory)
			]
		};
	}

	async updateInDb(id: string, data: InventoryItem[]) {
		await VehicleModel.findByIdAndUpdate(id, { $set: { inventory: data } });
	}
}

export default new VehicleInventory();
