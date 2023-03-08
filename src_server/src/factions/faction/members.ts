import FactionModel from 'models/Faction';

type Member = {
	rank: string;
};

class FactionMembers {
	private items: Map<string, Member>;

	private faction: string;

	constructor(faction: string) {
		this.faction = faction;
		this.items = new Map();
	}

	load(items: any[]) {
		items.forEach((item) => this.items.set(item.userId.toString(), { rank: item.rank }));
	}

	getAll() {
		return this.items;
	}

	getMember(player: Player) {
		return this.items.get(player.dbId);
	}

	getMemberById(id: string) {
		return this.items.get(id);
	}

	async add(player: Player, rank: string) {
		if (this.getMember(player)) throw new SilentError('player is already a member');
		if (this.getAll().size > 300) throw new SilentError('limit of members reached');

		await FactionModel.findOneAndUpdate(
			{ name: this.faction },
			{ $push: { members: { userId: player.dbId, rank } } }
		);
		this.items.set(player.dbId, { rank });
	}

	async update(playerId: string, data: Partial<Member>) {
		const member = this.items.get(playerId);
		if (!member) throw new SilentError("member doesn't exists");

		const updatedMember = { ...member, ...data, userId: playerId };

		await FactionModel.findOneAndUpdate(
			{ name: this.faction, 'members.userId': playerId },
			{ $set: { 'members.$': updatedMember } }
		);
		this.items.set(playerId, updatedMember);
	}

	async delete(playerId: string) {
		if (!this.items.has(playerId)) throw new SilentError("member doesn't exists");

		await FactionModel.findOneAndUpdate(
			{ name: this.faction },
			{ $pull: { members: { userId: playerId } } }
		);
		this.items.delete(playerId);
	}
}

export default FactionMembers;
