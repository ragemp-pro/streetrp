import { isNumber } from 'lodash';
import money from 'helpers/money';
import playerInventory from 'player/inventory';
import Service from './service';

type Product = {
	name: string;
	amount: number;
};

const prices = {
	burger: 130,
	donut: 75,
	chocolate: 30,
	soda: 10,
	cigarettes: 30,
	beer: 50,
	wine: 80,
	vodka: 120,
	whiskey: 200,
	flashlight: 400,
	lockpick: 100,
	bandage: 100,
	medkit: 700,
	sack: 150,
	cable_tie: 250,
	backpack_small: 3500,
	backpack_medium: 15500,
	rod: 5000,
	fish_bait: 350
};

class Supermarket extends Service {
	constructor() {
		super('supermarket', { name: '24/7', model: 52, color: 81 });
	}

	protected subscribeToEvents() {
		mp.events.subscribe({
			'Supermarket-Buy': this.buy.bind(this)
		});
	}

	onKeyPress(player: Player) {
		if (player.mp.vehicle) return;

		player.callEvent('Supermarket-ShowMenu', prices);
	}

	private getPrice(product: Product) {
		const { name, amount } = product;

		if (!prices[name] || !isNumber(amount) || amount <= 0 || amount > 10000) {
			throw new SilentError('wrong product');
		}

		return prices[name] * amount;
	}

	private async buy(player: Player, product: Product, payment: PaymentType) {
		const price = this.getPrice(product);

		playerInventory.checkEnoughSlots(player, [product]);

		await money.change(player, payment, -price, 'supermarket');
		await playerInventory.addItem(player, product);
	}
}

const service = new Supermarket();