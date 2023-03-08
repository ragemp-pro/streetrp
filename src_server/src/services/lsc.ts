import hud from 'helpers/hud';
import money from 'helpers/money';
import tasks from 'awards/tasks';
import vehicleTuning, { Tuning } from 'vehicle/tuning';
import vehicleDamage from 'vehicle/health';
import vehicleOwning from 'vehicle/owning';
import vehicleList from 'data/vehicles.json';
import Service from './service';

type Product = {
	name: string;
	model: number;
	color?: RGBA;
};

class LSC extends Service {
	private prices: { [name: string]: number[] };

	private multipliers: { [name: string]: number };

	constructor() {
		super('lscustoms', { name: 'СТО', model: 72, color: 4 }, 2);

		this.prices = {
			repair: [300],
			engine_sound: [3000],
			engine: [500, 1300, 2000, 4000, 5000],
			transmission: [300, 800, 1500, 2500],
			brakes: [300, 600, 1200, 2000],
			turbo: [500, 10000],
			suspension: [200, 800, 1500, 2000, 2200],
			horn: [700],
			tint: [200, 800, 500, 400, 450, 300],
			lights: [1500],
			plate: [100, 600, 500, 350, 350, 500],
			neon: [250, 3000],
			paint: [3000, 2500, 1200, 800],
			rims: [4500],
			spoiler: [1200],
			sideskirt: [800],
			exhaust: [1500],
			hood: [3000],
			roof: [3000],
			frame: [1500],
			grille: [700],
			livery: [3000],
			front_bumper: [3000],
			rear_bumper: [3000]
		};

		this.multipliers = {
			engine: 3,
			transmission: 3,
			brakes: 3,
			turbo: 3,
			suspension: 3,
			lights: 0.5,
			sideskirt: 0.5,
			paint: 0.5,
			spoiler: 0.5,
			exhaust: 0.5,
			hood: 0.5,
			roof: 0.5,
			frame: 0.5,
			grille: 0.5,
			livery: 0.5,
			front_bumper: 0.5,
			rear_bumper: 0.5
		};
	}

	protected subscribeToEvents() {
		mp.events.subscribe({
			'LSC-Buy': this.buy.bind(this)
		});
	}

	onKeyPress(player: Player) {
		const { vehicle } = player.mp;

		if (!vehicleOwning.isRealOwner(vehicle, player)) {
			return hud.showNotification(player, 'error', 'Сядьте в личное ТС');
		}

		player.callEvent('LSC-ShowMenu', [
			mp.colshapes.getData(player.mp),
			this.getPricesWithMargin(vehicle)
		]);
	}

	private getPricesWithMargin(vehicle: VehicleMp) {
		const prices: { [name: string]: number[] } = {};

		Object.entries(this.prices).forEach(([name, items]) => {
			prices[name] = items.map((_, index) =>
				this.getPrice(vehicle, { name, model: index })
			);
		});

		return prices;
	}

	private getPrice(vehicle: VehicleMp, { name, model }: Product) {
		if (!this.prices[name]) throw new SilentError('wrong item name');

		const price = this.prices[name][model] ?? this.prices[name][0];
		const vehiclePrice = vehicleList[vehicle.name]?.price ?? 0;
		const margin = (vehiclePrice / 100) * (this.multipliers[name] ?? 0);

		return price + margin;
	}

	private async buy(player: Player, product: Product, payment: PaymentType) {
		const { vehicle } = player.mp;

		if (!vehicleOwning.isRealOwner(vehicle, player)) {
			throw new SilentError('is not vehicle owner');
		}

		await money.change(player, payment, -this.getPrice(vehicle, product), 'LSC');

		if (product.name === 'repair') {
			vehicleDamage.repair(vehicle);
			await tasks.implement(player, 'repair_veh');
		} else {
			await this.setItem(vehicle, product);
			await tasks.implement(player, 'tuning');
		}
	}

	private async setItem(vehicle: VehicleMp, product: Product) {
		const { name, model, color } = product;
		const tuning = vehicleTuning.get(vehicle);

		if (name === 'paint') this.setPaint(tuning, product);
		else if (name === 'neon') this.installNeon(tuning, model && (color as RGBA));
		else if (name === 'rims') tuning.wheels[name] = model - 1;
		else tuning[name] = model - 1;

		await vehicleTuning.update(vehicle, tuning);
	}

	private setPaint(tuning: Tuning, params: Product) {
		const { model, color } = params;

		switch (model) {
			case 0:
				tuning.paint.primary = color as RGBA;
				break;
			case 1:
				tuning.paint.secondary = color as RGBA;
				break;
			case 2:
				// eslint-disable-next-line prefer-destructuring
				tuning.wheels.color = color[3];
				break;
			case 3:
				tuning.wheels.smoke = this.getRGBfromRGBA(color as RGBA);
				break;
			default:
				break;
		}
	}

	private installNeon(tuning: Tuning, color?: RGBA) {
		tuning.neon = color ? this.getRGBfromRGBA(color) : [0, 0, 0];
	}

	private getRGBfromRGBA(color: RGBA) {
		return color.slice(0, 3) as RGB;
	}
}

const service = new LSC();
