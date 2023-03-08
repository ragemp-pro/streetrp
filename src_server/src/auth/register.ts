import { trim, capitalize } from 'lodash';
import { encrypt } from 'utils/encryption';
import UserModel from 'models/User';
import CharModel from 'models/Character';
import referral from 'awards/referral';
import token from './token';

type UserData = {
	email: string;
	password: string;
	firstName: string;
	lastName: string;
	code: string;
};

class Register {
	constructor() {
		mp.events.subscribe(
			{
				'Auth-SignUp': this.createAccount.bind(this),
				'Auth-GetRegisterCode': this.sendCode
			},
			false
		);
	}

	private async createAccount({ mp: player }: Player, data: UserData) {
		const error = await this.checkData(player.socialClub, data);

		if (error) return Promise.reject(error);

		const { email, password, ...characterData } = await this.prepareData(data);

		const character = await CharModel.create({ ...characterData, money: { cash: 4500 } });
		const user = await UserModel.create({
			email,
			password,
			socialName: player.socialClub,
			ip: [player.ip],
			serial: player.serial,
			character: character._id
		});
		await referral.createCode(user._id);
	}

	async sendCode(player: Player, email: string) {
		const user = await UserModel.findOne({ email }).countDocuments();
		if (user) throw new SilentError('email is already exists');

		token.create('register', email);
	}

	private async checkData(
		socialName: string,
		data: UserData
	): Promise<{ field: string; message: string }> {
		const user = await UserModel.findOne({
			$or: [{ socialName }, { email: data.email }]
		})
			.select({ email: 1, socialName: 1 })
			.lean();

		if (user?.socialName === socialName)
			return {
				field: 'email',
				message: 'Вы уже регистрировали аккаунт'
			};

		if (user?.email === data.email)
			return {
				field: 'email',
				message: 'E-mail занят'
			};

		const characterExists = await CharModel.findOne({
			firstName: data.firstName,
			lastName: data.lastName
		}).countDocuments();

		if (characterExists)
			return {
				field: 'lastName',
				message: 'Эта комбинация имени и фамилии занята'
			};

		const isValidCode = await token.isValid(data.email, 'register', data.code);

		if (!isValidCode)
			return {
				field: 'code',
				message: 'Неверный код'
			};
	}

	private async prepareData(data: UserData) {
		const email = trim(data.email).toLowerCase();
		const password = await encrypt(trim(data.password));
		const firstName = capitalize(trim(data.firstName));
		const lastName = capitalize(trim(data.lastName));

		return {
			email,
			password,
			firstName,
			lastName
		};
	}
}

const register = new Register();
