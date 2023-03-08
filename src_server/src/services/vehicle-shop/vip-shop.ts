import VehicleShop from './shop';

const vehicles = {
	amggtr: 18000,
	amggt63s: 14000,
	supraa90: 5000,
	b63s: 4000,
	gls63: 10000,
	fct: 6000,
	fgt: 6000,
	boss302: 6000,
	apriora: 4000,
	jzx100: 5000,
	rt70: 10000,
	btsupra94: 10000,
	bmeclipse95: 10000,
	rx7: 3000,
	silvias15: 6500,
	e63brabus: 7000,
	bmwm8: 13000,
	chiron: 60000,
	amgone: 40000,
	mvisiongt: 50000,
	rmodbugatti: 100000,
	e34: 500,
	z419: 5000,
	brabus850: 8000,
	m3f80: 8000,
	slsamg: 15000,
	z3m: 1000,
	XPERIA38: 8000
};

class VipShop extends VehicleShop {
	constructor() {
		super(
			'vip_shop',
			{ name: 'VIP салон', model: 824, color: 5 },
			Object.keys(vehicles),
			'points'
		);
	}

	protected getPrices(): { [p: string]: number } {
		return vehicles;
	}

	protected getVehiclePrice(model: string): number {
		return vehicles[model] || 0;
	}

	protected async canBuy(player: Player) {
		await super.canBuy(player);

		if (!player.hasLicense('car')) {
			return mp.events.reject('У вас нет прав категории B');
		}
	}
}

const shop = new VipShop();
