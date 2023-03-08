import { isNumber } from 'lodash';
import logs from 'basic/logs';
import UserModel from 'models/User';
import CharModel from 'models/Character';
import hud from './hud';

class Money {
	async change(player: Player, type: PaymentType, value: any, note?: string) {
		const sum = parseInt(value, 10);

		if (!isNumber(sum) || sum === 0) throw new SilentError('wrong value');

		const status = await this.updateInDb(
			type === 'points' ? player.account : player.dbId,
			type,
			sum
		);
		if (!status) {
			hud.showNotification(player, 'error', this.getErrorMessage(type), true);
			throw new SilentError('insufficient funds');
		}

		this.updatePlayer(player, { [type]: player.money[type] + sum });
		this.logOperation(player.dbId, type, sum, note);
	}

	async changeById(userId: string, type: PaymentType, value: any, note?: string) {
		const sum = parseInt(value, 10);

		if (!isNumber(sum) || sum === 0) throw new SilentError('wrong value');

		const status = await this.updateInDb(userId, type, sum);
		if (!status) throw new SilentError('insufficient funds');

		const player = mp.players.getByDbId(userId);

		if (player) {
			this.updatePlayer(player, { [type]: player.money[type] + sum });
		}

		this.logOperation(userId, type, sum, note);
	}

	async exchange(
		player: Player,
		from: PaymentType,
		to: PaymentType,
		value: any,
		note?: string
	) {
		const sum = parseInt(value, 10);

		if (!isNumber(sum) || sum <= 0) throw new SilentError('wrong value');

		const status = await CharModel.updateOne(
			{ _id: player.dbId, [`money.${from}`]: { $gt: sum - 1 } },
			{ $inc: { [`money.${from}`]: -sum, [`money.${to}`]: sum } }
		);

		if (!status.nModified) {
			hud.showNotification(player, 'error', this.getErrorMessage(from), true);
			throw new SilentError('insufficient funds');
		}

		this.updatePlayer(player, {
			[from]: player.money[from] - sum,
			[to]: player.money[to] + sum
		});

		this.logOperation(player.dbId, from, sum, note);
	}

	updatePlayer(player: Player, money: Partial<PlayerMoney>) {
		player.money = { ...player.money, ...money };
		hud.updateMoney(player.mp, player.money);
	}

	private async updateInDb(userId: string, type: PaymentType, sum: number) {
		let status;

		if (type !== 'points') {
			status = await CharModel.updateOne(
				sum < 0 ? { _id: userId, [`money.${type}`]: { $gt: -sum - 1 } } : { _id: userId },
				{ $inc: { [`money.${type}`]: sum } }
			);
		} else {
			status = await UserModel.updateOne(
				sum < 0 ? { _id: userId, donate: { $gt: -sum - 1 } } : { _id: userId },
				{ $inc: { donate: sum } }
			);
		}

		return !!status?.nModified;
	}

	private logOperation(user: string, payment: PaymentType, sum: number, note: string) {
		logs.create('money', {
			recipient: user,
			payment,
			sum,
			note
		});
	}

	private getErrorMessage(payment: PaymentType) {
		switch (payment) {
			case 'points':
				return "Недостаточно STREETpoint'ов";
			case 'cash':
				return 'Недостаточно наличных';

			default:
				return 'Недостаточно банковских средств';
		}
	}
}

export default new Money();
