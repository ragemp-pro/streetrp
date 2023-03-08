import { encrypt } from 'utils/encryption';
import UserModel from 'models/User';
import token from './token';

type ResetData = {
	email: string;
	password: string;
	code: string;
};

class Reset {
	constructor() {
		mp.events.subscribe(
			{
				'Auth-ResetPassword': this.confirm.bind(this),
				'Auth-GetResetCode': this.sendCode
			},
			false
		);
	}

	private async confirm(player: Player, data: ResetData) {
		const isValidCode = await token.isValid(data.email, 'reset', data.code);

		if (!isValidCode)
			return Promise.reject({
				field: 'code',
				message: 'Неверный код'
			});

		const password = await encrypt(data.password);

		await UserModel.findOneAndUpdate({ email: data.email }, { $set: { password } });
	}

	private async sendCode(player: Player, email: string) {
		const user = await UserModel.findOne({ email }).countDocuments();

		if (!user) throw new SilentError("user doesn't exists");

		token.create('reset', email);
	}
}

const reset = new Reset();
