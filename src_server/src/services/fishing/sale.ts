import money from 'helpers/money';
import hud from 'helpers/hud';
import Service from '../service';

const prices = {
	perch: 950,
	eel: 1300,
	pike: 1050,
	trout: 1900,
	zander: 1300,
	catfish: 2500,
	salmon: 4000,
	sturgeon: 3000,
	stingray: 7000,
	tuna: 1500,
	fugu: 20000
};

class FishSale extends Service {
	constructor() {
		super('fish_sale', { name: 'Продажа рыбы', model: 356, color: 30 });
	}

	protected subscribeToEvents() {}

	onKeyPress(player: Player) {
		if (player.mp.vehicle) return;
		this.sellFish(player);
	}

	private async sellFish(player: Player) {
		let price = 0;
		player.inventory = player.inventory.filter((item) => {
			if (prices[item.name]) {
				price += Math.floor(prices[item.name] * item.amount);
				return false;
			}
			return true;
		});

		if (price <= 0) return;
		await money.change(player, 'cash', price, 'fish sale');
		hud.showNotification(player, 'success', `Вы успешно продали рыбу за ${price}$`, true);
	}
}

const service = new FishSale();
