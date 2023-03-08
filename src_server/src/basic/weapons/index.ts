import inventory from 'basic/inventory/helper';
import equipment from 'player/equipment';
import './sync';

class Weapons {
	constructor() {
		mp.events.subscribe({
			'Weapons-SaveAmmo': this.saveAmmo.bind(this)
		});
	}

	giveWeapon(player: Player, name: string) {
		const ammoType = this.getAmmoOfWeapon(name);

		let ammo = equipment.getEquipment(player, 'ammo');
		if (ammo?.name !== ammoType) ammo = null;

		const weapon = mp.joaat(`weapon_${name}`);
		const ammoAmount = ammo?.amount ?? 0;

		player.mp.giveWeapon(weapon, ammoAmount);
		player.callEvent('Weapons-GiveWeapon', [weapon, ammoAmount]);
	}

	giveAmmo(player: Player, item: InventoryItem) {
		const weapon = equipment.getEquipment(player, 'hands');

		if (weapon && this.getAmmoOfWeapon(weapon.name) !== item.name) {
			return mp.events.reject('Ваше оружие имеет другой калибр');
		}

		this.setAmmo(player, item.amount);
	}

	removeWeapon(player: Player) {
		player.mp.removeAllWeapons();
		player.callEvent('Weapons-RemoveWeapon');
	}

	removeAmmo(player: Player) {
		this.setAmmo(player, 0);
	}

	private getAmmoOfWeapon(weapon: string) {
		return inventory.getItemData(weapon)?.ammo as string;
	}

	private setAmmo(player: Player, amount: number) {
		if (!player.mp.weapon) return;

		player.mp.setWeaponAmmo(player.mp.weapon, amount);
		player.callEvent('Weapons-GiveAmmo', amount);
	}

	private saveAmmo(player: Player) {
		const ammo = equipment.getEquipment(player, 'ammo');
		if (!ammo) return;

		const amount = player.mp.weaponAmmo;

		if (amount > 0) ammo.amount = amount;
		else {
			equipment.unequip(player, ammo);
			inventory.removeItem(player.inventory, ammo);
		}
	}
}

export default new Weapons();
