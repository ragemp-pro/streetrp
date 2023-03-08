import FactionModel from 'models/Faction';
import money from 'helpers/money';

class FactionMoney {
	private balance: number;

	private faction: string;

	constructor(faction: string) {
		this.faction = faction;
		this.balance = 0;
	}

	get current() {
		return this.balance;
	}

	set current(amount: number) {
		this.balance = amount;
	}

	async add(player: Player, amount: number) {
		if (amount <= 0) throw new SilentError('wrong amount');

		await money.change(player, 'bank', -amount, 'add faction money');
		await this.changeBalance(amount);
	}

	async withdraw(player: Player, amount: number) {
		if (amount <= 0) throw new SilentError('wrong amount');

		await this.changeBalance(-amount);
		await money.change(player, 'bank', amount, 'get faction money');
	}

	async changeBalance(amount: number) {
		if (this.balance + amount < 0) throw new SilentError('wrong amount');

		await FactionModel.findOneAndUpdate(
			{ name: this.faction },
			{ $inc: { money: amount } }
		);
		this.balance += amount;
	}
}

export default FactionMoney;
