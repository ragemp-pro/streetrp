mp.events.subscribe({
	'FactionWorkshop-ShowMenu': (materials: number, prices: { [name: string]: number }) => {
		mp.browsers.showPage('factions/workshop', { materials, prices }, true, true);
	}
});

export {};
