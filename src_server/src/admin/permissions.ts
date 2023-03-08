import UserModel from 'models/User';

export type PermissionLevel = 'helper' | 'admin' | 'gm' | 'owner';

class Permissions {
	private list: { [name in PermissionLevel]: number };

	constructor() {
		this.list = {
			helper: 1,
			admin: 2,
			gm: 3,
			owner: 4
		};
	}

	hasPermission(player: Player, level: PermissionLevel) {
		return player.adminLvl >= this.list[level];
	}

	async giveAccess(player: Player, level: PermissionLevel) {
		await this.setPermission(player, level);
	}

	async withdrawAccess(player: Player) {
		await this.setPermission(player);
	}

	private async setPermission(player: Player, level?: PermissionLevel) {
		const index = this.list[level] || 0;

		await UserModel.findByIdAndUpdate(player.account, {
			$set: { adminLvl: index }
		});

		player.adminLvl = index;
	}
}

export default new Permissions();
