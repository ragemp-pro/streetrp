import hud from 'helpers/hud';
import animations from 'helpers/animations';
import inventory from 'basic/inventory/helper';
import actions from 'player/actions';
import vehicleState from './state';

class VehicleHealth {
	repair(vehicle: VehicleMp) {
		vehicle.repair();

		const health = vehicle.getVariable('maxHealth') || 1000;

		vehicleState.setDoors(vehicle, []);
		vehicleState.setHealth(vehicle, health, health);
	}

	repairWithKit(player: Player, vehicle: VehicleMp) {
		if (!vehicle || player.mp.vehicle) {
			return hud.showNotification(player, 'error', 'Станьте рядом с ТС');
		}

		actions.checkActionTimeout(player);

		const tools = inventory.findItem(player.inventory, 'repair_kit');
		if (!tools) {
			return hud.showNotification(player, 'error', 'У вас нет рем. комплекта');
		}
		inventory.changeItemAmount(player.inventory, tools, -1);

		this.repair(vehicle);

		animations.setScenario(player, 'repair_veh', true);
		actions.setActionTimeout(player, 6000);
	}
}

export default new VehicleHealth();
