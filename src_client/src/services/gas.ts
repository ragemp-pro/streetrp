import vehicleCtrl from 'vehicle';

const player = mp.players.local;

class Gas {
	constructor() {
		mp.events.subscribe({
			'Gas-ShowMenu': this.showMenu.bind(this),
			'Gas-CloseMenu': this.closeMenu
		});
	}

	private getFuelInfo() {
		const { vehicle } = player;

		return (
			(vehicleCtrl.isDriver(vehicle) && vehicle.getVariable('fuel')) || {
				current: 0,
				max: 0
			}
		);
	}

	private showMenu(type: string, prices: { [name: string]: number }) {
		const { vehicle } = player;

		if (vehicle) vehicle.freezePosition(true);

		mp.browsers.showPage('gas', { type, prices, fuel: this.getFuelInfo() }, true, true);
	}

	private closeMenu() {
		const { vehicle } = player;

		if (vehicle) vehicle.freezePosition(false);

		mp.browsers.hidePage();
	}
}

const gas = new Gas();
