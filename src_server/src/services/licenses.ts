import money from 'helpers/money';
import playerLicenses from 'player/licenses';
import Service from './service';

const prices = {
	car: 1500,
	motorcycle: 3000,
	boat: 5000,
	air: 10000,
	weapon: 18000,
	fishing: 10000,
	business: 10000
};
const updatePercent = 50;

class Licenses extends Service {
	constructor() {
		super('licenses', { name: 'Мэрия', model: 419, color: 37, scale: 1.2 });
	}

	protected subscribeToEvents() {
		mp.events.subscribe({
			'Licenses-Buy': this.buy.bind(this)
		});
	}

	onKeyPress(player: Player) {
		if (player.mp.vehicle) return;

		player.callEvent('Licenses-ShowMenu', [prices, updatePercent, player.licenses]);
	}

	private getPrice(player: Player, license: string) {
		const price = prices[license];
		const isExists = player.hasLicense(license);

		return isExists ? price - (price / 100) * updatePercent : price;
	}

	private async buy(player: Player, license: string, payment: PaymentType) {
		const price = this.getPrice(player, license);

		if (!price) throw new SilentError('wrong license');

		await money.change(player, payment, -price, 'licenses');
		await playerLicenses.give(player, license);
	}
}

const service = new Licenses();
