import factions from 'factions';
import gangZones from 'factions/gangs/zones';
import fortWar from 'factions/wars/fort';
import permissions from './permissions';

class AdminFaction {
	constructor() {
		mp.events.subscribe({
			'Admin-SetFactionLeader': this.setLeader.bind(this),
			'Admin-StartFortWar': this.startFortWar.bind(this),
			'Admin-SetZoneOwner': this.setZoneOwner.bind(this)
		});
	}

	private async setLeader(admin: Player, target: string, factionName: string) {
		if (!permissions.hasPermission(admin, 'gm')) return;

		const player = mp.players.getByDbId(target);

		if (!player || player.faction) {
			return mp.events.reject('Игрок уже состоит в организации');
		}

		const faction = factions.getFaction(factionName);

		if (faction) {
			const rank = Array.from(faction.ranks.items.keys()).find((item) =>
				faction.ranks.hasPermission(item, 'leader')
			);

			await faction.members.add(player, rank);
			factions.loadForPlayer(player, faction);
		}
	}

	private startFortWar(admin: Player) {
		if (!permissions.hasPermission(admin, 'gm')) return;

		fortWar.start();
	}

	private setZoneOwner(admin: Player, owner: string) {
		if (!permissions.hasPermission(admin, 'gm')) return;

		const zone = gangZones.getNearestZone(admin.waypoint);
		if (zone) gangZones.setOwner(zone, owner);
	}
}

const admFaction = new AdminFaction();
