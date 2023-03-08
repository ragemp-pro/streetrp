import money from 'helpers/money';
import CharModel from 'models/Character';
import playerInventory from 'player/inventory';
import playerLicenses from 'player/licenses';

const moneyItems = {
	'10k': 10000,
	'50k': 50000,
	'200k': 200000,
	'500k': 500000,
	'2kk': 2000000,
	'10kk': 10000000
};

const prices = {
	'10k': 100,
	'50k': 500,
	'200k': 2000,
	'500k': 5000,
	'2kk': 20000,
	'10kk': 100000,
	vehicle_slot: 800,
	backpack: 1500,
	military_id: 1500
};

class Donation {
	constructor() {
		mp.events.subscribe({
			'Donation-GetPrices': () => prices,
			'Donation-Buy': this.buyItem.bind(this)
		});
	}

	private async buyItem(player: Player, item: string) {
		const price = prices[item];
		if (!price) throw new SilentError('unknown item');

		switch (item) {
			case 'vehicle_slot':
				await this.addVehicleSlot(player);
				break;
			case 'backpack':
				await this.giveBackpack(player);
				break;
			case 'military_id':
				await this.buyLicense(player, 'military', price);
				break;
			default:
				await this.giveMoney(player, item);
				break;
		}
	}

	private async addVehicleSlot(player: Player) {
		await money.change(player, 'points', -prices.vehicle_slot, 'vehicle slot');

		await CharModel.findByIdAndUpdate(player.dbId, { $inc: { vehicleSlots: 1 } });
		player.vehicleSlots += 1;
	}

	private async giveBackpack(player: Player) {
		const backpack = { name: 'backpack_large', amount: 1 };

		await playerInventory.checkEnoughSlots(player, [backpack]);

		await money.change(player, 'points', -prices.backpack, 'large backpack');
		await playerInventory.addItem(player, backpack);
	}

	private async giveMoney(player: Player, item: string) {
		const amount = moneyItems[item];
		if (!amount) throw new SilentError('wrong amount');

		await money.change(player, 'points', -prices[item], 'buy money');
		await money.change(player, 'bank', amount, 'donation');
	}

	private async buyLicense(player: Player, name: string, price: number) {
		if (playerLicenses.hasLicense(player, name as any)) {
			return mp.events.reject('Вы уже приобрели данный товар ранее');
		}

		await money.change(player, 'points', -price, 'buy donate license');
		await playerLicenses.give(player, name);
	}
}

const donation = new Donation();
