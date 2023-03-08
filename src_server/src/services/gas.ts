import { isNumber } from 'lodash';
import money from 'helpers/money';
import tasks from 'awards/tasks';
import playerInventory from 'player/inventory';
import vehicleCtrl from 'vehicle';
import vehicleFuel from 'vehicle/fuel';
import Service from './service';

type Basket = {
	fuel: number;
	jerrycan: number;
	repair_kit: number;
};

const prices = {
	fuel: {
		diesel: 5,
		low: 10,
		mid: 15
	},
	jerrycan: 400,
	repair_kit: 600
};

class Gas extends Service {
	constructor() {
		super('gas', { name: 'АЗС', model: 361, color: 78, scale: 0.75 }, 5);
	}

	protected subscribeToEvents() {
		mp.events.subscribe({
			'Gas-Buy': this.buy.bind(this)
		});
	}

	onKeyPress(player: Player) {
		const fuelType = this.getFuelType(player.mp.vehicle);

		player.callEvent('Gas-ShowMenu', [
			fuelType,
			{ ...prices, fuel: this.getPricePerLiter(fuelType) }
		]);
	}

	private getPricePerLiter(type: string) {
		return prices.fuel[type] as number;
	}

	private getFullPrice(basket: Basket, fuelType: string) {
		let fullPrice = 0;

		Object.entries(basket).forEach(([product, count]) => {
			if (!prices[product] || !isNumber(count) || count < 0 || count > 10000)
				throw new SilentError('wrong product');

			const price =
				product === 'fuel' ? this.getPricePerLiter(fuelType) : prices[product];

			fullPrice += price * count;
		});

		return fullPrice;
	}

	private getFuelType(vehicle: VehicleMp) {
		return vehicleCtrl.getTypeData(vehicle?.name).fuel;
	}

	private checkInventorySlots(player: Player, basket: Basket) {
		const items = Object.entries(basket).map(([name, amount]) => ({ name, amount }));

		playerInventory.checkEnoughSlots(player, items);
	}

	private addToInventory(player: Player, basket: Basket) {
		Object.entries(basket).forEach(([name, amount]) => {
			if (name !== 'fuel' && amount) playerInventory.addItem(player, { name, amount });
		});
	}

	private async buy(player: Player, basket: Basket, payment: PaymentType) {
		const { vehicle } = player.mp;
		const price = this.getFullPrice(basket, this.getFuelType(vehicle));

		this.checkInventorySlots(player, basket);

		await money.change(player, payment, -price, 'gas');

		if (basket.fuel && vehicle && player.isDriver()) {
			vehicleFuel.fillUp(vehicle, basket.fuel);
			await tasks.implement(player, 'refuel');
		}

		this.addToInventory(player, basket);
	}
}

const service = new Gas();
