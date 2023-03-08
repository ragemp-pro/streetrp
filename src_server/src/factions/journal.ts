import { FactionLog } from 'models/Logs';
import CharModel from 'models/Character';
import logs from 'basic/logs';

class FactionJournal {
	constructor() {
		mp.events.subscribe({
			'FactionJournal-GetList': this.getItems
		});
	}

	recordAction(player: Player, action: string, thing: string, amount: number) {
		logs.create('faction', {
			faction: player.faction,
			member: player.dbId,
			action,
			thing,
			amount
		});
	}

	private async getItems(player: Player, current: number) {
		const data = await FactionLog.find({ faction: player.faction })
			.skip(current)
			.limit(10)
			.sort({ _id: -1 })
			.populate({
				path: 'member',
				select: 'firstName lastName'
			})
			.select({ faction: 0 })
			.lean();

		return data.map((item) => {
			const { member } = item as typeof item & { member: CharModel };

			return {
				...item,
				member: member ? `${member.firstName} ${member.lastName}` : 'System'
			};
		});
	}
}

export default new FactionJournal();
