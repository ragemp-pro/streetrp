import playerArmor from 'player/armor';

class WeaponSync {
	constructor() {
		mp.events.add('WeaponSync-ApplyDamage', this.onWeaponShot.bind(this));
	}

	private onWeaponShot(player: PlayerMp, entity: PlayerMp, damage: number) {
		if (!player.weapon || entity.getVariable('AGM') || damage <= 0) return;

		const target = mp.players.get(entity);
		if (!target) return;

		playerArmor.applyDamage(target, damage);
	}
}

const sync = new WeaponSync();
