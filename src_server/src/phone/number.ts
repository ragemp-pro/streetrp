import cryptoRandomString from 'crypto-random-string';
import CharModel from 'models/Character';
import money from 'helpers/money';

const prices = {
	random: 500,
	custom: 2000
};

class PhoneNumber {
	constructor() {
		mp.events.subscribe({
			'Phone-GetNumberData': this.getData.bind(this),
			'Phone-BuyNumber': this.buy.bind(this)
		});
	}

	private async buy(player: Player, value?: string) {
		if (value) {
			const isExists = await this.checkExists(value);

			if (isExists) return mp.events.reject('Этот номер уже зарегистрирован');
		}

		await money.change(
			player,
			value ? 'points' : 'bank',
			-(value ? prices.custom : prices.random),
			'phone number'
		);

		const num = value || (await this.generate());

		await this.setNumber(player, num);

		return num;
	}

	private async setNumber(player: Player, num: string) {
		await CharModel.findByIdAndUpdate(player.dbId, { $set: { 'phone.number': num } });

		player.phone.number = num;
	}

	private async checkExists(num: string) {
		const count = await CharModel.findOne({ 'phone.number': num }).countDocuments();

		return count > 0;
	}

	private async generate() {
		let num: string;

		do {
			const str = cryptoRandomString({ type: 'numeric', length: 6 });
			const isExists = await this.checkExists(str);

			if (!isExists) num = str;
		} while (!num);

		return num;
	}

	private getData(player: Player) {
		return { prices, phoneNumber: player.phone.number };
	}
}

export default new PhoneNumber();
