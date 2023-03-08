import { sortBy } from 'lodash';
import { finishWork } from 'jobs';
import animations from 'helpers/animations';
import prison from 'basic/prison';
import hospitals from 'data/hospitals.json';
import ems from 'factions/ems';
import emsCalls from 'factions/ems/calls';
import cuffsActions from 'factions/actions/cuffs';
import bagActions from 'factions/actions/bag';
import hunger from './hunger';
import inventory from './inventory';

class PlayerDeath {
	private deathTimeout: number;

	constructor() {
		this.deathTimeout = 10 * 60 * 1000;

		mp.events.subscribeToDefault({ playerDeath: this.onDeath.bind(this) });

		mp.events.subscribe({
			'Player-Die': this.death.bind(this)
		});
	}

	ressurect(player: Player) {
		emsCalls.cancelCall(player.dbId);

		player.dead = false;
		player.mp.health = 50;
		animations.stopOnServer(player.mp);
	}

	private async onDeath(player: Player) {
		const { mp } = player;

		if (player.dead || mp.dimension > 0 || prison.isImprisoned(player)) {
			return this.death(player);
		}

		bagActions.reset(player);

		mp.spawn(mp.position);
		mp.health = 100;

		animations.stopScenario(player);
		animations.playOnServer(mp, 'dead');

		await player.callEvent(
			'Player-ShowDeathMenu',
			[this.deathTimeout, ems.getPlayers(true).length],
			true
		);

		player.dead = true;
	}

	private async death(player: Player) {
		cuffsActions.reset(player);

		finishWork(player);
		await inventory.clear(player);
		hunger.reset(player);

		this.ressurect(player);
		this.respawn(player);

		player.mp.health = 20;
	}

	private respawn(player: Player) {
		const hospital = this.getClosestHospital(player.mp);

		player.mp.spawn(new mp.Vector3(hospital.x, hospital.y, hospital.z));
		player.mp.dimension = 0;

		if (prison.isImprisoned(player)) prison.putToRandomCell(player);
	}

	private getClosestHospital(player: PlayerMp) {
		return sortBy(hospitals, ({ x, y, z }) => player.dist(new mp.Vector3(x, y, z)))[0];
	}
}

export default new PlayerDeath();
