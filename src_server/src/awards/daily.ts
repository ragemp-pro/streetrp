import moment from 'moment';
import CharModel from 'models/Character';
import money from 'helpers/money';
import level from 'player/level';
import tasks from './tasks';

const items = [200, 400, 500, 600, 800, 1000, 1500];

type Bonus = {
	day: number;
	pickedAt?: string;
};

class DailyAwards {
	constructor() {
		mp.events.subscribe({
			'Daily-GetAward': this.getBonus.bind(this),
			'Daily-GetData': this.getData.bind(this)
		});
	}

	isPicked(bonus: Bonus) {
		return !!bonus.pickedAt && moment().diff(bonus.pickedAt, 'days') === 0;
	}

	private async getBonus(player: Player) {
		const user = await CharModel.findById(player.dbId).select({ dailyBonus: 1 });
		const { dailyBonus: bonus } = user;

		if (this.isPicked(bonus)) throw new SilentError('bonus has been picked');

		await money.change(player, 'bank', items[bonus.day], 'daily bonus');

		this.incDay(user.dailyBonus);
		bonus.pickedAt = new Date().toISOString();

		await user.save();
	}

	private incDay(bonus: Bonus) {
		if (bonus.day < 6) bonus.day += 1;
		else bonus.day = 0;
	}

	private async getData(player: Player) {
		const { dailyBonus } = await CharModel.findById(player.dbId)
			.select({ dailyBonus: 1 })
			.lean();

		const currentLevel = level.getLevelFromExp(player.experience);

		return {
			level: currentLevel,
			experience: [player.experience, level.getNeededExp(currentLevel)],
			bonuses: items,
			name: player.getName(),
			news: process.env.DAILY_NEWS,
			tasks: tasks.getCurrentList(player),
			day: this.isPicked(dailyBonus) ? -1 : dailyBonus.day
		};
	}
}

export default new DailyAwards();
