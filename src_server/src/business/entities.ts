import logger from 'utils/logger';
import BusinessModel from 'models/Business';
import building from './building';

export type Entity = {
	id: string;
	index: number;
	paid: number;
	name: string;
	price: number;
	position: PositionEx;
	income: number;
	paymentTime?: Date;
	owner?: string;
	blip?: BlipMp;
};

class BusinessEntities {
	public items: Entity[];

	constructor() {
		this.items = [];
	}

	get count() {
		return this.items.length;
	}

	getItem(player: Player, index?: number) {
		const data: number = index ?? mp.colshapes.getData(player.mp);
		const entity = this.items[data];

		return entity?.index === data ? entity : null;
	}

	async load() {
		const cursor = await BusinessModel.find().lean().cursor();

		cursor.on('data', this.prepare.bind(this));
		cursor.on('close', () => logger.success(`Businesses loaded: ${this.count}`));
	}

	async create(player: Player, name: string, price: number, income: number) {
		const business = await BusinessModel.create({
			name,
			price,
			income,
			position: player.mp.position
		});
		return this.prepare(business.toObject() as BusinessModel);
	}

	async delete(index: number) {
		const entity = this.items[index];

		if (entity) {
			await BusinessModel.findByIdAndDelete(entity.id);

			if (entity.blip) entity.blip.destroy();
			this.items[index] = null;
		}
	}

	async update(entity: Entity, data: Partial<Entity>) {
		await BusinessModel.findByIdAndUpdate(entity.id, { $set: data });
		Object.assign(entity, data);
	}

	async reset(house: Entity) {
		const state = {
			owner: null,
			paid: 1,
			paymentTime: null
		};
		await this.update(house, state);
	}

	private prepare({ _id, owner, ...data }: BusinessModel) {
		const entity: Entity = {
			...data,
			id: _id.toString(),
			owner: owner?.toString(),
			index: this.count
		};
		Object.assign(entity, building.create(entity));
		this.items.push(entity);

		return entity;
	}
}

export default new BusinessEntities();
