import cryptoRandomString from 'crypto-random-string';
import CharModel from 'models/Character';
import money from 'helpers/money';
import tasks from 'awards/tasks';
import houseTax from 'house/tax';
import businessTax from 'business/tax';
import Service from './service';

const comission = 2;
const prices = {
	account: 3000
};

class Bank extends Service {
	constructor() {
		super('bank', { name: 'Банк', model: 500, color: 2, scale: 0.85 });
	}

	protected subscribeToEvents() {
		mp.events.subscribe({
			'Bank-CreateAccount': this.createAccount.bind(this),
			'Bank-CashOut': this.cashOut.bind(this),
			'Bank-Replenish': this.replenishAccount.bind(this),
			'Bank-Transfer': this.transferMoney.bind(this),
			'Bank-PayHouse': this.payForHouse.bind(this),
			'Bank-PayBusiness': this.payForBusiness.bind(this)
		});
	}

	onKeyPress(player: Player) {
		if (player.mp.vehicle) return;

		player.callEvent('Bank-ShowMenu', [player.bankAccount, prices, comission]);
	}

	private async createAccount(player: Player, custom?: string) {
		if (player.bankAccount) return mp.events.reject('Вы уже открыли счет');

		if (custom) {
			const isExists = await this.checkExists(custom);

			if (isExists) return mp.events.reject('Данный банковский счет уже зарегистрирован');

			await money.change(player, 'points', -prices.account, 'custom bank account');
		}

		const account = custom || (await this.generateAccount());

		await CharModel.findByIdAndUpdate(player.dbId, { $set: { bankAccount: account } });
		player.bankAccount = account;

		return account;
	}

	private async generateAccount() {
		let num: string;

		do {
			const str = cryptoRandomString({ type: 'numeric', length: 6 });
			const isExists = await this.checkExists(str);

			if (!isExists) num = str;
		} while (!num);

		return num;
	}

	private async checkExists(account: string) {
		const count = await CharModel.findOne({ bankAccount: account }).countDocuments();

		return count > 0;
	}

	private async cashOut(player: Player, sum: number) {
		if (!player.bankAccount) {
			return mp.events.reject('Для начала оформите банковский счет');
		}

		await money.exchange(player, 'bank', 'cash', sum, 'cash out');
	}

	private async replenishAccount(player: Player, sum: number) {
		if (!player.bankAccount) {
			return mp.events.reject('Для начала оформите банковский счет');
		}

		await money.exchange(player, 'cash', 'bank', sum, 'replenish bank');
		await tasks.implement(player, 'bank_replenish');
	}

	private async transferMoney(player: Player, account: string, value: any) {
		const user = await CharModel.findOne({ bankAccount: account })
			.select({ _id: 1 })
			.lean();

		if (!user) return mp.events.reject('Указанный счет не зарегистрирован');

		const sum = parseInt(value, 10);
		const sumWithComission = sum + Math.floor(sum / 100) * comission;

		if (sumWithComission <= 0) throw new SilentError('wrong sum');

		await money.change(player, 'bank', -sumWithComission, `transfer to ${user._id}`);
		await money.changeById(user._id, 'bank', sum, `transfer from ${player.dbId}`);
	}

	private async payForHouse(player: Player, house: number, days: number) {
		await houseTax.pay(player, house, days);
		await tasks.implement(player, 'house_tax');
	}

	private async payForBusiness(player: Player, days: number) {
		await businessTax.pay(player, player.businesses[0], days);
	}
}

const service = new Bank();
