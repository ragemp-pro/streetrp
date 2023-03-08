import CharModel from 'models/Character';
import entites, { Entity } from './entities';

class BusinessOwning {
	isOwner(player: Player, owner: string) {
		return player?.dbId && owner && player.dbId === owner;
	}

	async getOwnerName(owner: string) {
		const player = mp.players.getByDbId(owner);
		let name = player && player.getName();

		if (!name) {
			const user = await CharModel.findById(owner)
				.select({ _id: 0, firstName: 1, lastName: 1 })
				.lean();

			name = user ? `${user.firstName} ${user.lastName}` : '';
		}

		return name;
	}

	async setOwner(player: Player, entity: Entity) {
		await entites.update(entity, { owner: player.dbId });
	}
}

export default new BusinessOwning();
