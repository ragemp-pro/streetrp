import binder from 'utils/binder';

const player = mp.players.local;

class CruiseControl {
	private maxSpeed: number;

	constructor() {
		this.maxSpeed = 0;

		this.bindKeys();

		mp.events.subscribeToDefault({
			render: this.controlSpeed.bind(this)
		});
	}

	get isActivated() {
		return this.maxSpeed > 0;
	}

	private isStopKeyPressed() {
		return mp.keys.isDown(70) || mp.keys.isDown(13);
	}

	private canStart(vehicle: VehicleMp) {
		const speed = Math.round(vehicle.getSpeed() * 3.6);

		return vehicle.getPedInSeat(-1) === player.handle && !vehicle.isInAir() && speed > 20;
	}

	private toggle() {
		const { vehicle } = player;

		if (!vehicle || !mp.browsers.hud || !this.canStart(vehicle)) return;

		if (!this.isActivated) {
			this.maxSpeed = vehicle.getSpeed();

			vehicle.setMaxSpeed(this.maxSpeed);

			mp.game.ui.notifications.show('info', 'Круиз-контроль активирован');
		} else {
			this.maxSpeed = 0;

			vehicle.setMaxSpeed(1000.0);

			mp.game.ui.notifications.show('info', 'Круиз-контроль отключён');
		}
	}

	private controlSpeed() {
		const { vehicle } = player;

		if (this.isActivated && vehicle) {
			vehicle.setMaxSpeed(this.maxSpeed);

			if (this.isStopKeyPressed()) this.toggle();
		}
	}

	private bindKeys() {
		binder.bind('cruise', 'X', this.toggle.bind(this));
	}
}

export default new CruiseControl();
