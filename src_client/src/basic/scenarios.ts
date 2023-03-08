import scenarios from 'data/scenarios.json';

type Scenario = {
	anim: string;
	attachment: string;
	duration?: number;
};

class Scenarios {
	constructor() {
		mp.events.subscribe({
			'Scenarios-Play': this.playScenario.bind(this)
		});
	}

	playLocal(name: string, onlyStream = false) {
		mp.events.callRemote('setScenario', name, onlyStream);
	}

	stopLocal() {
		mp.events.callRemote('stopScenario');
	}

	playScenario(player: PlayerMp, name: string) {
		const scenario: Scenario = scenarios[name];

		if (!scenario || !player.handle || player.scenario) return;

		mp.attachments.addFor(player, mp.game.joaat(scenario.attachment));
		mp.animations.play(player, scenario.anim);

		player.scenario = name;

		if (scenario.duration > 0) {
			setTimeout(() => this.stopScenario(player), scenario.duration);
		}
	}

	stopScenario(player: PlayerMp) {
		const scenario: Scenario = scenarios[player?.scenario];

		if (!mp.players.exists(player) || !player.handle || !scenario) return;

		mp.attachments.removeFor(player, mp.game.joaat(scenario.attachment));
		mp.animations.stop(player, scenario.anim);

		player.scenario = null;
	}
}

export default new Scenarios();
