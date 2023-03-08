import hud from 'helpers/hud';
import animations from 'helpers/animations';
import inventory from 'basic/inventory/helper';
import actions from 'player/actions';
import state from './state';

type Fuel = {
	current: number;
	max: number;
};

class VehicleFuel {
	constructor() {
		this.runDecreaseInterval();
	}

	useJerrycan(player: Player, vehicle: VehicleMp) {
		if (!vehicle || player.mp.vehicle) {
			return hud.showNotification(player, 'error', 'Станьте рядом с ТС');
		}

		actions.checkActionTimeout(player);

		const jerrycan = inventory.findItem(player.inventory, 'jerrycan');
		if (!jerrycan) {
			return hud.showNotification(player, 'error', 'У вас нет канистры с топливом');
		}
		inventory.changeItemAmount(player.inventory, jerrycan, -1);

		this.fillUp(vehicle, 20);

		animations.setScenario(player, 'refuel', true);
		actions.setActionTimeout(player, 6000);
	}

	fillUp(vehicle: VehicleMp, amount: number) {
		if (amount <= 0) return;

		const fuel: Fuel = vehicle.getVariable('fuel');
		const total = Math.round(fuel.current + amount);

		vehicle.setVariable('fuel', {
			...fuel,
			current: total < fuel.max ? total : fuel.max
		});
	}

	private decrease(vehicle: VehicleMp) {
		if (!vehicle?.engine) return;

		const fuel: Fuel = vehicle.getVariable('fuel');

		if (fuel?.current > 0) {
			const reduced = fuel.current - 1;

			vehicle.setVariable('fuel', { ...fuel, current: reduced <= 0 ? 0 : reduced });

			if (reduced <= 0) state.setEngineStatus(vehicle, false);
		}
	}

	private runDecreaseInterval() {
		setInterval(() => mp.vehicles.forEach(this.decrease), 60 * 1000);
	}
}

export default new VehicleFuel();
