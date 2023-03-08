import army from 'factions/army';
import materials from '../materials/vehicle';
import MaterialsLoading from '../materials/loading';
import { Strategy } from './index';

class SupplyLoading extends MaterialsLoading {
	private supply: Strategy;

	constructor(position: PositionEx, supply: Strategy) {
		super(position);

		this.supply = supply;
	}

	protected async checkCanBeLoaded(player: Player) {
		let err: string;

		if (!player.isDriver()) err = 'Вы должны быть за рулем ТС';
		else if (!army.inFaction(player)) err = 'Вы не на службе в армии';
		else if (this.supply.materialsLeft <= 0) err = 'Материалов больше нет';

		return err && mp.events.reject(err);
	}

	protected async loadIteration(player: Player) {
		await materials.loadToVehicle(player.mp.vehicle, 500);
		this.supply.changeMaterials(-500);
	}
}

export default SupplyLoading;
