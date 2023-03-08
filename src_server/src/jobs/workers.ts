import { isNumber } from 'lodash';

export type Worker = {
	order?: number;
	vehicle?: VehicleMp;
	cargo: number;
};

export default class Workers {
	private items: Map<string, Worker>;

	constructor() {
		this.items = new Map();
	}

	get amount() {
		return this.items.size;
	}

	isExists(player: Player) {
		return this.items.has(player.dbId);
	}

	doesItHaveOrder(player: Player) {
		return isNumber(this.items.get(player.dbId)?.order);
	}

	get(player: Player) {
		return this.items.get(player.dbId);
	}

	add(player: Player) {
		this.items.set(player.dbId, { cargo: 0 });
	}

	update(player: Player, data: Partial<Worker>) {
		const worker = this.get(player);

		if (!worker) return;

		this.items.set(player.dbId, { ...worker, ...data });
	}

	remove(player: Player) {
		this.items.delete(player.dbId);
	}
}
