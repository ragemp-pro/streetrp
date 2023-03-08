class Voice {
	constructor() {
		mp.events.add({
			'Voice-AddListener': this.addListenerFor,
			'Voice-RemoveListener': this.removeListenerFor
		});
	}

	addListenerFor(player: PlayerMp, target: PlayerMp) {
		player.enableVoiceTo(target);
	}

	removeListenerFor(player: PlayerMp, target: PlayerMp) {
		player.disableVoiceTo(target);
	}
}

export default new Voice();
