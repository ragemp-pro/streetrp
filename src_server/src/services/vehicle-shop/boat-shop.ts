import VehicleShop from './shop';

const items = ['dinghy', 'jetmax', 'seashark', 'speeder', 'toro', 'tropic2'];

class BoatShop extends VehicleShop {
	constructor() {
		super('boatshop', { name: 'Магазин лодок', model: 455, color: 60, scale: 1 }, items);
	}

	protected async canBuy(player: Player) {
		await super.canBuy(player);

		if (!player.hasLicense('boat')) {
			return mp.events.reject('У вас нет лицензии на водный транспорт');
		}
	}
}

const shop = new BoatShop();
