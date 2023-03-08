import VehicleShop from './shop';

type CarShopData = {
	id: string;
	vehicles: string[];
	blip: BlipsOptions;
};

const shops: CarShopData[] = [
	{
		id: 'cheap_carshop',
		vehicles: [
      'brioso2',
      'asbo',
      'club',
      'asea',
      'emperor2',
      'premier',
      'cheburek',
      'tornado3',
      'journey',
      'surfer2',
      'asterope',
      'blista',
      'fugitive',
      'regina',
      'ingot',
		],
		blip: {
			name: 'Автосалон (эконом)',
			model: 225,
			color: 3
		}
	},
	{
		id: 'mid_carshop',
		vehicles: [
      'hellion',
      'glendale',
      'brioso',
      'kanjo',
      'issi2',
      'oracle',
      'felon',
      'oracle2',
      'jackal',
      'sentinel',
      'zion',
      'blade',
      'buccaneer',
      'dukes',
      'warrener',
      'dubsta',
      'baller3',
      'rebla',
      'vstr',
		],
		blip: {
			name: 'Автосалон (средний)',
			model: 530,
			color: 48
		}
	},
	{
		id: 'premium_carshop',
		vehicles: [
      'schlagen',
      'zentorno',
      'bestiagts',
      'neon',
      'ninef',
      'jester',
      'infernus2',
      't20',
      'tempesta',
      'reaper',
      'coquette4',
      'osiris',
      'furia',
      'cheetah2',
      'entity2',
		],
		blip: {
			name: 'Автосалон (премиум)',
			model: 669,
			color: 50
		}
	}
];

class CarShop extends VehicleShop {
	constructor(data: CarShopData) {
		super(data.id, data.blip, data.vehicles);
	}

	protected async canBuy(player: Player) {
		await super.canBuy(player);

		if (!player.hasLicense('car')) {
			return mp.events.reject('У вас нет прав категории B');
		}
	}
}

shops.forEach((shop) => new CarShop(shop));
