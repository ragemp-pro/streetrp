class VehicleOwning {
	isOwner(vehicle: VehicleMp, player: Player) {
		const owner: VehicleOwner = vehicle?.owner;
		if (!owner) return false;

		return owner.faction
			? player.faction === owner.faction
			: vehicle.dbId
			? this.isRealOwner(vehicle, player)
			: owner.player && player.dbId.toString() === owner.player.toString();
	}

	isRealOwner(vehicle: VehicleMp, player: Player) {
		return vehicle?.dbId && player.vehicles.includes(vehicle.dbId);
	}

	setOwner(vehicle: VehicleMp, owner: VehicleOwner) {
		vehicle.owner = owner;
	}
}

export default new VehicleOwning();
