mp.events.subscribe({
	'Weapons-ShowMenu': (prices: { [name: string]: number }) => {
		mp.browsers.showPage('weapons', { prices }, true, true);
	}
});

export {};
