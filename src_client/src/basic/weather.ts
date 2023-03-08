let currentWeather = 'EXTRASUNNY';

mp.events.subscribe({
	'Weather-Change': (weather: string) => {
		currentWeather = weather;

		mp.game.gameplay.setWeatherTypeNow(currentWeather);
	}
});

setInterval(() => {
	mp.game.gameplay.setWeatherTypeNow(currentWeather);
}, 20000);

export {};
