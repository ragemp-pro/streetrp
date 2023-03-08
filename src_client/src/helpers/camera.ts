const player = mp.players.local;

class Camera {
	private entity?: CameraMp;

	private gameplayCam: CameraMp;

	constructor() {
		this.gameplayCam = mp.cameras.new('gameplay');

		Object.defineProperty(mp.cameras, 'gameplay', {
			get: () => this.gameplayCam
		});

		mp.cameras.getOffset = this.getOffset;
		mp.cameras.set = this.set.bind(this);
		mp.cameras.setToPlayer = this.setToPlayer.bind(this);
		mp.cameras.reset = this.reset.bind(this);
	}

	getOffset(position: Vector3Mp, angle: number, dist: number) {
		angle *= 0.0174533;

		position.y += dist * Math.sin(angle);
		position.x += dist * Math.cos(angle);

		return position;
	}

	set(
		position: Vector3Mp,
		rotation: Vector3Mp,
		point: PositionEx,
		fov: number,
		easing = 0
	) {
		if (mp.cameras.exists(this.entity)) this.entity.destroy();

		this.entity = mp.cameras.new('default', position, rotation, fov);

		this.entity.pointAtCoord(point.x, point.y, point.z);
		this.entity.setActive(true);

		mp.game.cam.renderScriptCams(true, easing > 0, easing, true, false);
	}

	setToPlayer(
		offset: Vector3Mp,
		point: Vector3Mp,
		dist: number,
		angle = 0,
		fov = 80,
		easing = 0
	) {
		const position = this.getOffset(
			new mp.Vector3(
				player.position.x + offset.x,
				player.position.y + offset.y,
				player.position.z + offset.z
			),
			player.getRotation(2).z + 90 + angle,
			dist
		);

		this.set(
			position,
			new mp.Vector3(0, 0, 0),
			{
				x: player.position.x + point.x,
				y: player.position.y + point.y,
				z: player.position.z + point.z
			},
			fov,
			easing
		);
	}

	reset(easing = 0) {
		if (!mp.cameras.exists(this.entity)) return;

		this.entity.setActive(false);

		mp.game.cam.renderScriptCams(false, easing > 0, easing, true, false);

		this.entity.destroy();
		this.entity = null;
	}
}

export default new Camera();
