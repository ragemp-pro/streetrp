import moment from 'moment';
import hud from 'helpers/hud';
import playerCtrl from 'player';
import hunger from 'player/hunger';
import vehicleDespawn from 'vehicle/despawn';
import bonus from 'awards/bonus';
import logs from './logs';
import weather from './weather';
import payday from './payday';
import prison from './prison';

class Time {
	get isNight() {
		const hours = new Date().getHours();

		return hours >= 22 || hours <= 6;
	}

	run() {
		const remainingTime =
			(60 - moment().seconds()) * 1000 + (1000 - moment().milliseconds());

		setTimeout(() => setInterval(() => this.changeTime(), 60000), remainingTime);

		this.changeTime(true);
	}

	setTimeOnClient(player: PlayerMp) {
		hud.showDate(player, new Date().toISOString());
	}

	private async changeTime(firstRunning = false) {
		const currentDate = new Date();
		const hours = currentDate.getHours();
		const minutes = currentDate.getMinutes();

		mp.world.time.hour = hours;
		mp.world.time.minute = minutes;

		if (firstRunning) return;

		if (minutes === 0) {
			if (hours % 3 === 0) weather.changeCurrentWeather();

			await payday.trigger(!hours);
		} else if (minutes % 5 === 0) logs.saveAll();

		this.updateForPlayers(minutes % 2 === 0);
		vehicleDespawn.despawnFactionsVehicles();
	}

	private updateForPlayers(save = false) {
		const updated: Player[] = [];

		mp.players.toCustomArray().forEach((player) => {
			if (!mp.players.exists(player.mp)) return;

			this.setTimeOnClient(player.mp);
			hunger.decrease(player);
			prison.decreaseTime(player);

			player.paydayTime += 1;
			bonus.incrementPlayerTime(player);

			updated.push(player);
		});

		if (save) playerCtrl.savePlayers(updated);
	}
}

export default new Time();
