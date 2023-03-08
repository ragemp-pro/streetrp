import moment from 'moment';
import { sample, isNumber } from 'lodash';
import CharModel from 'models/Character';
import hud from 'helpers/hud';
import level from 'player/level';
import tasksList from 'data/tasks.json';

class DailyTasks {
	getCurrentList(player: Player) {
		const list: { [name: string]: [number, number] } = {};

		Object.entries(player.tasks).forEach(([name, current]) => {
			list[name] = [current, this.getAmountOfTask(name)];
		});

		return list;
	}

	async implement(player: Player, name: string) {
		if (!isNumber(player.tasks[name])) return;

		player.tasks[name] += 1;

		if (this.isCompleted(player, name)) await this.complete(player, name);
	}

	generate(player: Player, doc: CharModel, lastLogin: string) {
		if (player.mp.getOwnVariable('isNewbie')) {
			player.tasks = this.getForNewbie();
		} else if (moment(lastLogin).isSame(moment(), 'days')) {
			return this.updatePlayer(player, doc.tasks);
		}

		const tasks = { ...player.tasks };

		while (Object.keys(tasks).length < 3) {
			const task = sample(Object.keys(tasksList));

			if (!isNumber(tasks[task])) tasks[task] = 0;
		}

		this.updatePlayer(player, tasks);
		doc.tasks = player.tasks;
	}

	private getAmountOfTask(task: string) {
		return tasksList[task]?.amount;
	}

	private isCompleted(player: Player, task: string) {
		return player.tasks[task] >= this.getAmountOfTask(task);
	}

	private updatePlayer(player: Player, tasks: { [name: string]: number }) {
		player.tasks = tasks;
		hud.showTasks(player.mp, Object.keys(tasks));
	}

	private async complete(player: Player, task: string) {
		delete player.tasks[task];

		level.addExp(player, tasksList[task].award);
		await CharModel.findByIdAndUpdate(player.dbId, { $unset: { [`tasks.${task}`]: '' } });

		this.updatePlayer(player, player.tasks);
	}

	private getForNewbie() {
		return {
			handshake: 0,
			bank_replenish: 0,
			building_money: 0
		};
	}
}

export default new DailyTasks();
