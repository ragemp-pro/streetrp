import moment from 'moment';
import UserModel from 'models/User';
import chat from 'basic/chat';
import permissions from './permissions';
import journal from './journal';

type BanData = {
	admin: string;
	reason: string;
	expires: string;
	permanent: boolean;
};

class Ban {
	constructor() {
		mp.events.subscribe({
			'Admin-Ban': this.banPlayer.bind(this),
			'Admin-Unban': this.unbanPlayer.bind(this)
		});
	}

	isValid(user: UserModel) {
		const { ban: data } = user;

		if (!data) return false;

		return data.permanent || moment().diff(data.expires, 'minutes') < 0;
	}

	getExpiresDate(data: BanData) {
		return data.permanent ? 'Никогда' : moment(data.expires).format('DD.MM.YYYY HH:mm');
	}

	private async banPlayer(admin: Player, userId: string, term: string, reason: string) {
		if (!permissions.hasPermission(admin, 'admin')) return;

		const target = mp.players.getByDbId(userId);
		if (!target) return mp.events.reject('Игрок не в сети');

		if (this.getHoursAmount(term) > 6 && !permissions.hasPermission(admin, 'gm')) {
			return mp.events.reject('Максимальный срок - 6 часов');
		}

		await UserModel.findByIdAndUpdate(target.account, {
			$set: { ban: { admin: admin.dbId, reason, expires: term, permanent: false } }
		}).lean();

		journal.recordAction(
			admin,
			'ban',
			`${target.getName()} | ${reason} | ${moment(term).format()}`,
			target.dbId
		);
		chat.sendSystem(`${admin.getName()} забанил ${target.getName()} (${reason})`);

		target.mp.kick(`${reason}`);
	}

	private async unbanPlayer(admin: Player, email: string) {
		if (!permissions.hasPermission(admin, 'gm')) {
			return mp.events.reject('Недостаточно прав!');
		}

		const user = await UserModel.findByIdAndUpdate(
			{
				email,
				'ban.permanent': !permissions.hasPermission(admin, 'owner') && { $ne: true }
			},
			{ $set: { ban: null } }
		);
		if (!user) return mp.events.reject('Игрок не найден');

		journal.recordAction(admin, 'unban', email, user.character.toString());
	}

	private getHoursAmount(date: string) {
		return moment(date).diff(moment(), 'hours');
	}
}

export default new Ban();
