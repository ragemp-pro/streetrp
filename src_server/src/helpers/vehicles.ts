class Vehicles {
	private items: Map<string, VehicleMp>;

	constructor() {
		this.items = new Map();

		this.init();
	}

	getById(id: string) {
		return this.items.get(id.toString());
	}

	authorize(vehicle: VehicleMp, dbId: string) {
		if (!vehicle || !dbId) return;

		vehicle.dbId = dbId.toString();
		this.items.set(vehicle.dbId, vehicle);
	}

	delete(vehicle: VehicleMp) {
		if (!vehicle || !mp.vehicles.exists(vehicle)) return;

		vehicle.destroy();
		this.items.delete(vehicle.dbId);
	}

	private init() {
		mp.vehicles.getById = this.getById.bind(this);
		mp.vehicles.authorize = this.authorize.bind(this);
		mp.vehicles.delete = this.delete.bind(this);
	}
}

export default new Vehicles();
