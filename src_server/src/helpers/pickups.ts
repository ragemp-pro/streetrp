import cryptoRandomString from 'crypto-random-string';
import playerInventory from 'player/inventory';
import inventoryItems from 'data/inventory.json';
import animations from './animations';

type Pickup = {
	taked: boolean;
	item: Omit<InventoryItem, 'cell'>;
	colshape: ColshapeMp;
	object: ObjectMp;
};

class Pickups {
	private items: Map<string, Pickup>;

	constructor() {
		this.items = new Map();

		mp.pickups.create = this.create.bind(this);
	}

	create(position: PositionEx, dimension: number, item: InventoryItem) {
		const objectModel: string = inventoryItems[item.name]?.model;

		if (!objectModel) throw new SilentError('model of object does not exists');

		const id = this.generateId();
		const pickup: Pickup = {
			item: { name: item.name, amount: item.amount, data: item.data },
			taked: false,
			colshape: this.getColshape(id, position, dimension),
			object: this.createObject(position, objectModel, dimension)
		};

		this.items.set(id, pickup);
	}

	async take(player: Player, id: string) {
		const pickup = this.items.get(id);

		if (!pickup || pickup.taked || player.mp.vehicle) return;

		try {
			pickup.taked = true;

			animations.playOnServer(player.mp, 'pickup', 2000);

			await playerInventory.addItem(player, pickup.item);
			this.destroy(id);
		} catch (err) {
			pickup.taked = false;
		}
	}

	destroy(id: string) {
		const pickup = this.items.get(id);

		if (pickup) {
			pickup.object.destroy();
			mp.colshapes.delete(pickup.colshape);

			this.items.delete(id);
		}
	}

	private generateId() {
		let id: string;

		do {
			const str = cryptoRandomString({ length: 32 });

			if (!this.items.get(str)) id = str;
		} while (!id);

		return id;
	}

	private createObject(position: PositionEx, model: string, dimension: number) {
		const object = mp.objects.new(
			model,
			new mp.Vector3(position.x, position.y, position.z - 0.9),
			{
				dimension,
				rotation: new mp.Vector3(0, 0, 0),
				alpha: 255
			}
		);
		object.setVariable('pickup', true);

		return object;
	}

	private getColshape(pickupId: string, position: PositionEx, dimension: number) {
		return mp.colshapes.create(
			position,
			0.7,
			{
				onKeyPress: (player: Player, id: string) => this.take(player, id)
			},
			{ dimension, data: pickupId }
		);
	}
}

export default new Pickups();
