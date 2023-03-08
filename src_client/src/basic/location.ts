import greenZone from './green-zone';
import hud from './hud';

class PlayerLocation {
	private street: string;

	private zone: string;

	private updateInterval = 4000;

	constructor() {
		mp.events.subscribe({ getPlayerLocation: () => this.location });

		this.runInterval();
	}

	get location() {
		return {
			street: this.street,
			zone: this.zone,
			greenZone: greenZone.playerWithin
		};
	}

	private getStreetName(position: Vector3Mp) {
		const data = mp.game.pathfind.getStreetNameAtCoord(
			position.x,
			position.y,
			position.z,
			0,
			0
		);

		return mp.game.ui.getStreetNameFromHashKey(data.streetName);
	}

	private getZoneName(position: Vector3Mp) {
		return mp.game.ui.getLabelText(
			mp.game.zone.getNameOfZone(position.x, position.y, position.z)
		);
	}

	private update() {
		const { position } = mp.players.local;

		this.street = this.getStreetName(position);
		this.zone = this.getZoneName(position);

		hud.setLocation(this.street, this.zone, greenZone.playerWithin);
	}

	private runInterval() {
		setInterval(() => this.update(), this.updateInterval);
	}
}

export default new PlayerLocation();
