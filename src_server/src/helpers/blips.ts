class Blips {
	constructor() {
		mp.events.subscribe({
			'Blips-GetNames': this.getNames,
			'Blips-MarkNearest': this.markNearest.bind(this)
		});

		mp.blips.create = this.create.bind(this);
		mp.blips.createForPlayer = this.createForPlayer.bind(this);
		mp.blips.delete = this.delete.bind(this);
	}

	create(position: PositionEx, options: BlipsOptions, player?: Player) {
		const { x, y, z } = position;
		const { model, name, color, dimension = 0, scale = 0.95 } = options;

		if (!player) {
			return mp.blips.new(model, new mp.Vector3(x, y, z), {
				name,
				scale,
				color,
				dimension,
				shortRange: true
			});
		}

		this.createPoint(player, position, color);
	}

	createForPlayer(
		player: Player,
		position: PositionEx,
		options: BlipsOptions,
		id?: string
	) {
		const { model, ...data } = options;

		player.callEvent('Blips-CreateItem', [id ?? data.name, model, position, data]);
	}

	delete(player: Player, blip: BlipMp | string) {
		if (typeof blip === 'string') this.deleteOnClient(player, blip);
		else blip.destroy();
	}

	setWaypoint(player: PlayerMp, position: PositionEx) {
		player.call('createWaypoint', [position.x, position.y]);
	}

	private createPoint(player: Player, position: PositionEx, color: number) {
		player.callEvent('Blips-CreatePoint', [position, color]);
	}

	private deleteOnClient(player: Player, name: string) {
		player.callEvent('Blips-Delete', name);
	}

	private getNames() {
		const names = [];

		mp.blips.forEach((blip) => {
			if (!names.includes(blip.name)) names.push(blip.name);
		});

		return names;
	}

	private markNearest(player: Player, name: string) {
		const { position } = player.mp;
		const blips = mp.blips.toArray();

		let nearestEntity = blips[0];

		blips.forEach((item) => {
			if (item.name !== name) return;

			if (
				nearestEntity.name !== name ||
				item.dist(position) < nearestEntity.dist(position)
			) {
				nearestEntity = item;
			}
		});

		this.setWaypoint(player.mp, nearestEntity.position);
	}
}

export default new Blips();
