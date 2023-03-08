class Objects {
	constructor() {
		mp.objects.create = this.create.bind(this);

		mp.events.subscribeToDefault({
			entityStreamIn: (entity: ObjectMp) => {
				if (entity.type !== 'object') return;

				entity.setCollision(false, false);

				if (entity.systemResolve) {
					entity.systemResolve(entity);
					delete entity.systemResolve;
				}
			}
		});

		mp.events.subscribeToData(
			{
				pickup: (entity: ObjectMp, status: boolean) => {
					if (entity.type === 'object' && status) {
						entity.notifyStreaming = true;
					}
				}
			},
			false
		);
	}

	create(model: number, position: Vector3Mp, options: ObjectOptions = {}) {
		return new Promise((resolve) => {
			const object = mp.objects.new(model, position, {
				rotation: options.rotation ?? new mp.Vector3(0, 0, 0),
				dimension: options.dimension ?? -1,
				alpha: options.alpha ?? 255
			});

			object.systemResolve = resolve;
			object.notifyStreaming = true;
		});
	}
}

export default new Objects();
