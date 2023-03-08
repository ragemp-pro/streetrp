import CharModel from 'models/Character';
import VehicleModel from 'models/Vehicle';

class GovInfo {
	constructor() {
		mp.events.subscribe({
			'GovInfo-GetUser': this.getUserInfo,
			'GovInfo-GetVehicle': this.getVehicleInfo
		});
	}

	private async getUserInfo(player: Player, name: string) {
		if (!player.faction || !name?.length) throw new SilentError('data error');

		const [firstName, lastName] = name.split('_');
		const user = await CharModel.findOne({ firstName, lastName })
			.select({
				createdAt: 1,
				bankAccount: 1,
				phone: 1
			})
			.lean();

		if (!user) throw new SilentError("user doesn't exists");

		const { _id: userId, phone, ...data } = user;

		const vehicles = await VehicleModel.find({ owner: userId })
			.select({ _id: 0, name: 1, govNumber: 1 })
			.lean();

		return {
			...data,
			phone: phone?.number,
			userId,
			vehicles
		};
	}

	private async getVehicleInfo(player: Player, govNumber: string) {
		if (!player.faction || !govNumber?.length) throw new SilentError('data error');

		const vehicle = await VehicleModel.findOne({ govNumber })
			.populate({
				path: 'owner',
				select: 'firstName lastName'
			})
			.select({ name: 1, owner: 1, oldOwners: 1 })
			.lean();

		if (!vehicle?.owner) throw new SilentError("vehicle doesn't exists");

		const { owner, name, oldOwners } = vehicle as typeof vehicle & { owner: CharModel };
		const data = {
			name,
			owner: `${owner.firstName} ${owner.lastName}`,
			owners: oldOwners.length
		};

		return data;
	}
}

const info = new GovInfo();
