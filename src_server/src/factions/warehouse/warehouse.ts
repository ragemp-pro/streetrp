import FactionModel from 'models/Faction';
import MaterialsLoading from '../materials/loading';
import Faction from '../faction';

class FactionWarehouse {
	public readonly capacity: number;

	public readonly faction: Faction;

	private materials: number;

	private loading: MaterialsLoading;

	constructor(capacity: number, faction: Faction) {
		this.materials = 0;
		this.faction = faction;
		this.capacity = capacity;
	}

	get current() {
		return this.materials;
	}

	set current(amount: number) {
		this.materials = amount;
	}

	setLoading(loader: MaterialsLoading) {
		this.loading = loader;
	}

	toggleUnloadPoint(visible: boolean) {
		this.loading.togglePoint(visible);
	}

	async changeMaterials(amount: number) {
		const totalAmount = this.current + amount;

		if (totalAmount < 0) return mp.events.reject('Недостаточно материалов на складе');
		if (totalAmount > this.capacity) return mp.events.reject('Склад переполнен');

		await FactionModel.findOneAndUpdate(
			{ name: this.faction.name },
			{ $inc: { materials: amount } }
		);
		this.current = totalAmount;
	}
}

export default FactionWarehouse;
