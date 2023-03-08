import points from 'helpers/points';
import { Zone } from '../../gangs/zones';

type Team = {
	id: string;
	members: string[];
	alive: number;
};

class CaptureStrategy {
	public zone: Zone;

	private dimension: number;

	private point: Point;

	private teams: {
		attacker: Team;
		defender: Team;
	};

	constructor(dimension: number, zone: Zone, attacker: string) {
		this.dimension = dimension;
		this.init(zone, attacker);
	}

	get attacker() {
		return this.teams.attacker;
	}

	get defender() {
		return this.teams.defender;
	}

	getPlayerTeam(player: Player) {
		const { attacker, defender } = this.teams;
		const { faction } = player;

		return attacker.id === faction ? attacker : defender.id === faction ? defender : null;
	}

	reset() {
		this.point.destroy();
	}

	private init(zone: Zone, attacker: string) {
		const point = points.create(
			zone.position,
			100,
			{
				onEnter: (player: Player) => this.zoneHandler(player, true),
				onExit: (player: Player) => this.zoneHandler(player, false)
			},
			{ dimension: this.dimension, visible: true, color: [219, 167, 44, 50] }
		);
		this.zone = zone;
		this.point = point;

		this.teams = {
			attacker: {
				id: attacker,
				members: [],
				alive: 0
			},
			defender: {
				id: zone.owner,
				members: [],
				alive: 0
			}
		};
	}

	private zoneHandler(player: Player, enter: boolean) {
		const team = this.getPlayerTeam(player);

		if (enter && !team.members.includes(player.dbId)) {
			team.members.push(player.dbId);
		}

		this.setTeamAlive(team, team.alive + (enter ? 1 : -1));
	}

	private setTeamAlive(team: Team, amount: number) {
		team.alive = amount;

		mp.players.forEachInDimension(this.dimension, (entity: PlayerMp) => {
			const player = mp.players.get(entity);
			if (!player) return;

			player.callEvent('GangCapture-UpdateMembers', [
				this.attacker.alive,
				this.defender.alive
			]);
		});
	}
}

export default CaptureStrategy;
