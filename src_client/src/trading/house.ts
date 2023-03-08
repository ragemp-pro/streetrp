import offer from 'basic/offer';

class HouseTrade {
	constructor() {
		mp.events.subscribe({
			'HouseTrade-SendOffer': this.sendOffer.bind(this),
			'HouseTrade-ConfirmOffer': this.confirmOffer.bind(this),
			'HouseTrade-RefuseOffer': this.refuseOffer.bind(this),

			'HouseTrade-ShowMenu': this.showMenu.bind(this)
		});
	}

	private reset() {
		mp.browsers.hidePage();
	}

	private showMenu(data: any) {
		mp.browsers.showPage('trading/house', data);
	}

	private async sendOffer(id: number, price: number) {
		await mp.events.callServer('HouseTrade-ShowOffer', { id, price });

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

const trading = new HouseTrade();
