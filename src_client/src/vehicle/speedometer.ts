import controls from './controls';
import cruise from './cruise-control';
import vehicleCtrl from './index';

const player = mp.players.local;

type State = {
	engine: {
		health: number;
		active: boolean;
	};
	velocity: number;
	rpm: number;
	fuel: {
		current: number;
		max: number;
	};
	locked: boolean;
	seatbelt: boolean;
	cruise: boolean;
};

class Speedometer {
	private updateInterval: NodeJS.Timeout;

	show() {
		if (this.updateInterval) clearInterval(this.updateInterval);

		this.updateInterval = setInterval(this.update.bind(this), 200);
	}

	private getFullState(vehicle: VehicleMp): State {
		const health = (vehicle.getEngineHealth() * 100) / vehicle.getVariable('maxHealth');

		return {
			engine: {
				active: !!vehicle.getIsEngineRunning(),
				health: health >= 0 ? health : 0
			},
			velocity: Math.round(vehicle.getSpeed() * 3.6),
			rpm: Math.round(vehicle.rpm * 100),
			fuel: vehicle.getVariable('fuel'),
			locked: vehicle.getDoorLockStatus() > 1,
			seatbelt: controls.seatbelt,
			cruise: cruise.isActivated
		};
	}

	private update() {
		const { vehicle } = player;

		if (!mp.browsers.hud) return;

		if (!vehicleCtrl.isDriver(vehicle) || vehicle?.getClass() === 13) {
			clearInterval(this.updateInterval);
			this.updateInterval = null;

			mp.events.callBrowser('Speedometer-UpdateState', { inVehicle: false }, false);
		} else {
			mp.events.callBrowser(
				'Speedometer-UpdateState',
				{
					...this.getFullState(vehicle),
					inVehicle: true
				},
				false
			);
		}
	}
}

export default new Speedometer();
