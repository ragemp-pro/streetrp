import scenarios from 'basic/scenarios';

class PlayerSync {
	constructor() {
		mp.events.subscribeToDefault({
			entityStreamIn: this.onStreamIn.bind(this)
		});

		mp.events.subscribeToData({
			scenario: this.toggleScenario,
			mood: this.setMood,
			walking: this.setWalkingStyle,
			jacket: this.setClothes
		});

		mp.events.subscribeToData(
			{
				animation: this.toggleAnimation
			},
			false
		);
	}

	private onStreamIn(entity: PlayerMp) {
		if (entity.type !== 'player') return;

		mp.animations.play(entity, entity.getVariable('animation'));

		this.toggleScenario(entity, entity.getVariable('scenario'));
		this.setMood(entity, entity.getVariable('mood'));
		this.setWalkingStyle(entity, entity.getVariable('walkingStyle'));
		this.setClothes(entity, entity.getVariable('jacket'));
	}

	private toggleAnimation(player: PlayerMp, current?: string, previous?: string) {
		if (previous) mp.animations.stop(player, previous);
		if (current) mp.animations.play(player, current);
	}

	private toggleScenario(player: PlayerMp, current?: string) {
		scenarios.stopScenario(player);

		if (current) scenarios.playScenario(player, current);
	}

	private async setWalkingStyle(player: PlayerMp, clipSet?: string) {
		if (!clipSet) return player.resetMovementClipset(0.0);

		if (!mp.game.streaming.hasClipSetLoaded(clipSet)) {
			mp.game.streaming.requestClipSet(clipSet);

			while (!mp.game.streaming.hasClipSetLoaded(clipSet)) await mp.game.waitAsync(0);
		}

		player.setMovementClipset(clipSet, 0.0);
	}

	private setMood(player: PlayerMp, mood?: string) {
		if (!mood) player.clearFacialIdleAnimOverride();
		else mp.game.invoke('0xFFC24B988B938B38', player.handle, mood, 0);
	}

	private setClothes(player: PlayerMp, data: { drawable: number; texture: number }) {
		if (data) {
			player.setComponentVariation(11, data?.drawable, data?.texture, 2);
		}
	}
}

const sync = new PlayerSync();
