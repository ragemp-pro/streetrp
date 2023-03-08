import moment from 'moment';
import money from 'helpers/money';
import hud from 'helpers/hud';

class Bonus {
	public readonly fulfilledTime = 4 * 60;

	private readonly points = 100;

	initPlayerBonus(player: Player, time: number, lastLoginDate: string) {
		const bonusTime = moment(lastLoginDate).isSame(moment(), 'days') ? time : 0;
		this.setBonusTimeOnClient(player, bonusTime);
	}

	incrementPlayerTime(player: Player) {
		const time = player.bonusTime > -1 ? player.bonusTime + 1 : -1;

		if (time >= this.fulfilledTime) this.giveAward(player);
		else this.setBonusTimeOnClient(player, time);
	}

	private async giveAward(player: Player) {
		await money.change(player, 'points', this.points, 'time bonus');
		this.setBonusTimeOnClient(player, -1);
	}

	private setBonusTimeOnClient(player: Player, time: number) {
		player.bonusTime = time;
		hud.showBonusTime(player.mp, time > -1 ? this.fulfilledTime - time : time);
	}
}

export default new Bonus();
