import binder from 'utils/binder';
import vehicleState from './state';
import vehicleCtrl from './index';

enum Door {
	FRONT_LEFT = 0,
	FRONT_RIGHT = 1,
	REAR_LEFT = 2,
	REAR_RIGHT = 3,
	HOOD = 4,
	TRUNK = 5,
	REAR = 6,
	REAR2 = 7
}

const player = mp.players.local;

class VehicleControls {
	constructor() {
		this.subscribeToEvents();
		this.bindKeys();
	}

	get seatbelt() {
		return !player.getConfigFlag(32, true);
	}

	toggleLockStatus(target?: VehicleMp) {
		const vehicle: VehicleMp = target ?? vehicleCtrl.getNearestInRange(5);

		if (vehicle) mp.events.callServer('Vehicle-ToggleLock', vehicle, false);
	}

	toggleDoor(vehicle: VehicleMp, door: keyof typeof Door) {
		const doors = [];
		const doorId = Door[door];

		for (let y = 0; y < 8; y++) {
			if (vehicle.getDoorAngleRatio(y) > 0.1) doors.push(1);
			else doors.push(0);
		}

		doors[doorId] = doors[doorId] ? 0 : 1;

		mp.events.callServer('Vehicle-ToggleDoor', [vehicle, doors], false);
	}

	toggleIndicator(indicator: 'left' | 'right') {
		const blockedClasses = [13, 14, 15, 16, 21];
		const { vehicle } = player;

		if (
			mp.browsers.hud &&
			vehicle &&
			vehicle.getPedInSeat(-1) === player.handle &&
			blockedClasses.indexOf(vehicle.getClass()) === -1
		)
			mp.events.callServer('Vehicle-ToggleIndicator', [vehicle, indicator], false);
	}

	toggleSeatBelt() {
		if (!player.vehicle) return;

		player.setConfigFlag(32, this.seatbelt);

		mp.game.ui.notifications.show(
			'info',
			this.seatbelt ? 'Вы пристегнулись' : 'Вы сняли ремень безопасности'
		);
	}

	private toggleEngine() {
		const { vehicle } = player;

		if (mp.browsers.hud && vehicleCtrl.isDriver(vehicle)) {
			mp.events.callServer('Vehicle-ToggleEngine', vehicle, false);
		}
	}

	private enterToFreeSeat(vehicle: VehicleMp) {
		const seat = vehicleCtrl.getFreeSeat(vehicle);

		if (seat >= 0) {
			player.taskEnterVehicle(vehicle.handle, 5000, seat, 1, 1, 0);
		}
	}

	private bindKeys() {
		binder.bind('engine', 'Alt', this.toggleEngine);
		binder.bind('lock', 'L', () => mp.browsers.hud && this.toggleLockStatus());
		binder.bind('seatbelt', 'G', () => mp.browsers.hud && this.toggleSeatBelt());

		mp.keys.bind(
			70,
			false,
			binder.wrapHandler(() => {
				if (player.vehicle || player.isCuffed()) return;

				const vehicle = vehicleCtrl.getNearestInRange(5);

				if (!vehicle || vehicle.getSpeed() > 5 || player.getVariable('isPlayingAnim'))
					return;

				if (vehicleState.get(vehicle).locked) {
					return mp.game.ui.notifications.show('error', 'ТС закрыто');
				}

				if (vehicle.isSeatFree(-1)) {
					player.taskEnterVehicle(vehicle.handle, 2500, -1, 1, 1, 0);
				} else this.enterToFreeSeat(vehicle);
			}, false)
		);

		mp.keys.bind(
			71,
			false,
			binder.wrapHandler(() => {
				if (player.vehicle || player.isCuffed()) return;

				const vehicle = vehicleCtrl.getNearestInRange(5);

				if (!vehicle || vehicle.getSpeed() > 5 || player.getVariable('isPlayingAnim'))
					return;

				if (vehicleState.get(vehicle).locked) {
					return mp.game.ui.notifications.show('error', 'ТС закрыто');
				}

				this.enterToFreeSeat(vehicle);
			}, false)
		);

		binder.bind('left_ind', 'Left', this.toggleIndicator.bind(this, 'left'));
		binder.bind('right_ind', 'Right', this.toggleIndicator.bind(this, 'right'));
	}

	private subscribeToEvents() {
		mp.events.subscribeToDefault({
			render: () => {
				mp.game.controls.disableControlAction(0, 23, true);
				mp.game.controls.disableControlAction(0, 58, true);
			},
			playerLeaveVehicle: () => player.setConfigFlag(32, true)
		});
	}
}

export default new VehicleControls();
