import { getClosestVehicleInRange } from 'utils/vehicle';
import hud from 'helpers/hud';
import inventoryHelper from 'basic/inventory/helper';
import playerStorage from 'player/inventory/storage';
import equipment from 'player/equipment';
import passengers from 'vehicle/passengers';
import cuffs from './cuffs';
import follow from './follow';

class FactionActions {
	constructor() {
		mp.events.subscribe({
			'FactionActions-Unmask': this.unmask,
			'FactionActions-ToVehicle': this.putToVehicle,
			'FactionActions-Frisk': this.friskPlayer
		});
	}

	async putToVehicle(player: Player) {
		const target = mp.players.get(player.target as any);
		if (!player.entityIsNearby(target?.mp) || target.mp.vehicle || target.dead) return;

		if (!cuffs.inCuffs(target)) {
			return hud.showNotification(player, 'error', 'Игрок должен быть в наручниках');
		}

		const vehicle = getClosestVehicleInRange(player.mp.position, 4);
		if (!vehicle) return;

		const seat = await passengers.getFreeSeat(player, vehicle);

		if (seat < 0) {
			return hud.showNotification(player, 'error', 'В ТС нет свободного места');
		}

		follow.reset(target);
		target.mp.putIntoVehicle(vehicle, seat);
	}

	async unmask(player: Player) {
		const target = mp.players.get(player.target as any);
		if (!player.entityIsNearby(target?.mp) || target.mp.vehicle) return;

		const mask = equipment.getEquipment(target, 'mask');
		if (!mask) return;

		equipment.unequip(player, mask);
		inventoryHelper.removeItem(target.inventory, mask);
	}

	friskPlayer(player: Player) {
		const target = mp.players.get(player.target as any);
		if (!player.entityIsNearby(target?.mp)) return;

		if (!cuffs.inCuffs(target)) {
			return hud.showNotification(player, 'error', 'Игрок должен быть в наручниках');
		}

		playerStorage.showMenu(player, {
			type: 'player',
			cells: playerStorage.getMaxCells(target),
			slots: playerStorage.getMaxWeight(target),
			items: target.inventory
		});
	}
}

export default new FactionActions();
