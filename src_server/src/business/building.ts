import entities, { Entity } from './entities';
import owning from './owning';
import businessCtrl from './index';

class BusinessBuilding {
	create(data: Entity) {
		const { position } = data;

		mp.colshapes.create(
			position,
			1,
			{
				onKeyPress: businessCtrl.showMenu
			},
			{ data: entities.count }
		);
		mp.markers.new(29, new mp.Vector3(position.x, position.y, position.z), 0.75, {
			color: [0, 255, 0, 100],
			visible: true
		});

		return {
			blip: !data.owner ? this.createBlip(data) : null
		};
	}

	toggleBlip(entity: Entity, player?: Player) {
		if (entity.owner && entity.blip) {
			entity.blip.destroy();
			entity.blip = null;
		} else if (!entity.owner) {
			entity.blip = this.createBlip(entity);
		}

		if (owning.isOwner(player, entity.owner)) this.createBlipForPlayer(player, entity);
		else if (player) mp.blips.delete(player, `Бизнес №${entity.index}`);
	}

	createBlipForPlayer(player: Player, entity: Entity) {
		mp.blips.createForPlayer(
			player,
			entity.position,
			{
				model: 108,
				name: 'Ваш бизнес',
				color: 3,
				scale: 0.85
			},
			`Бизнес №${entity.index}`
		);
	}

	private createBlip(entity: Entity) {
		return mp.blips.create(entity.position, {
			name: 'Бизнес',
			model: 108,
			color: 2,
			scale: 0.7
		});
	}
}

export default new BusinessBuilding();
