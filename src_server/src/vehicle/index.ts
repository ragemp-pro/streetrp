import VehicleModel from 'models/Vehicle';
import hud from 'helpers/hud';
import vehicles from 'data/vehicles.json';
import vehicleState from './state';
import owning from './owning';
import fuel from './fuel';
import health from './health';
import { vehicleTypes } from './types';
import './sync';
import './inventory';
import './passengers';
import './lock';
import './trade';
import './spawn';

class VehicleController {
	constructor() {
		mp.events.subscribe({
			'Vehicle-GetInfo': (player: Player, model: string) => this.getTypeData(model),
			'Vehicle-ToggleTrunk': this.toggleAccessToTrunk,
			'Vehicle-GetPlayerList': this.getPlayerVehicles,
			'Vehicle-ToggleEngine': this.toggleEngine,
			'Vehicle-ToggleDoor': this.toggleDoor,
			'Vehicle-ToggleIndicator': (player: Player, vehicle: VehicleMp, value: any) => {
				vehicleState.toggleIndicator(vehicle, value);
			},
			'Vehicle-Refuel': (player: Player, vehicle: VehicleMp) => {
				fuel.useJerrycan(player, vehicle);
			},
			'Vehicle-Repair': (player: Player, vehicle: VehicleMp) => {
				health.repairWithKit(player, vehicle);
			}
		});
	}

	getTypeData(model: string) {
		return vehicles[model] ? (vehicleTypes[vehicles[model].type] || vehicleTypes.sedan) : vehicleTypes.sedan;
	}

	async loadPlayerVehicles(player: Player) {
		const items = await VehicleModel.find({ owner: player.dbId })
			.select({ _id: 1 })
			.lean();

		player.vehicles = items.map((item) => item._id.toString());
	}

	private async getPlayerVehicles(player: Player) {
		const items = await VehicleModel.find({ _id: { $in: player.vehicles } })
			.select({ _id: 1, name: 1, govNumber: 1 })
			.lean();

		return items.map((item) => ({
			id: item._id,
			model: item.name,
			govNumber: item.govNumber,
			spawned: !!mp.vehicles.getById(item._id)
		}));
	}

	private toggleEngine(player: Player, vehicle: VehicleMp) {
		if (!vehicle || vehicle.getVariable('fuel')?.current <= 0) {
			return hud.showNotification(player, 'error', 'Недостаточно топлива');
		}
		if (vehicle.owner.faction && !owning.isOwner(vehicle, player)) {
			return hud.showNotification(player, 'error', 'Нет доступа');
		}

		vehicleState.setEngineStatus(vehicle, !vehicleState.get(vehicle).engine);
	}

	private toggleDoor(player: Player, vehicle: VehicleMp, doors: number[]) {
		if (!owning.isOwner(vehicle, player)) {
			return hud.showNotification(player, 'error', 'Нет доступа');
		}

		vehicleState.setDoors(vehicle, doors);
	}

	private toggleAccessToTrunk(player: Player, vehicle: VehicleMp) {
		if (!owning.isOwner(vehicle, player)) {
			return hud.showNotification(player, 'error', 'Нет доступа');
		}

		const status = vehicleState.toggleTrunk(vehicle);

		hud.showNotification(
			player,
			'info',
			status ? 'Багажник открыт для всех' : 'Багажник закрыт'
		);
	}
}

export default new VehicleController();
