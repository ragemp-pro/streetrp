const bodyParts = {
	head: 31086,
	neck: 39317,
	torso: 0,
	pelvis: 11816,
	leftArm: 18905,
	rightArm: 57005,
	leftLeg: 14201,
	rightLeg: 52301
};
const inVehicleParts = ['head', 'neck', 'torso', 'pelvis'];

class WeaponSync {
	constructor() {
		this.disableWeaponDamage();

		mp.events.subscribeToDefault({
			playerWeaponShot: this.onWeaponShot.bind(this)
		});
	}

	private disableWeaponDamage() {
		setInterval(() => {
			mp.game.player.setWeaponDefenseModifier(-9999999);
			mp.game.ped.setAiWeaponDamageModifier(0);
		}, 1000);
	}

	private onWeaponShot(position: Vector3Mp, target: PlayerMp) {
		if (!position || !target || target.type !== 'player') return;

		const { x, y, z } = position;
		let tempDist = target.vehicle ? 0.9 : 9999;
		let bodyPart = !target.vehicle && 'torso';

		Object.entries(bodyParts).forEach(([name, hash]) => {
			const boneCoords = target.getBoneCoords(hash, 0, 0, 0);
			const dist = mp.game.system.vdist(
				x,
				y,
				z,
				boneCoords.x,
				boneCoords.y,
				boneCoords.z
			);

			if (dist < tempDist) {
				tempDist = dist;
				bodyPart = name;
			}
		});

		if ((target.vehicle && inVehicleParts.includes(bodyPart)) || !target.vehicle) {
			mp.events.callServer('playerWeaponShot', [target, bodyPart], false);
		}
	}
}

const sync = new WeaponSync();

export {};
