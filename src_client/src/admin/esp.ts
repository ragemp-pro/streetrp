const localPlayer = mp.players.local;

class AdminESP {
	private mode = 0;

	constructor() {
		this.subscribeToEvents();
	}

	get isActivated() {
		return this.mode > 0;
	}

	private setMode(mode = 0) {
		if (!localPlayer.getVariable('adminLvl')) return;

		this.mode = mode;

		mp.game.graphics.notify(
			this.mode > 0
				? `ESP(${this.mode > 1 ? 'vehicles & players' : 'players'}): ~g~Enabled`
				: 'ESP: ~r~Disabled'
		);
	}

	private highlightPlayers() {
		mp.players.forEachInStreamRange((player) => {
			if (player.handle !== 0 && player !== mp.players.local) {
				const { x, y, z } = player.position;

				mp.game.graphics.drawText(
					`${player.name}(${player.remoteId}) #${player.getVariable('uid')}`,
					[x, y, z + 1.5],
					{
						scale: [0.3, 0.3],
						outline: true,
						color: [255, 255, 255, 255],
						font: 4,
						centre: true
					}
				);
			}
		});
	}

	private highlightVehicles() {
		mp.vehicles.forEachInStreamRange((vehicle) => {
			if (vehicle.handle !== 0) {
				const { x, y, z } = vehicle.position;

				mp.game.graphics.drawText(
					`${mp.game.vehicle.getDisplayNameFromVehicleModel(
						vehicle.model
					)} (${vehicle.getNumberPlateText()})`,
					[x, y, z - 0.5],
					{
						scale: [0.3, 0.3],
						outline: true,
						color: [255, 255, 255, 255],
						font: 4,
						centre: true
					}
				);
			}
		});
	}

	private render() {
		if (this.mode > 1) {
			this.highlightPlayers();
			this.highlightVehicles();
		} else if (this.mode > 0) this.highlightPlayers();
	}

	private subscribeToEvents() {
		mp.events.subscribe({ 'Admin-ToggleESP': this.setMode.bind(this) });
		mp.events.subscribeToDefault({ render: this.render.bind(this) });
	}
}

const esp = new AdminESP();

export {};
