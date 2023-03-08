import vehicleState from './state';

class VehicleSync {
	constructor() {
		this.subscribeToEvents();
	}

	private subscribeToEvents() {
		mp.events.subscribe({
			'VehicleSync-SetRadioStation': (player, vehicle: VehicleMp, station: number) => {
				vehicleState.setRadioStation(vehicle, station);
			}
		});
	}
}

const sync = new VehicleSync();
