import { drawSprite } from 'utils/sprites';
import doorsList from 'data/doors.json';

type Door = {
	id?: number;
	hash: number;
	position: PositionEx;
	locked: boolean;
};

const localPlayer = mp.players.local;

class Doors {
	private items: Map<number, Door>;

	constructor() {
		this.items = new Map();

		mp.events.subscribeToDefault({
			// render: this.renderSprite.bind(this),
			doorChangeState: this.setLockedStatus.bind(this)
		});

		// mp.keys.bind(keycode('E'), true, this.toggle.bind(this));
	}

	async init() {
		// const data = await mp.events.callServer('Doors-GetState');

		doorsList.forEach((item) => this.add({ ...item, locked: item.locked }));
	}

	setLockedStatus(hash: number, status: boolean) {
		const door = this.items.get(hash);

		if (door) this.add({ ...door, locked: status });
	}

	private add(door: Door) {
		mp.game.object.doorControl(
			door.hash,
			door.position.x,
			door.position.y,
			door.position.z,
			door.locked,
			0.0,
			0.0,
			0
		);

		this.items.set(door.hash, door);
	}

	private toggle() {
		this.items.forEach((door) => {
			if (
				mp.game.system.vdist(
					localPlayer.position.x,
					localPlayer.position.y,
					localPlayer.position.z,
					door.position.x,
					door.position.y,
					door.position.z
				) < 2.1
			) {
				mp.events.callServer('Doors-Toggle', [door.hash, door.locked], false);
			}
		});
	}

	private renderSprite() {
		this.items.forEach((door) => {
			const distance = mp.game.system.vdist(
				localPlayer.position.x,
				localPlayer.position.y,
				localPlayer.position.z,
				door.position.x,
				door.position.y,
				door.position.z
			);

			if (distance <= 3) {
				const position = mp.game.graphics.world3dToScreen2d(
					door.position.x,
					door.position.y,
					door.position.z
				);

				if (!position) return;

				const scale = Math.max(0.1, 1 - distance / 3);
				const scaleSprite = 0.7 * scale;

				drawSprite(
					'Mpsafecracking',
					door.locked ? 'lock_closed' : 'lock_open',
					[scaleSprite, scaleSprite],
					0,
					[255, 255, 255, 255],
					position.x,
					position.y
				);
			}
		});
	}
}

const doors = new Doors();
doors.init();
