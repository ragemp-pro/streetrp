import { last } from 'lodash';
import logger from 'utils/logger';
import HouseModel from 'models/House';
import houses from 'data/houses.json';
import building from './building';

export type Entity = {
	id: string;
	index: number;
	type: string;
	locked: boolean;
	inventory: InventoryItem[];
	position: PositionEx;
	dimension: number;
	paid: number;
	owner?: string;
	blip?: BlipMp;
};

class HouseEntities {
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

	getInventoryCapacity(house: Entity) {
		return houses[house.type].inventory as InventoryCapacity;
	}

	getVehicleSlots(house: Entity) {
		return houses[house.type].vehicles as number;
	}

	async load() {
		const cursor = await HouseModel.find().lean().cursor();

		cursor.on('data', this.prepare.bind(this));
		cursor.on('close', () => logger.success(`Houses loaded: ${this.count}`));
	}

	async create(player: Player, type: string) {
		const house = await HouseModel.create({
			type,
			position: player.mp.position
		});

		this.prepare(house.toObject() as HouseModel);

		return last(this.items);
	}

	async delete(index: number) {
		const house = this.items[index];

		if (house) {
			await HouseModel.findByIdAndDelete(house.id);

			if (house.blip) house.blip.destroy();
			this.items[index] = null;
		}
	}

	async update(entity: Entity, data: Partial<Entity>) {
		await HouseModel.findByIdAndUpdate(entity.id, { $set: data });

		Object.assign(entity, data);
	}

	async reset(house: Entity) {
		const state = {
			paid: 1,
			locked: false,
			owner: null,
			inventory: []
		};

		await this.update(house, state);
	}

	private prepare({ _id, owner, ...data }: HouseModel) {
		const entity: Entity = {
			...data,
			id: _id.toString(),
			owner: owner?.toString(),
			dimension: 0,
			index: this.count
		};

		this.items.push({ ...entity, ...building.create(entity) });
	}
}

export default new HouseEntities();
