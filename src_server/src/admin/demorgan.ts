import moment from 'moment';
import chat from 'basic/chat';
import prison from 'basic/prison';
import permissions from './permissions';
import journal from './journal';

class AdminDemorgan {
	constructor() {
		mp.events.subscribe({
			'Admin-ToDemorgan': this.toDemorgan.bind(this),
			'Admin-ReleaseDemorgan': this.releasePlayer.bind(this)
		});
	}

	private async toDemorgan(admin: Player, userId: string, term: string, reason: string) {
		if (!permissions.hasPermission(admin, 'helper')) return;

		const minutes = this.getMinutesAmount(term);

		if (minutes > 4 * 60 && !permissions.hasPermission(admin, 'gm')) {
			return mp.events.reject('Максимальный срок - 4 часа');
		}

		const target = mp.players.getByDbId(userId);

		if (target) {
			await prison.imprisonPlayer(target, minutes, reason);

			journal.recordAction(
				admin,
				'demorgan',
				`${target.getName()} | ${reason} | ${minutes}min`,
				userId
			);
			chat.sendSystem(
				`${admin.getName()} посадил в тюрьму ${target.getName()} (${reason})`
			);
		}
	}

	private releasePlayer(admin: Player, userId: string) {
		if (!permissions.hasPermission(admin, 'gm')) {
			return mp.events.reject('Недостаточно прав!');
		}

		const target = mp.players.getByDbId(userId);

		if (target && prison.isImprisoned(target)) {
			prison.releasePlayer(target);

			journal.recordAction(admin, 'prison_release', target.getName(), userId);
		}
	}

	private getMinutesAmount(date: string) {
		return moment(date).diff(moment(), 'minutes');
	}
}

const demorgan = new AdminDemorgan();
