class Teleport {
	toPlayer(admin: Player, target: number) {
		const player = mp.players.at(target);

		if (!player) throw new SilentError("target doesn't exists");

		admin.tp(player.position, player.heading, player.dimension);
	}

	toYourself(admin: Player, target: number) {
		const player = mp.players.get(target);

		if (!player) throw new SilentError("target doesn't exists");

		const { position, heading, dimension } = admin.mp;
		player.tp(position, heading, dimension);
	}

	toWaypoint(admin: Player) {
		if (!admin.waypoint) return;

		const { vehicle, dimension, heading } = admin.mp;

		if (vehicle) vehicle.position = admin.waypoint;
		else admin.tp(admin.waypoint, heading, dimension);
	}
}

export default new Teleport();
