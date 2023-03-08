class Particles {
	constructor() {
		mp.events.subscribe({
			'Particles-ShowSmoke': this.showSmoke.bind(this)
		});
	}

	async showSmoke(player: PlayerMp, duration: number) {
		const fx = await this.createFxOnBone(
			'core',
			'exp_grd_bzgas_smoke',
			{ x: 0, y: 0, z: 0 },
			{ x: 0, y: 0, z: 0 },
			0.3,
			player,
			player.getBoneIndex(20178)
		);

		setTimeout(() => {
			mp.game.graphics.stopParticleFxLooped(fx, false);
		}, duration);
	}

	private async createFx(
		name: string,
		effect: string,
		position: PositionEx,
		rotation: PositionEx,
		scale: number
	) {
		await this.loadPtfx(name);

		return mp.game.graphics.startParticleFxLoopedAtCoord(
			effect,
			position.x,
			position.y,
			position.z,
			rotation.x,
			rotation.y,
			rotation.z,
			scale,
			true,
			true,
			true,
			false
		);
	}

	private async createFxOnBone(
		name: string,
		effect: string,
		offset: PositionEx,
		rotation: PositionEx,
		scale: number,
		entity: EntityMp,
		boneIndex: number
	) {
		await this.loadPtfx(name);

		return mp.game.graphics.startParticleFxLoopedOnEntityBone(
			effect,
			entity.handle,
			offset.x,
			offset.y,
			offset.z,
			rotation.x,
			rotation.y,
			rotation.z,
			boneIndex,
			scale,
			false,
			false,
			false
		);
	}

	private async loadPtfx(name: string) {
		if (!mp.game.streaming.hasNamedPtfxAssetLoaded(name)) {
			mp.game.streaming.requestNamedPtfxAsset(name);

			while (!mp.game.streaming.hasNamedPtfxAssetLoaded(name)) await mp.game.waitAsync(0);
		}

		mp.game.graphics.setPtfxAssetNextCall(name);
	}
}

export default new Particles();
