import walkingStyles from 'data/walking.json';
import moods from 'data/moods.json';

class Animations {
	constructor() {
		mp.events.subscribeToDefault({
			setAnimation: this.set,
			setWalkingStyle: this.setWalkingStyle,
			setMood: this.setMood,
			setScenario: this.setScenario,
			stopScenario: this.stopScenario
		});
	}

	playOnServer(player: PlayerMp, shortcut: string, duration?: number) {
		if (player.vehicle) return;

		player.setVariable('animation', shortcut);
		player.setOwnVariable('isPlayingAnim', true);

		if (duration) {
			mp.players.withTimeout(player, this.stopOnServer.bind(this, player), duration);
		}
	}

	stopOnServer(player: PlayerMp) {
		if (!player.getOwnVariable('isPlayingAnim')) return;

		player.setVariable('animation', null);
		player.setOwnVariable('isPlayingAnim', false);
	}

	setScenario(player: Player, name: string, onlyStream = false) {
		if (player.mp.getVariable('scenario')) return;

		if (onlyStream) {
			mp.players.callInStream(player.mp.position, 'Scenarios-Play', [player.mp, name]);
		} else player.mp.setVariable('scenario', name);
	}

	stopScenario({ mp: player }: Player) {
		player.setVariable('scenario', null);
	}

	private set({ mp: player }: Player, data: string) {
		if (player.vehicle || player.getOwnVariable('isPlayingAnim')) return;

		player.setVariable('animation', data);
	}

	private setWalkingStyle({ mp: player }: Player, name: string) {
		const style = walkingStyles[name];

		player.setVariable('walking', style);
	}

	private setMood({ mp: player }: Player, name: string) {
		const anim = moods[name];

		player.setVariable('mood', anim);
	}
}

export default new Animations();
