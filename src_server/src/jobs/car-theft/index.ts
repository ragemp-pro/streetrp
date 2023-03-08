import factions from 'factions';
import Job from '../job';
import Cheap from './cheap';
import Middle from './middle';
import Premium from './premium';

class CarTheft extends Job {
	constructor() {
		super(
			'Car_Theft',
			[130, 370, 390],
			{ x: 2029.789, y: 3183.732, z: 45.094 },
			{ name: 'Автопригон', model: 229, color: 1 }
		);

		this.cooldown.setTimeLimit(15 * 60 * 1000);
	}

	async startWork(player: Player, level: number) {
		if (player.level < 3) {
			return mp.events.reject('Нужен 3й игровой уровень');
		}
		if (factions.isGovMember(player)) {
			return mp.events.reject('Новых заказов ещё не поступало, приходи позже');
		}

		await super.startWork(player, level);
	}

	protected getBranchOfLevel(level: number) {
		switch (level) {
			case 0:
				return Cheap;
			case 1:
				return Middle;
			case 2:
				return Premium;

			default:
				return Cheap;
		}
	}
}

const job = new CarTheft();

job.addBranch(Cheap);
job.addBranch(Middle);
job.addBranch(Premium);
