import offer from 'basic/offer';

class BusinessTrade {
	constructor() {
		mp.events.subscribe({
			'BusinessTrade-SendOffer': this.sendOffer.bind(this),
			'BusinessTrade-ConfirmOffer': this.confirmOffer.bind(this),
			'BusinessTrade-RefuseOffer': this.refuseOffer.bind(this),

			'BusinessTrade-ShowMenu': this.showMenu.bind(this)
		});
	}

	private reset() {
		mp.browsers.hidePage();
	}

	private showMenu(data: any) {
		mp.browsers.showPage('trading/business', data);
	}

	private async sendOffer(id: number, price: number) {
		await mp.events.callServer('BusinessTrade-ShowOffer', { id, price });

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

const trading = new BusinessTrade();
