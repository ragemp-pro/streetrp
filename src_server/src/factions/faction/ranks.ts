import FactionModel from 'models/Faction';

export type Permission =
	| 'warehouse'
	| 'inventory'
	| 'garage'
	| 'workshop'
	| 'leader'
	| 'members'
	| 'wanted';

export type Rank = {
	name: string;
	salary: number;
	permissions: {
		[key in Permission]?: boolean;
	};
};

class FactionRanks {
	public items: Map<string, Rank>;

	private faction: string;

	constructor(faction: string) {
		this.faction = faction;
		this.items = new Map();
	}

	getRank(id: string) {
		return id && this.items.get(id.toString());
	}

	load(ranks: ({ _id: any } & Rank)[]) {
		ranks.forEach(({ _id: id, ...item }) => this.items.set(id.toString(), item));
	}

	hasPermission(rank: string, type: Permission) {
		const data = this.getRank(rank);

		return data && !!data.permissions[type];
	}

	async upatePermissions(rank: string, permissions: Rank['permissions']) {
		const data = this.getRank(rank);

		if (!data) throw new SilentError("rank doesn't exists");
		if (data.permissions.leader !== permissions?.leader) {
			throw new SilentError('this permission is read only');
		}

		await FactionModel.findOneAndUpdate(
			{ name: this.faction, 'ranks._id': rank },
			{ $set: { 'ranks.$.permissions': permissions } }
		);

		data.permissions = permissions;
	}
}

export default FactionRanks;
