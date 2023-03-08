import money from 'helpers/money';
import hud from 'helpers/hud';
import tasks from 'awards/tasks';
import houses from 'data/houses.json';
import building from './building';
import tax from './tax';
import owning from './owning';
import entities, { Entity } from './entities';
import './trade';

class HouseController {
	constructor() {
		this.subscribeToEvents();
	}

	loadForPlayer(player: Player) {
		player.houses = [];

		entities.items.forEach((item) => {
			if (!owning.isOwner(player, item.owner)) return;

			mp.blips.createForPlayer(
				player,
				item.position,
				{
					model: 40,
					name: 'Ваш дом',
					color: 3,
					scale: 0.85
				},
				`Дом №${item.index}`
			);

			this.changePlayerData(player, item);
		});
	}

	changePlayerData(player: Player, house: Entity) {
		const vehicleSlots = houses[house.type].vehicles;

		if (owning.isOwner(player, house.owner)) {
			player.houses.push(house.index);
			player.vehicleSlots += vehicleSlots;
		} else {
			player.houses = player.houses.filter((item) => item !== house.index);
			player.vehicleSlots -= vehicleSlots;
		}
	}

	getPrice(house: Entity, owner = false) {
		const { price } = houses[house.type];

		return owner ? (price / 100) * 60 : price;
	}

	showMenu = async (player: Player) => {
		const house = entities.getItem(player);

		if (!house || player.mp.vehicle) return;

		const owner = await owning.getOwnerName(house.owner);

		player.callEvent('House-ShowMenu', {
			owner,
			type: house.type,
			locked: house.locked,
			paid: house.paid,
			price: this.getPrice(house, !!house.owner),
			tax: tax.getSumByType(house.type),
			index: mp.colshapes.getData(player.mp),
			isOwner: owning.isOwner(player, house.owner),
			entrance: building.isEntrance(player.mp, house.position),
			inventory: entities.getInventoryCapacity(house).slots,
			vehicles: houses[house.type].vehicles
		});
	};

	async withdraw(house: Entity) {
		const { owner: ownerId } = house;
		const player = mp.players.getByDbId(ownerId);

		await entities.reset(house);
		await money.changeById(ownerId, 'bank', this.getPrice(house, true), 'withdraw house');

		if (player) this.changePlayerData(player, house);

		building.toggleBlip(house, player);
	}

	checkCanBuy(player: Player) {
		let error;

		if (player.houses.length) error = 'Достигнут лимит на владение домами!';

		if (error) {
			hud.showNotification(player, 'error', error, true);
			throw new SilentError("user doesn't can buy house");
		}
	}

	private async trade(player: Player) {
		const house = entities.getItem(player);

		if (!house) throw new SilentError('house object does not exists');

		if (!owning.isOwner(player, house?.owner)) await this.buy(player, house);
		else await this.sell(player);

		this.changePlayerData(player, house);
		building.toggleBlip(house, player);
	}

	private async buy(player: Player, entity: Entity) {
		if (entity.owner) throw new SilentError('this house already has an owner');
		this.checkCanBuy(player);

		await money.change(player, 'bank', -this.getPrice(entity), 'house buy');

		await owning.setOwner(player, entity);
		await tasks.implement(player, 'buy_prop');
	}

	private async sell(player: Player) {
		const house = entities.getItem(player);

		if (!owning.isOwner(player, house?.owner)) throw new SilentError('is not owner');

		await money.change(player, 'bank', this.getPrice(house, true), 'house sell');
		await entities.reset(house);
	}

	private async toggleLock(player: Player) {
		const house = entities.getItem(player);

		if (!owning.isOwner(player, house?.owner)) throw new SilentError('access denied');

		await entities.update(house, { locked: !house.locked });

		return house.locked;
	}

	private subscribeToEvents() {
		mp.events.subscribe({
			'House-ToEnter': (player: Player) => {
				building.enter(player, entities.getItem(player));
			},
			'House-ToggleLock': this.toggleLock.bind(this),
			'House-Trade': this.trade.bind(this)
		});
	}
}

export default new HouseController();
