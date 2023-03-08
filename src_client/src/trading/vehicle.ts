import offer from 'basic/offer';

class VehicleTrade {
	constructor() {
		mp.events.subscribe({
			'VehicleTrade-SendOffer': this.sendOffer.bind(this),
			'VehicleTrade-ConfirmOffer': this.confirmOffer.bind(this),
			'VehicleTrade-RefuseOffer': this.refuseOffer.bind(this),

			'VehicleTrade-ShowMenu': this.showMenu.bind(this)
		});
	}

	private reset() {
		mp.browsers.hidePage();
	}

	private showMenu(data: any) {
		mp.browsers.showPage('trading/vehicle', data);
	}

	private async sendOffer(vehicleId: string, data: any) {
		await mp.events.callServer('VehicleTrade-ShowOffer', [vehicleId, data]);

		this.reset();
	}

	private confirmOffer() {
		offer.accept();
		this.reset();
	}

	private refuseOffer() {
		offer.refuse();
		this.reset();
	}
}

const trading = new VehicleTrade();
