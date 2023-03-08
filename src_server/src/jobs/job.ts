import Branch from './branch';
import Levels from './levels';
import Cooldown from './cooldown';

export const jobs: { [name: string]: Job } = {};

abstract class Job {
	public readonly name: string;

	protected levels: Levels;

	protected cooldown: Cooldown;

	private branches: Map<string, Branch>;

	constructor(name: string, levels: number[], position: PositionEx, blip?: BlipsOptions) {
		this.name = name;

		this.branches = new Map();
		this.levels = new Levels(name, levels);
		this.cooldown = new Cooldown(1500);

		if (blip) this.createBlip(position, blip);

		jobs[name] = this;
	}

	protected abstract getBranchOfLevel(level: number): Branch;

	addBranch(obj: Branch) {
		this.branches.set(obj.name, obj);
		obj.setJob(this);
	}

	loadPoints(coords: { [name: string]: PositionEx[] }) {
		Object.entries(coords).forEach(([name, arr]) => {
			const branch = this.branches.get(name);
			if (branch) branch.createPoints(arr);
		});
	}

	async addSkillPoints(player: Player) {
		await this.levels.addSkill(player);
	}

	onKeyPress(player: Player) {
		player.callEvent('Job-ShowMenu', [
			this.name,
			this.levels.getCurrentLevel(player),
			this.levels.getProgress(player),
			this.isWorksHere(player)
		]);
	}

	async startWork(player: Player, level: number) {
		if (this.isWorksHere(player) || this.isWorksOnAnotherJob(player)) {
			return mp.events.reject('Вы уже где-то работаете');
		}
		if (!this.cooldown.isEnded(player)) {
			return mp.events.reject('Попробуйте немного позже');
		}

		const playerLevel = this.levels.getCurrentLevel(player);
		const branch = this.getBranchOfLevel(level > playerLevel ? playerLevel : level);

		if (!this.branches.has(branch?.name)) throw new Error("job branch doesn't exists");

		branch.startWork(player);
		player.job = { name: this.name, branch: branch.name };
		this.cooldown.apply(player);
	}

	dismiss(player: Player) {
		if (!this.isWorksHere(player)) throw new SilentError("player doesn't work here");

		const branch = this.branches.get(player.job.branch);
		branch.finishWork(player);
	}

	private isWorksHere(player: Player) {
		const { job } = player;
		return job?.name === this.name && this.branches.has(job?.branch);
	}

	private isWorksOnAnotherJob(player: Player) {
		return player.job && !this.isWorksHere(player);
	}

	private createBlip(position: PositionEx, blip: BlipsOptions) {
		mp.blips.create(position, blip);
	}
}

export default Job;
