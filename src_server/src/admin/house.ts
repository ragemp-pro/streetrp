import houseCtrl from 'house/entities';
import permissions from './permissions';
import journal from './journal';

class AdminHouse {
	constructor() {
		mp.events.subscribe({
			'Admin-CreateHouse': this.createHouse.bind(this),
			'Admin-DeleteHouse': this.destroyHouse.bind(this)
		});
	}

	private async createHouse(admin: Player, type: string) {
		if (!permissions.hasPermission(admin, 'owner')) return;

		const house = await houseCtrl.create(admin, type);
		journal.recordAction(admin, 'house_add', house.id);
	}

	private async destroyHouse(admin: Player, index: number) {
		if (!permissions.hasPermission(admin, 'owner')) return;

		await houseCtrl.delete(index);
		journal.recordAction(admin, 'house_delete', index.toString());
	}
}

const admHouse = new AdminHouse();
