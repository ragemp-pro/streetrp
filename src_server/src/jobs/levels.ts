import { last } from 'lodash';
import CharModel from 'models/Character';
import hud from 'helpers/hud';

export default class Levels {
	private name: string;

	private levels: number[];

	constructor(name: string, items: number[]) {
		this.name = name;
		this.levels = items;
	}

	getCurrentLevel(player: Player) {
		const points = this.getSkillPoints(player);
		return this.levels.findIndex((level) => points <= level);
	}

	getSkillPoints(player: Player) {
		return player.skills[this.name] || 0;
	}

	getProgress(player: Player) {
		const level = this.getCurrentLevel(player);
		const skill = this.getSkillPoints(player);
		const needPoints = this.levels[level];

		return needPoints ? (skill * 100) / needPoints : 100;
	}

	async addSkill(player: Player, points = 1) {
		if (this.hasMaxLevel(player)) return;

		const current = this.getCurrentLevel(player);

		if (player.skills[this.name]) player.skills[this.name] += points;
		else player.skills[this.name] = points;

		await CharModel.findByIdAndUpdate(player.dbId, { skills: player.skills });

		if (current < this.getCurrentLevel(player)) {
			hud.showNotification(player, 'success', 'Вы достигли нового уровня на работе!');
		}
	}

	private hasMaxLevel(player: Player) {
		return this.getSkillPoints(player) >= last(this.levels);
	}
}
