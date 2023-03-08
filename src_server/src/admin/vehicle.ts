import factions from 'factions';
import vehicleCreator, { Builder } from 'vehicle/creator';
import permissions from './permissions';
import journal from './journal';

class AdminVehicle {
	constructor() {
		mp.events.subscribe({
			'Admin-CreateVehicle': this.createVehicle.bind(this),
			'Admin-DespawnVehicle': this.despawnVehicle.bind(this)
		});
	}

	private async createVehicle(
		admin: Player,
		model: string,
		targetId: string,
		temporary: boolean
	) {
		if (
			(!temporary && !permissions.hasPermission(admin, 'owner')) ||
			!permissions.hasPermission(admin, 'admin')
		)
			return;

		const player = !temporary && mp.players.getByDbId(targetId);
		const owner = { player: player ? player.dbId : admin.dbId };
		const { position } = admin.mp;

		if (temporary) vehicleCreator.buildTemporary(model, position, 90, owner);
		else if (player) {
			await vehicleCreator.buildForPlayer(player, new Builder(model, position, 90));
		}

		journal.recordAction(
			admin,
			'vehicle_create',
			player ? `${player.getName()} | ${model}` : model,
			player?.dbId
		);
	}

	private despawnVehicle(admin: Player, govNumber?: string) {
		if (!permissions.hasPermission(admin, 'admin')) return;

		const vehicle = govNumber
			? mp.vehicles.toArray().find((item) => item.numberPlate === govNumber)
			: (admin.target as VehicleMp);

		if (vehicle?.type !== 'vehicle') throw new SilentError("vehicle doesn't exists");

		const { owner } = vehicle;

		if (owner?.faction) {
			const { garage } = factions.getFaction(owner.faction);
			garage.despawnVehicle(vehicle);
		} else {
			mp.vehicles.delete(vehicle);
		}
	}
}

const vehicle = new AdminVehicle();
