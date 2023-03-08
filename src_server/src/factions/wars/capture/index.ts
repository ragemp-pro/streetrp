import chat from 'basic/chat';
import factions, { Faction } from 'factions';
import zones from '../../gangs/zones';
import Capture from './strategy';

const config = {
	dimension: 2222,
	time: 600
};

class ZoneCapture {
	private dimension: number;

	private time: number;

	private current?: Capture;

	private captureTimer?: NodeJS.Timeout;

	constructor() {
		this.dimension = config.dimension;
		this.time = config.time;

		mp.events.subscribeToDefault({
			playerDeath: this.onPlayerDeath.bind(this)
		});
		mp.events.subscribe({
			'ZoneCapture-StartWar': this.startWar.bind(this),
			'ZoneCapture-ToDimension': this.tpToDimension.bind(this)
		});
	}

	async startWar(player: Player) {
		const zone = zones.getNearestZone(player.waypoint);
		const owner = factions.getFaction(zone.owner);

		await this.checkCanStart(player, owner);

		this.time = config.time;
		this.current = new Capture(this.dimension, zone, player.faction);
		this.captureTimer = setInterval(this.updateTimer.bind(this), 1000);

		zone.status = true;
		zones.updateZoneBlip(zone);

		chat.sendToFaction(
			owner,
			`!{${chat.colors.orange}}ВНИМАНИЕ! Ваша территория под угрозой`
		);
	}

	async endWar(captured = false) {
		const { zone, attacker, defender } = this.current;

		clearInterval(this.captureTimer);
		this.current.reset();
		this.current = null;

		await zones.setOwner(zone, captured ? attacker.id : defender.id);

		mp.players.forEachInDimension(this.dimension, (entity: PlayerMp) => {
			const player = mp.players.get(entity);

			if (player) {
				player.mp.dimension = 0;
				player.callEvent('GangCapture-Stop');
			}
		});
	}

	private async updateTimer() {
		const { attacker, defender } = this.current;

		this.time -= 1;
		if (this.time <= 0) return this.endWar(defender.alive <= 0);

		if (attacker.members.length && attacker.alive <= 0) {
			this.endWar();
		} else if (defender.members.length && defender.alive <= 0) {
			this.endWar(true);
		}
	}

	private tpToDimension(player: Player) {
		if (!this.current || !this.current.getPlayerTeam(player)) return;

		const { attacker, defender } = this.current;
		const faction = factions.getFaction(player.faction);

		player.mp.dimension = this.dimension;
		player.callEvent('GangCapture-Start', [this.time, attacker.id, defender.id]);
		faction.garage.spawnVehicle(player, 'picador');
	}

	private onPlayerDeath(player: Player, reason: string, killer: PlayerMp) {
		if (!this.current || killer.dimension !== this.dimension) return;

		const targetName = player.getName();
		const killerName = mp.players.get(killer).getName();

		const message = `!{${chat.colors.orange}}${killerName} !{${chat.colors.white}}убил игрока !{${chat.colors.blue}}${targetName}`;
		mp.players.forEachInDimension(this.dimension, (entity: PlayerMp) => {
			chat.sendToPlayer(entity, message);
		});
	}

	private checkCanStart(player: Player, defender: Faction) {
		const gang = factions.getFaction(player.faction);

		if (this.current || !gang || !gang.isLeader(player, true)) {
			return mp.events.reject('Ошибка доступа');
		}
		if (gang.name === defender.name) {
			return mp.events.reject('Вы не можете атаковать свою территорию');
		}
		if (defender.getPlayers(true).length < 3) {
			return mp.events.reject('Недостаточно участников в банде защиты');
		}
	}
}

export default new ZoneCapture();
