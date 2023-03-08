import { isEqual } from 'lodash';

class Waypoint {
	private position: Vector3Mp;

	constructor() {
		this.setDefaultState();

		mp.events.subscribeToDefault({
			render: this.getCurrentCoords.bind(this),
			createWaypoint: this.create
		});
	}

	get currentPosition() {
		return this.position;
	}

	isActive() {
		return mp.game.invoke('0x1DD1F58F493F1DA5') as boolean;
	}

	hasChanged(coords: Vector3Mp) {
		return !isEqual(this.currentPosition, coords);
	}

	create(x: number, y: number) {
		mp.game.ui.setNewWaypoint(x, y);
	}

	private setDefaultState() {
		this.position = new mp.Vector3(0, 0, 0);
	}

	private getCurrentCoords() {
		if (!this.isActive()) return this.setDefaultState();

		const blipIterator = mp.game.invoke('0x186E5D252FA50E7D');
		const firstInfoId = mp.game.invoke('0x1BEDE233E6CD2A1F', blipIterator);
		const nextInfoId = mp.game.invoke('0x14F96AA50D6FBEA7', blipIterator);

		for (
			let i = firstInfoId;
			mp.game.invoke('0xA6DB27D19ECBB7DA', i) !== 0;
			i = nextInfoId
		) {
			if (mp.game.invoke('0xBE9B0959FFD0779B', i) === 4) {
				const position = mp.game.ui.getBlipInfoIdCoord(i);

				if (this.hasChanged(position)) {
					this.position = position;

					this.triggerEvent();
				}
			}
		}
	}

	private triggerEvent() {
		mp.events.call('playerCreateWaypoint', this.position);
		mp.events.callServer('playerCreateWaypoint', this.position, false);
	}
}

export default new Waypoint();
