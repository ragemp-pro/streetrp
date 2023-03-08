import scenarios from 'basic/scenarios';
import vehicleTuning from 'vehicle/tuning';

class Lockpick {
	private target?: VehicleMp;

	constructor() {
		mp.events.subscribe({
			'Lockpick-ShowMenu': this.showMenu.bind(this),
			'Lockpick-Error': this.onError.bind(this),
			'Lockpick-Success': this.onSuccess.bind(this),
			'Lockpick-Cancel': this.cancel.bind(this)
		});
	}

	showMenu(vehicle: VehicleMp) {
		this.target = vehicle;

		const lock = vehicleTuning.get(vehicle)?.lock ?? -1;
		const levels = {
			'-1': 3,
			'0': 6,
			'1': 9
		};

		mp.browsers.showPage('games/lockpick', { need: levels[lock] }, true, true);
		mp.browsers.setHideBind(this.cancel.bind(this));
		mp.game.ui.displayRadar(true);
		mp.gui.chat.show(true);
	}

	onSuccess() {
		mp.events.callServer('Vehicle-OpenLock', this.target, false);

		this.cancel();
	}

	onError() {
		mp.events.callServer('Vehicle-TriggerAlarm', this.target, false);
		mp.game.ui.notifications.show('error', 'Копы получили сигнал, сваливай быстро!');

		this.cancel();
	}

	private cancel() {
		this.target = null;

		scenarios.stopLocal();
		mp.browsers.hidePage();
	}
}

const lockpick = new Lockpick();
