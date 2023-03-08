import playerLicenses from 'player/licenses';
import army from 'factions/army';

class ArmyTicket {
	constructor() {
		mp.events.subscribe({
			'ArmyTicket-Give': this.give
		});
	}

	async give(player: Player) {
		if (!army.isLeader(player)) throw new SilentError('access denied');

		const soldier = mp.players.get(player.target as PlayerMp);
		if (!player.entityIsNearby(soldier?.mp)) return;

		if (!army.inFaction(soldier)) {
			return mp.events.reject('Гражданин не служит в армии');
		}

		await playerLicenses.give(soldier, 'military');
	}
}

const armyTicket = new ArmyTicket();
