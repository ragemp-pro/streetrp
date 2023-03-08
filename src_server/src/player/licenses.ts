import moment from 'moment';
import CharModel from 'models/Character';

const expirationDays = {
	car: 30,
	motorcycle: 30,
	boat: 30,
	air: 30,
	weapon: 30,
	med_physical: 30,
	med_mental: 30,
	business: 30,
	fishing: 30,
	military: 10000
};

type License = keyof typeof expirationDays;

class PlayerLicenses {
	hasLicense(player: Player, license: License) {
		return player.licenses[license] && !this.isExpired(player, license);
	}

	isExpired(player: Player, license: License) {
		const expiredAt = player.licenses[license];

		return moment().diff(expiredAt, 'days') > 0;
	}

	async give(player: Player, license: License | string) {
		const expiredAt = moment().add(expirationDays[license], 'days').toISOString();

		await CharModel.findByIdAndUpdate(player.dbId, {
			$set: { [`licenses.${license}`]: expiredAt }
		});

		player.licenses[license] = expiredAt;
	}

	async withdraw(player: Player, license: License) {
		await CharModel.findByIdAndUpdate(player.dbId, {
			$unset: { [`licenses.${license}`]: '' }
		});

		delete player.licenses[license];
	}
}

export default new PlayerLicenses();
