import factions from 'factions';
import materials from '../materials/vehicle';
import MaterialsLoading from '../materials/loading';
import fortWar from './fort';

class WarsLoading extends MaterialsLoading {
	private war: typeof fortWar;

	constructor(position: PositionEx, war: typeof fortWar) {
		super(position);

		this.war = war;
	}

	protected async checkCanBeLoaded(player: Player) {
		let err: string;

		if (!player.isDriver()) err = 'Вы должны быть за рулем ТС';
		else if (!player.faction || factions.getFaction(player.faction).government) {
			err = 'Вы не можете загружать материалы';
		} else if (!this.war.isStarted) err = 'Материалов больше нет';

		return err && mp.events.reject(err);
	}

	protected async loadIteration(player: Player) {
		await materials.loadToVehicle(player.mp.vehicle, 250);
		this.war.changeMaterials(-250);
	}
}

export default WarsLoading;
