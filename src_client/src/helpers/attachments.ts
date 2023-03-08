import { isNumber, isString } from 'lodash';
import { fromObject } from 'utils/vector';
import objects from 'data/attachments.json';

class Attachments implements AttachmentsMp {
	private items: Map<number, Attachment>;

	constructor() {
		this.items = new Map();

		mp.attachments = this;

		objects.forEach((item) =>
			mp.attachments.register(item.name, {
				model: item.model,
				bone: item.bone,
				offset: fromObject(item.offset),
				rotation: fromObject(item.rotation)
			})
		);

		this.subscribeToEvents();
	}

	register(id: number | string, data: Attachment) {
		const itemId = isString(id) ? mp.game.joaat(id) : id;
		const model = isString(data.model) ? mp.game.joaat(data.model) : data.model;

		if (!this.items.has(itemId) && mp.game.streaming.isModelInCdimage(model)) {
			this.items.set(itemId, { ...data, model });
		}
	}

	async addFor(entity: PlayerMp | VehicleMp, id: number) {
		if (!entity.objects) entity.objects = {};

		if (!this.items.has(id) || entity.objects[id]) return;

		const { model, bone, offset, rotation } = this.items.get(id);
		const object = await mp.objects.create(model as number, entity.position);

		try {
			if (!entity.handle && object) return object.destroy();

			object.attachTo(
				entity.handle,
				isNumber(bone) && entity.type === 'player'
					? (entity as PlayerMp).getBoneIndex(bone)
					: entity.getBoneIndexByName(bone as string),
				offset.x,
				offset.y,
				offset.z,
				rotation.x,
				rotation.y,
				rotation.z,
				false,
				false,
				false,
				false,
				2,
				true
			);

			entity.objects[id] = object;
		} catch (err) {
			object.destroy();
		}
	}

	removeFor(entity: PlayerMp | VehicleMp, id: number) {
		if (entity.objects && entity.objects[id]) {
			const obj = entity.objects[id];

			if (mp.objects.exists(obj)) obj.destroy();

			delete entity.objects[id];
		}
	}

	private isCorrectEntity(entity: any) {
		const types = ['player', 'vehicle'];

		return types.includes(entity?.type) && entity.objects;
	}

	private initFor(entity: any) {
		if (!this.isCorrectEntity(entity)) return;

		const attachments = this.getHashes(entity.getVariable('attachments'));

		attachments.forEach((item) => this.addFor(entity as any, item));
	}

	private shutdownFor(entity: any) {
		if (!this.isCorrectEntity(entity)) return;

		Object.keys(entity.objects).forEach((item) =>
			this.removeFor(entity, parseInt(item, 10))
		);
	}

	private getHashes(data: string) {
		return data?.length > 0 ? data.split('|').map((att) => parseInt(att, 36)) : [];
	}

	private subscribeToEvents() {
		mp.events.subscribeToDefault({
			entityStreamIn: this.initFor.bind(this),
			entityStreamOut: this.shutdownFor.bind(this)
		});

		mp.events.subscribeToData({
			attachments: (entity: PlayerMp | VehicleMp, data: string) => {
				const attachments = this.getHashes(data);

				this.shutdownFor(entity);

				attachments.forEach((item) => this.addFor(entity, item));
			}
		});
	}
}

export default new Attachments();
