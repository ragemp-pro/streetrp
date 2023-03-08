import VehicleShop from './shop';

const items = [
  'bmx',
  'cruiser',
  'fixter',
  'scorcher',
  'tribike3',
  'faggio',
  'enduro',
  'diablous',
  'chimera',
  'avarus',
  'carbonrs',
  'double',
  'bati',
  'bati2',
  'akuma',
  'esskey',
  'diablous2',
  'defiler',
  'cliffhanger',
  'daemon',
  'deathbike',
  'deathbike2'
];

class BikeShop extends VehicleShop {
	constructor() {
		super('bikeshop', { name: 'Мотосалон', model: 661, color: 1, scale: 1 }, items);
	}

	protected async canBuy(player: Player) {
		await super.canBuy(player);

		if (!player.hasLicense('motorcycle')) {
			return mp.events.reject('У вас нет прав категории A');
		}
	}
}

const shop = new BikeShop();
