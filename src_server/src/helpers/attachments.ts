import { isNumber } from 'lodash';

class Attachments {
	constructor() {
		mp.events.subscribeToDefault({
			attachObject: (player: Player, name: string) => this.add(player.mp, name),
			detachObject: (player: Player, name: string) => this.remove(player.mp, name)
		});
	}

	has(entity: PlayerMp | VehicleMp, name: number | string) {
		return entity.attachments?.includes(this.getHash(name));
	}

	add(entity: PlayerMp | VehicleMp, name: string) {
		const hash = this.getHash(name);

		if (!entity.attachments) entity.attachments = [hash];
		else if (!this.has(entity, hash)) entity.attachments.push(hash);

		this.updateClient(entity);
	}

	remove(entity: PlayerMp | VehicleMp, name: string) {
		if (!entity?.attachments) return;

		const index = entity.attachments.indexOf(this.getHash(name));

		if (index >= 0) {
			entity.attachments.splice(index, 1);

			this.updateClient(entity);
		}
	}

	private getHash(name: number | string) {
		return isNumber(name) ? name : mp.joaat(name);
	}

	private updateClient(entity: PlayerMp | VehicleMp) {
		entity.setVariable('attachments', this.serialize(entity.attachments));
	}

	private serialize(attachments: number[]) {
		return attachments.map((hash) => hash.toString(36)).join('|');
	}
}

export default new Attachments();
