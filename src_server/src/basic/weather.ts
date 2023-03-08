import { random, round } from 'lodash';
import moment from 'moment';
import axios from 'axios';

type ForecastItem = {
	temperature: number;
	condition: string;
	date: string;
};

const weatherTypes = {
	Thunderstorm: ['THUNDER'],
	Drizzle: ['CLEARING'],
	Rain: ['RAIN', 'CLEARING'],
	Snow: ['XMAS', 'SNOWLIGHT'],
	Clear: ['EXTRASUNNY', 'CLEAR'],
	Clouds: ['CLOUDS', 'OVERCAST'],
	Fog: ['SMOG', 'FOGGY', 'NEUTRAL']
};

class Weather {
	private city: string;

	private forecast: ForecastItem[];

	get current() {
		return this.forecast[0];
	}

	set location(name: string) {
		this.city = name;
		this.forecast = [];

		this.loadForecast();
	}

	init() {
		this.location = process.env.WEATHER_CITY;
	}

	changeCurrentWeather(firstRunning = false) {
		if (!firstRunning) this.forecast.splice(0, 1);

		mp.world.weather = this.current.condition;
		mp.world.setWeatherTransition(this.current.condition);

		mp.players.call('Weather-Change', [this.current.condition]);
	}

	setPlayerWeather(player: Player) {
		player.callEvent('Weather-Change', this.current.condition);
	}

	private async loadForecast() {
		const data = await this.fetchData();

		data.list.forEach((item) => {
			const temperature = round(item.main.temp);
			const types: string[] = weatherTypes[item.weather[0].main];

			if (!types) return;

			const weather = {
				temperature,
				condition: types[random(0, types.length - 1)],
				date: moment.unix(item.dt).toISOString()
			};

			this.forecast.push(weather);
		});

		this.changeCurrentWeather(true);
	}

	private async fetchData() {
		const url = `http://api.openweathermap.org/data/2.5/forecast?q=${this.city}&units=metric&lang=ru&appid=${process.env.WEATHER_KEY}`;

		const { data } = await axios.get(url);

		return data;
	}
}

export default new Weather();
