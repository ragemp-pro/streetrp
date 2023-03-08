class VehiclePassengers {
	constructor() {
		mp.events.subscribe({
			'Vehicle-GetPassengers': this.getListOfId,
			'Vehicle-KickPassenger': (player, ...args) => this.kick(args[0], args[1])
		});
	}

	isExists(vehicle: VehicleMp) {
		return mp.vehicles.exists(vehicle) && vehicle.getOccupants().length;
	}

	async getFreeSeat(player: Player, vehicle: VehicleMp) {
		const seat: number = await player.callEvent('Vehicle-GetFreeSeat', vehicle, true);

		return seat >= 0 ? seat + 1 : seat;
	}

	getListOfId(player: Player) {
		const { id, vehicle } = player.mp;

		return player.isDriver()
			? vehicle.getOccupants().flatMap((item) => (item.id !== id ? item.id : []))
			: [];
	}

	kick(vehicle: VehicleMp, passengerId: number) {
		const player = vehicle.getOccupants().find((item) => item.id === passengerId);

		if (player) player.removeFromVehicle();
	}
}

export default new VehiclePassengers();
