import tasks from 'awards/tasks';
import Job from '../job';
import Mover from './mover';
import Forklift from './forklift';
import Handler from './handler';

class Waterfront extends Job {
	constructor() {
		super(
			'Waterfront',
			[80, 350, 420],
			{ x: 917.537, y: -3239.577, z: 5.895 },
			{ name: 'Порт', model: 455, color: 3 }
		);
	}

	async addSkillPoints(player: Player) {
		await super.addSkillPoints(player);
		await tasks.implement(player, 'waterfront_money');
	}

	protected getBranchOfLevel(level: number) {
		switch (level) {
			case 0:
				return Mover;
			case 1:
				return Forklift;
			case 2:
				return Handler;

			default:
				return Mover;
		}
	}
}

const job = new Waterfront();

job.addBranch(Mover);
job.addBranch(Forklift);
job.addBranch(Handler);
