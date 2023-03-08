import houses from 'data/houses.json';
import inventory from './inventory';
import houseCtrl from './index';
import owning from './owning';
import entities, { Entity as House } from './entities';

class HouseBuilding {
	isEntrance(player: PlayerMp, coords: PositionEx) {
		const position = new mp.Vector3(coords.x, coords.y, coords.z);

		return player.dist(position) <= 3;
	}

	getExitPosition(data: House) {
		const { coords } = houses[data.type];

		return coords.location;
	}

	create(data: House) {
		const { coords } = houses[data.type];
		const dimension = 100 + data.index;

		this.createPassage(data.position);
		this.createPassage(this.getExitPosition(data), dimension);

		if (coords.inventory) this.createInventory(coords.inventory, dimension);

		return {
			dimension,
			blip: !data.owner ? this.createBlip(data) : null
		};
	}

	enter(player: Player, house: House) {
		if (!house || house.locked) throw new SilentError('the door is locked');

		const isEntrance = this.isEntrance(player.mp, house.position);

		player.tp(
			isEntrance ? this.getExitPosition(house) : house.position,
			90,
			isEntrance ? house.dimension : 0
		);
	}

	toggleBlip(house: House, player?: Player) {
		if (house.owner && house.blip) {
			house.blip.destroy();
			house.blip = null;
		} else if (!house.owner) {
			const blip = this.createBlip(house);

			house.blip = blip;
		}

		if (owning.isOwner(player, house.owner))
			mp.blips.createForPlayer(
				player,
				house.position,
				{
					model: 40,
					name: 'Ваш дом',
					color: 3,
					scale: 0.85
				},
				`Дом №${house.index}`
			);
		else if (player) mp.blips.delete(player, `Дом №${house.index}`);
	}

	private createInventory(position: PositionEx & { rotation: number }, dimension = 0) {
		const { x, y, z } = position;

		mp.colshapes.create(
			position,
			1,
			{
				onKeyPress: inventory.showMenu
			},
			{ dimension, data: entities.count }
		);
		mp.markers.new(1, new mp.Vector3(x, y, z - 1.2), 0.75, {
			dimension,
			color: [255, 219, 0, 100],
			visible: true
		});
	}

	private createPassage(position: PositionEx, dimension = 0) {
		mp.colshapes.create(
			position,
			1,
			{
				onKeyPress: houseCtrl.showMenu
			},
			{ dimension, data: entities.count }
		);
		mp.markers.new(2, new mp.Vector3(position.x, position.y, position.z), 1, {
			dimension,
			color: dimension ? [255, 255, 255, 120] : [255, 0, 156, 120],
			rotation: new mp.Vector3(180.0, 0.0, 0.0),
			visible: true
		});
	}

	private createBlip(house: House) {
		return mp.blips.create(house.position, {
			name: 'Дом',
			model: 40,
			color: 2,
			scale: 0.7
		});
	}
}

export default new HouseBuilding();
