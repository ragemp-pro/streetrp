import hud from 'basic/hud';

class Weapons {
	private weapon = 0;

	private ammo = 0;

	private sended = false;

	private ammoInterval: NodeJS.Timeout;

	constructor() {
		this.subscribeToEvents();
	}

	get currentWeapon() {
		return this.weapon;
	}

	get currentAmmo() {
		return this.ammo;
	}

	private giveWeapon(hash: number, ammo: number) {
		if (this.weapon) return;

		this.weapon = hash;
		this.ammo = ammo;
		this.sended = true;

		this.giveAmmo(this.ammo);

		this.runInterval();
	}

	private giveAmmo(amount: number) {
		if (!this.weapon) return;

		this.ammo = amount;

		hud.showAmmo(amount);
	}

	private removeWeapon() {
		this.weapon = 0;
		this.ammo = 0;

		hud.showAmmo(this.ammo);

		if (this.ammoInterval) {
			clearInterval(this.ammoInterval);
			this.ammoInterval = null;
		}
	}

	private onShot() {
		if (this.isMelee(this.weapon)) return;

		if (this.ammo > 0) this.ammo -= 1;
		if (this.ammo <= 0) mp.players.local.clearTasks();

		hud.showAmmo(this.ammo);

		this.sended = false;
	}

	private runInterval() {
		if (!this.weapon || this.isMelee(this.weapon)) return;

		this.ammoInterval = setInterval(() => {
			if (this.sended) return;

			mp.events.callServer('Weapons-SaveAmmo').then(() => {
				this.sended = true;
			});
		}, 1500);
	}

	private isMelee(weaponHash: number) {
		const group = mp.game.weapon.getWeapontypeGroup(weaponHash);

		return group === 2685387236 || weaponHash === 911657153;
	}

	private getClipSize(weapon: string | number) {
		const hash = typeof weapon === 'string' ? mp.game.joaat(weapon) : weapon;

		return mp.game.weapon.getWeaponClipSize(hash);
	}

	private subscribeToEvents() {
		mp.events.subscribeToDefault({
			playerWeaponShot: this.onShot.bind(this)
		});

		mp.events.subscribe({
			'Weapons-GetClipSize': this.getClipSize,
			'Weapons-GiveWeapon': this.giveWeapon.bind(this),
			'Weapons-GiveAmmo': this.giveAmmo.bind(this),
			'Weapons-RemoveWeapon': this.removeWeapon.bind(this),
			getCurrentAmmo: () => this.currentAmmo
		});

		mp.events.add(
			'outgoingDamage',
			(
				sourceEntity,
				targetEntity: PlayerMp,
				sourcePlayer,
				weapon,
				boneIndex: number,
				damage: number
			) => {
				if (targetEntity.type === 'player' && boneIndex !== 20) {
					const armor = targetEntity.getArmour();

					if (armor >= 0) {
						mp.events.callRemote('WeaponSync-ApplyDamage', targetEntity, damage);
					}
				}
			}
		);
	}
}

export default new Weapons();
