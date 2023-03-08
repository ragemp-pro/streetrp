import Faction from '../faction';
import Warehouse from './warehouse';
import WarehouseLoading from './loading';

class WarehouseCtrl {
	create(position: PositionEx, capacity: number, faction: Faction) {
		const warehouse = new Warehouse(capacity, faction);
		const loading = new WarehouseLoading(position, warehouse);

		warehouse.setLoading(loading);
		faction.points.add(loading.point);

		return warehouse;
	}
}

export default new WarehouseCtrl();
