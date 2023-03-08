mp.events.subscribe({
	'Factions-ShowGarage': (vehicles: string[]) => {
		mp.browsers.showPage('factions/garage', { vehicles }, true, true);
	}
});

export {};
