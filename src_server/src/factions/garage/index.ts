import moment from 'moment';
import hud from 'helpers/hud';
import factions from 'factions';
import Faction from '../faction';
import Garage from './garage';

class GarageCtrl {
	constructor() {
		mp.events.subscribe({
			'Factions-ShowGarage': this.showMenu.bind(this),
			'Factions-SpawnVehicle': this.spawnVehicle.bind(this),
			'Factions-DespawnVehicle': this.despawnVehicle.bind(this)
		});
	}

	private showMenu(player: Player) {
		const faction = factions.getFaction(player.faction);
		this.checkAccess(player, faction);

		faction.garage.showMenu(player);
	}

	private spawnVehicle(player: Player, model: string) {
		const faction = factions.getFaction(player.faction);
		this.checkAccess(player, faction);

		if (this.isAlreadyTook(player, faction.garage)) {
			return mp.events.reject('Вы уже брали ТС, эвакуируйте его через планшет');
		}

		return faction.garage.spawnVehicle(player, model);
	}

	private despawnVehicle(player: Player, id: number) {
		const faction = factions.getFaction(player.faction);
		this.checkAccess(player, faction);

		const vehicle = faction.garage.vehicles.get(id);
		if (!vehicle || vehicle.despawnAt) throw new SilentError("vehicle doesn't exists");

		vehicle.despawnAt = moment().add(1, 'minutes').valueOf();
	}

	private checkAccess(player: Player, faction: Faction) {
		if (!faction?.garage || !faction.hasAccess(player, 'garage')) {
			hud.showNotification(player, 'error', 'Нет доступа');

			throw new SilentError('access denied');
		}
	}

	private isAlreadyTook(player: Player, garage: Garage) {
		const vehicle = Array.from(garage.vehicles.values()).find(
			({ owner }) => owner?.player === player.dbId
		);

		return !!vehicle;
	}
}

const controller = new GarageCtrl();

export { Garage };
