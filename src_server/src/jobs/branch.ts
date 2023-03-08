import { random, isNumber } from 'lodash';
import points from 'helpers/points';
import money from 'helpers/money';
import playerClothes, { ClothesName } from 'player/clothes';
import Job from './job';
import Workers from './workers';
import Points from './points';

type Clothes = {
	male: { [name in ClothesName]?: number[] };
	female: { [name in ClothesName]?: number[] };
};

abstract class JobBranch {
	public readonly name: string;

	protected points: Points;

	protected workers: Workers;

	private job: Job;

	private salary: number;

	private clothes?: Clothes;

	constructor(name: string, salary: number, clothes?: Clothes) {
		this.name = name;
		this.salary = salary;
		this.clothes = clothes;

		this.points = new Points();
		this.workers = new Workers();
	}

	protected abstract onEnterPoint(player: Player): void;

	setJob(entity: Job) {
		this.job = entity;
	}

	createPoints(coords: PositionEx[], radius = 2) {
		coords.forEach((item) => {
			const point = points.create(
				item,
				radius,
				{ onKeyPress: this.onEnterPoint.bind(this) },
				{ color: [227, 41, 112, 120] }
			);

			this.points.add(point);
		});
	}

	startWork(player: Player) {
		this.setClothes(player);
		this.workers.add(player);
	}

	finishWork(player: Player) {
		if (this.workers.doesItHaveOrder(player)) this.cancelOrder(player);

		this.workers.remove(player);

		if (this.clothes) playerClothes.load(player);
		player.job = null;
	}

	protected setClothes(player: Player) {
		if (!this.clothes) return;

		playerClothes.clear(player);

		Object.entries(this.clothes[player.gender]).forEach(([name, item]) => {
			playerClothes.set(player, name as any, { style: item[0], color: item[1] });
		});
	}

	protected createOrder(player: Player) {
		const worker = this.workers.get(player);

		if (isNumber(worker.order)) throw new SilentError('job order has been declared');

		worker.order = random(0, this.points.amount - 1);
		this.points.show(player, worker.order);
	}

	protected cancelOrder(player: Player) {
		const worker = this.workers.get(player);

		if (worker) {
			this.points.hide(player, worker.order);
			worker.order = null;
		}
	}

	protected async completeOrder(player: Player) {
		if (!this.workers.doesItHaveOrder(player)) {
			throw new SilentError("player doesn't have order");
		}

		this.cancelOrder(player);

		await this.job.addSkillPoints(player);
		await this.giveSalary(player);
	}

	protected async giveSalary(player: Player) {
		await money.change(player, 'cash', this.salary, `job salary | ${this.name}`);
	}
}

export default JobBranch;
