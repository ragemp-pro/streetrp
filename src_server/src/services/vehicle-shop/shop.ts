import money from 'helpers/money';
import tasks from 'awards/tasks';
import vehicleCreator, { Builder } from 'vehicle/creator';
import vehicleList from 'data/vehicles.json';
import Service from '../service';

const shops: { [name: string]: VehicleShop } = {};

class VehicleShop extends Service {
	private vehicles: string[];

	private payment: PaymentType;

	constructor(
		name: string,
		blip: BlipsOptions,
		vehicles: string[],
		payment: PaymentType = 'bank'
	) {
		super(name, blip);

		this.vehicles = vehicles;
		this.payment = payment;

		shops[name] = this;
	}

	protected subscribeToEvents() {
		mp.events.subscribe({
			'VehicleShop-Buy': async (
				player: Player,
				type: string,
				model: string,
				color: RGB
			) => {
				const shop = shops[type];

				await shop.buy(player, model, color);
			},
			'VehicleShop-Exit': (player: Player) => {
				player.togglePrivateDimension();
			}
		});
	}

	onKeyPress(player: Player) {
		if (player.mp.vehicle) return;

		player.togglePrivateDimension();

		player.callEvent('VehicleShop-ShowMenu', [this.name, this.getPrices()]);
	}

	protected getPrices() {
		const prices: { [name: string]: number } = {};

		this.vehicles.forEach((name) => {
			prices[name] = vehicleList[name].price;
		});

		return prices;
	}

	protected getPriceOfModel(model: string) {
		return this.vehicles.includes(model) ? vehicleList[model]?.price : 0;
	}

	protected async canBuy(player: Player) {
		if (!player.isEnoughVehicleSlots()) {
			return mp.events.reject('Недостаточно мест для новых ТС');
		}
	}

	async buy(player: Player, model: string, color: RGB) {
		await this.canBuy(player);

		const price = this.getPriceOfModel(model);
		if (!price) throw new SilentError('wrong vehicle');

		await money.change(player, this.payment, -price, `${this.name} buy`);

		const builder = new Builder(model, { x: 0, y: 0, z: 0 }, 90, 1000);
		builder.installTuning({
			paint: {
				primary: [...color, 0] as RGBA,
				secondary: [...color, 0] as RGBA
			}
		});

		const vehicle = await vehicleCreator.buildForPlayer(player, builder);
		mp.vehicles.delete(vehicle);

		await tasks.implement(player, 'buy_car');
	}
}

export default VehicleShop;
