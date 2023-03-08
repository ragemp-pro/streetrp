class Property {
	constructor() {
		mp.events.subscribe({
			'House-ShowMenu': this.showHouseMenu,
			'Business-ShowMenu': this.showBusinessMenu
		});
	}

	private showHouseMenu(data: any) {
		mp.browsers.showPage('house', data, true, true);
	}

	private showBusinessMenu(data: any) {
		mp.browsers.showPage('business', data, true, true);
	}
}

const property = new Property();

export {};
