import cryptoRandomString from 'crypto-random-string';
import PromoModel from 'models/Promo';
import UserModel from 'models/User';
import money from 'helpers/money';

class Referral {
	readonly confirmLevel = 2;

	private income = 3000;

	private bonus = 5000;

	constructor() {
		mp.events.subscribe({
			'Referral-UseCode': this.useCode.bind(this),
			'Referral-GetInfo': this.getInfo.bind(this)
		});
	}

	async createCode(
		userId: string,
		income = this.income,
		bonus = this.bonus,
		customCode?: string
	) {
		const code = customCode || (await this.generateCode());
		const data = {
			owner: userId,
			code: code.toUpperCase(),
			income,
			bonus
		};

		await PromoModel.create(data);
	}

	async confirm(player: Player, code?: PromoModel) {
		const wasAwarded = await UserModel.findOne({
			_id: player.account,
			referralAward: true
		}).countDocuments();
		if (wasAwarded) return;

		const promo =
			code ||
			(await PromoModel.findOne({ used: player.account }).select({ used: 0 }).lean());

		if (!promo) return;

		await money.change(player, 'bank', promo.bonus, 'referral bonus');
		await UserModel.findByIdAndUpdate(player.account, { $set: { referralAward: true } });

		if (promo.owner) {
			const user = await UserModel.findById(promo.owner).select({ character: 1 }).lean();
			await money.changeById(user?.character, 'bank', promo.income, 'referral income');
		}
	}

	private async useCode(player: Player, code: string) {
		const promo = await PromoModel.findOne({ code, owner: { $ne: player.account } });

		if (!promo) return mp.events.reject('Неверный промо-код');

		const alreadyUsed = await PromoModel.findOne({
			used: player.account
		}).countDocuments();
		if (alreadyUsed) return mp.events.reject('Вы уже использовали промо-код');

		promo.used.push(player.account);
		await promo.save();

		if (player.level >= this.confirmLevel) {
			this.confirm(player, promo);
		}
	}

	private async generateCode() {
		let code: string;

		do {
			const str = cryptoRandomString({ type: 'numeric', length: 6 });
			const isExists = await PromoModel.findOne({ code: str }).countDocuments();

			if (!isExists) code = str;
		} while (!code);

		return code;
	}

	private async getInfo(player: Player) {
		const promo = await PromoModel.findOne({ owner: player.account }).lean();
		const confirmed = await UserModel.find({
			_id: { $in: promo.used },
			referralAward: { $ne: false }
		}).countDocuments();

		return {
			code: promo.code,
			income: promo.income,
			bonus: promo.bonus,
			referrals: {
				confirmed,
				total: promo.used.length
			},
			confirmLevel: this.confirmLevel
		};
	}
}

export default new Referral();
