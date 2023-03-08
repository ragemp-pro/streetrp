import moment from 'moment';
import cryptoRandomString from 'crypto-random-string';
import TokenModel from 'models/Token';
import mailer from 'utils/mailer';

class AuthToken {
	async isValid(email: string, type: string, token?: string) {
		const [data] = await TokenModel.find(token ? { email, type, token } : { email, type })
			.sort({ _id: -1 })
			.select({ expires: 1 })
			.lean();

		return !!data && moment().diff(data.expires, 'minutes') < 0;
	}

	async create(type: 'register' | 'login' | 'reset', email: string) {
		const isValidCurrentToken = await this.isValid(email, type);

		if (isValidCurrentToken) return;

		const token = cryptoRandomString({ type: 'distinguishable', length: 8 });

		await TokenModel.create({
			email,
			type,
			token,
			expires: moment().add(5, 'minutes').toISOString()
		});

		mailer.send(email, 'Введите код подтверждения', `Код подтверждения: ${token}`);

		// for debug
		console.log(`[DEBUG] Код подтверждения для почты (${email}) : ${token}`);
	}

	async clearExpired() {
		await TokenModel.deleteMany({
			expires: {
				$lt: moment().subtract(10, 'minutes').toISOString()
			}
		});
	}
}

export default new AuthToken();
