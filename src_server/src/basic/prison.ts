import { sample } from 'lodash';
import CharModel from 'models/Character';
import hud from 'helpers/hud';
import cells from 'data/prison.json';

class Prison {
	private freePosition: PositionEx;

	private zonePosition: PositionEx;

	constructor() {
		this.freePosition = { x: 1848.781, y: 2585.884, z: 45.672 };
		this.zonePosition = { x: 1797.622, y: 2606.667, z: 45.565 };

		mp.blips.create(this.zonePosition, {
			name: 'Федеральная тюрьма',
			model: 188,
			color: 4,
			scale: 1
		});
	}

	inZone(player: Player) {
		const { x, y, z } = this.zonePosition;
		return player.mp.dist(new mp.Vector3(x, y, z)) < 50;
	}

	isImprisoned(player: Player) {
		return player.arrest?.time >= 0;
	}

	async imprisonPlayer(player: Player, time: number, reason: string) {
		if (this.isImprisoned(player)) {
			return mp.events.reject('Гражданин уже под заключением');
		}

		await CharModel.findByIdAndUpdate(player.dbId, {
			$set: { arrest: { time, reason } }
		});
		player.arrest = { time, reason };

		this.putToRandomCell(player);

		hud.showNotification(
			player,
			'info',
			`Срок заключения: ${time}мин. Причина: ${reason}`
		);
	}

	releasePlayer(player: Player) {
		player.mp.setOwnVariable('imprisoned', false);
		player.arrest = null;

		player.tp(this.freePosition);
	}

	decreaseTime(player: Player) {
		const { arrest } = player;

		if (this.isImprisoned(player)) {
			arrest.time -= 1;

			if (arrest.time <= 0) this.releasePlayer(player);
			else
				hud.showNotification(
					player,
					'info',
					`Оставшееся время заключения: ${arrest.time}мин.`
				);
		}
	}

	putToRandomCell(player: Player) {
		player.mp.setOwnVariable('imprisoned', true);
		player.tp(sample(cells), 90, 1000);
	}
}

export default new Prison();
