mp.events.subscribe({
	'Licenses-ShowMenu': (
		prices: { [name: string]: number },
		updatePercent: number,
		licenses: { [name: string]: string }
	) => {
		mp.browsers.showPage('licenses', { prices, updatePercent, licenses });
	}
});

export {};
