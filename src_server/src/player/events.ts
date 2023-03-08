import moment from 'moment';
import CharModel from 'models/Character';
import offers from 'helpers/offers';
import { finishWork } from 'jobs';
import vehicleDespawn from 'vehicle/despawn';
import emsCalls from 'factions/ems/calls';

class PlayerEvents {
	constructor() {
		mp.events.add('playerJoin', this.onJoin);
		mp.events.add('playerQuit', this.onLeave);

		mp.events.subscribe({
			playerSelectTarget: (player: Player, target: any) => {
				player.target = target;
			},
			playerCreateWaypoint: (player: Player, coords: PositionEx) => {
				if (!coords) return;

				const { x, y, z } = coords;
				player.waypoint = new mp.Vector3(x, y, z);
			},
			'Player-KickAfk': (player: Player) => {
				player.mp.kick('AFK');
			}
		});
	}

	private onJoin(player: PlayerMp) {
		player.colshapes = [];
		player.attachments = [];

		player.spawn(new mp.Vector3(34.58, 856.84, 197.76));
		player.dimension = player.id + 1000;
	}

	private async onLeave(player: PlayerMp) {
		const { id, position, health } = player;
		const data = mp.players.get(player);

		if (data.dbId) {
			const isDead = data.dead;

			if (isDead) emsCalls.cancelCall(data.dbId);

			offers.refuse(data);
			finishWork(data);
			vehicleDespawn.despawnPlayerVehicles(data);

			await CharModel.findByIdAndUpdate(data.dbId, {
				$set: {
					position,
					inventory: data.inventory,
					hunger: data.hunger,
					health: isDead ? 0 : health,
					paydayTime: data.paydayTime,
					bonusTime: data.bonusTime
				},
				$inc: {
					playedTime: moment().diff(data.loginAt, 'minutes')
				}
			});
		}

		mp.players.delete(id);
	}
}

const events = new PlayerEvents();
