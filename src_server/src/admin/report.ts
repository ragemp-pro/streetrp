import moment from 'moment';
import CharModel from 'models/Character';
import ReportModel from 'models/Report';
import hud from 'helpers/hud';
import permissions from './permissions';

class Report {
	constructor() {
		mp.events.subscribe({
			'Admin-SendReport': this.create.bind(this),
			'Admin-AcceptReport': this.accept.bind(this),
			'Admin-GetReports': this.getReports.bind(this)
		});
	}

	async create(player: Player, message: string) {
		const isReported = await this.isReported(player.dbId);
		if (isReported) return;

		await ReportModel.create({ sender: player?.dbId, message });
		this.notifyAdmins(message);
	}

	notifyAdmins(message: string) {
		mp.players
			.toCustomArray()
			.forEach(
				(player) => player.adminLvl && hud.showNotification(player, 'info', message, true)
			);
	}

	private async accept(player: Player, reportId: string) {
		if (!permissions.hasPermission(player, 'helper')) {
			throw new SilentError('access denied');
		}

		const data = await ReportModel.updateOne(
			{ _id: reportId, admin: { $exists: false } },
			{ $set: { admin: player.dbId } }
		);

		if (!data.nModified) throw new SilentError('report already accepted');
	}

	private async isReported(sender: string) {
		const count = await ReportModel.findOne({
			sender,
			timestamp: {
				$gt: moment().subtract(10, 'minutes').toISOString()
			}
		}).countDocuments();

		return count > 1;
	}

	private async getReports(player: Player, page: number) {
		const data = await ReportModel.find({ admin: { $exists: false } })
			.skip(page * 20)
			.limit(20)
			.sort({ _id: -1 })
			.populate({
				path: 'sender',
				select: 'firstName lastName'
			})
			.lean();

		return data.map((item) => {
			const { sender } = item as typeof item & { sender: CharModel };

			return {
				...item,
				sender: sender ? `${sender.firstName} ${sender.lastName}` : 'Deleted'
			};
		});
	}
}

export default new Report();
