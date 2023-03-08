import { compare } from 'utils/encryption';
import UserModel from 'models/User';
import hud from 'helpers/hud';
import players from 'helpers/players';
import ban from 'admin/ban';
import playerCtrl from 'player';
import token from './token';
import logger from 'utils/logger';

class Login {
	constructor() {
		mp.events.subscribe(
			{
				'Auth-SignIn': this.signIn.bind(this),
				'Auth-SignInWithCode': this.signInWithCode.bind(this)
			},
			false
		);

		mp.events.subscribeToDefault(
			{
				playerReady: (player: Player) => {
					player.callEvent('Auth-ShowMenu')
				}
			},
			false
		);
	}

	private isRecognizedDevice(player: PlayerMp, serial: string, social: string) {
		return player.socialClub === social && player.serial === serial;
	}

	private async signIn(player: Player, email: string, password: string) {
		const user = await UserModel.findOne({ email });
		const error = await this.checkData(user, password);

		if (error) return Promise.reject(error);
		if (mp.players.getByDbId(user.character)) return;

		if (ban.isValid(user)) {
			hud.showNotification(
				player,
				'error',
				`Вас забанили, по причине ${
					user.ban.reason
				}. Срок блокировки: ${ban.getExpiresDate(user.ban)}.`,
				true
			);
			throw new SilentError('user is blocked');
		}

		if (!this.isRecognizedDevice(player.mp, user.serial, user.socialName)) {
			await token.create('login', email);
			return Promise.reject({ field: 'email', confirm: true });
		}

		await this.loadAccount(player, user);
	}

	private async signInWithCode(player: Player, email: string, code: string) {
		const user = await UserModel.findOne({ email });
		const isValidCode = await token.isValid(email, 'login', code);

		if (!user || !isValidCode) throw new SilentError('auth token is invalid');

		user.serial = player.mp.serial;
		user.socialName = player.mp.socialClub;

		await this.loadAccount(player, user);
	}

	private async checkData(user: UserModel, password: string) {
		if (!user) return { field: 'email', message: 'Аккаунт не найден' };

		const isCorrectPass = await compare(password, user.password);

		if (!isCorrectPass || mp.players.getByDbId(user._id)) {
			return { field: 'password', message: 'Неверный пароль' };
		}
	}

	private async loadAccount(player: Player, user: UserModel) {
		await user.populate({ path: 'character' }).execPopulate();
		await playerCtrl.load(player, user);

		user.loginAt = new Date().toISOString();
		if (!user.ip.includes(player.mp.ip)) user.ip.push(player.mp.ip);
		await user.save();
		await (user.character as any).save();

		players.authorize(player);
	}
}

const login = new Login();
