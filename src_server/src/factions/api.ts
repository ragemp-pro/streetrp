import CharModel from 'models/Character';
import factions from 'factions';

class FactionsAPI {
	constructor() {
		mp.events.subscribe({
			'Faction-GetMoney': this.getMoney,
			'Faction-GetMaterials': this.getMaterialsAmount,
			'Faction-GetMembers': this.getMembers,
			'Faction-GetRanks': this.getRanks,
			'Faction-GetPlayerRank': this.getPlayerRank,
			'Faction-GetRankData': this.getRankData,
			'Faction-GetVehicles': this.getVehicles
		});
	}

	getPlayerRank(player: Player) {
		const faction = factions.getFaction(player.faction);

		if (faction) {
			const member = faction.members.getMember(player);
			const rank = faction.ranks.getRank(member?.rank);

			return rank?.name;
		}
	}

	private getMoney(player: Player) {
		const faction = factions.getFaction(player.faction);

		return faction ? faction.money.current : 0;
	}

	private getMaterialsAmount() {
		const list: { [name: string]: number } = {};

		Object.values(factions.items).forEach((faction) => {
			const { warehouse } = faction;

			if (faction.government && warehouse) list[faction.name] = warehouse.current;
		});

		return list;
	}

	private getRanks(player: Player) {
		const faction = factions.getFaction(player.faction);

		return faction
			? Array.from(faction.ranks.items.entries(), ([id, rank]) => ({
					id,
					name: rank.name
			  }))
			: [];
	}

	private getRankData(player: Player, rank: string) {
		const faction = factions.getFaction(player.faction);

		return faction && faction.ranks.getRank(rank);
	}

	private async getMembers(player: Player, amount: number) {
		const faction = factions.getFaction(player.faction);

		if (!faction) return [];

		const idList = Array.from(faction.members.getAll().keys()).slice(amount, amount + 15);
		const users = await CharModel.find({ _id: { $in: idList } })
			.select({ firstName: 1, lastName: 1 })
			.lean();

		return users.map(({ _id, firstName, lastName }) => {
			const member = faction.members.getMemberById(_id.toString());
			const rank = faction.ranks.getRank(member.rank)?.name;

			return {
				userId: _id,
				name: `${firstName} ${lastName}`,
				online: !!mp.players.getByDbId(_id),
				rank
			};
		});
	}

	private async getVehicles(player: Player) {
		const faction = factions.getFaction(player.faction);
		if (!faction?.garage) return [];

		const { garage } = faction;

		return Array.from(garage.vehicles.entries()).flatMap(([id, vehicle]) =>
			vehicle.despawnAt
				? []
				: {
						id,
						model: vehicle.name,
						govNumber: vehicle.numberPlate
				  }
		);
	}
}

export default new FactionsAPI();
