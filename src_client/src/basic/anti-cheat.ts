import { subtractVector } from 'utils/vector';

const player = mp.players.local;

class AntiCheat {
	private active = false;

	private warns = 0;

	private position = player.position;

	private sleepTimeout?: NodeJS.Timeout;

	constructor() {
		this.subscribeToEvents();
	}

	init() {
		this.active = true;

		setInterval(() => {
			if (!this.active) return this.savePosition();

			if (!this.isNormalDiffOfPosition(40)) this.report('Телепорт');

			if (player.vehicle) {
				if (!this.isAllowedGroundDistOfVehicle(25)) this.report('ТС Flyhack');
				if (this.checkVehicleMaxSpeed()) this.report('ТС Speedhack');
			}

			this.savePosition();
		}, 3000);
	}

	sleep(duration = 3000) {
		this.active = false;

		if (this.sleepTimeout) clearTimeout(this.sleepTimeout);

		this.sleepTimeout = setTimeout(() => {
			this.active = true;
		}, duration);
	}

	private isWalking() {
		return !player.isFalling() && !player.isRagdoll() && !player.vehicle;
	}

	private isAirVehicle(vehicle: VehicleMp) {
		const vehicleClass = vehicle.getClass();

		return vehicleClass === 15 || vehicleClass === 16;
	}

	private isNormalDiffOfPosition(limit = 30) {
		const diff = subtractVector(this.position, player.position);

		return !this.isWalking() || (Math.abs(diff.x) <= limit && Math.abs(diff.y) <= limit);
	}

	private checkVehicleMaxSpeed() {
		const { vehicle } = player;
		const maxSpeed = mp.game.vehicle.getVehicleModelMaxSpeed(player.vehicle.model);

		return vehicle && !this.isAirVehicle(vehicle) && vehicle.getSpeed() > maxSpeed * 2;
	}

	private isAllowedGroundDistOfVehicle(limit = 50) {
		if (!player.vehicle || this.isAirVehicle(player.vehicle)) return true;

		const groundDist = mp.game.gameplay.getGroundZFor3dCoord(
			player.position.x,
			player.position.y,
			player.position.z,
			0.0,
			false
		);

		return player.position.z - groundDist < limit + groundDist;
	}

	private savePosition() {
		this.position = player.position;
	}

	private report(reason: string) {
		this.warns += 1;

		if (this.warns >= 4) {
			mp.events.callServer('AntiCheat-SendReport', reason, false);
		}
	}

	private subscribeToEvents() {
		mp.events.subscribe({
			'AntiCheat-Pause': this.sleep.bind(this)
		});
	}
}

export default new AntiCheat();
