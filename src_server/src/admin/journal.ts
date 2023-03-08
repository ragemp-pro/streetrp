import { AdminLog } from 'models/Logs';
import CharModel from 'models/Character';
import logs from 'basic/logs';

class AdminJournal {
	constructor() {
		mp.events.subscribe({
			'Admin-GetJournal': this.getItems
		});
	}

	recordAction(admin: Player, action: string, note: string, playerId?: string) {
		logs.create('admin', { admin: admin.dbId, player: playerId, action, note });
	}

	private async getItems(player: Player, page: number) {
		const data = await AdminLog.find({})
			.skip(page * 20)
			.limit(20)
			.sort({ _id: -1 })
			.populate({
				path: 'admin',
				select: 'firstName lastName'
			})
			.select({ player: 0 })
			.lean();

		return data.map((item) => {
			const { admin } = item as typeof item & { admin: CharModel };

			return {
				...item,
				admin: admin ? `${admin.firstName} ${admin.lastName}` : 'Deleted'
			};
		});
	}
}

export default new AdminJournal();
