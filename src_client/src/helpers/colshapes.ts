import { isNumber } from 'lodash';
import keycode from 'keycode';
import binder from 'utils/binder';

const localPlayer = mp.players.local;

type Colshape = { data?: any } & ColshapeHandlers;

class Colshapes {
	private items: Map<number, Colshape>;

	private current: ColshapeMp;

	constructor() {
		this.items = new Map();

		mp.colshapes.create = this.create.bind(this);
		mp.colshapes.destroy = this.destroy.bind(this);
		mp.colshapes.getData = this.getData.bind(this);

		this.subscribeToEvents();
	}

	getData(shape?: ColshapeMp) {
		if (!shape && !this.current) return;

		const { id } = shape ?? this.current;
		const colshape = this.items.get(id);

		return colshape?.data;
	}

	create(position: PositionEx, radius: number, handlers: ColshapeHandlers, data?: any) {
		const shape = mp.colshapes.newSphere(position.x, position.y, position.z, radius, 0);

		this.items.set(shape.id, { ...handlers, data });

		return shape;
	}

	destroy(colshape: ColshapeMp) {
		if (!colshape) return;

		this.items.delete(colshape.id);
		colshape.destroy();
	}

	private playerEnterColshape(shape: ColshapeMp) {
		this.current = shape;

		const handlers = this.items.get(shape.id);

		if (handlers && handlers.onEnter) handlers.onEnter(handlers.data);
	}

	private playerExitColshape(shape: ColshapeMp) {
		const handlers = this.items.get(shape.id);

		if (handlers && handlers.onExit) handlers.onExit(handlers.data);

		this.current = null;
	}

	private playerKeyPress() {
		if (localPlayer.isCuffed()) return;

		const handlers = this.items.get(this.current?.id);

		if (handlers?.onKeyPress) handlers.onKeyPress(handlers.data);
		else if (isNumber(localPlayer.getVariable('colshape'))) {
			mp.events.callRemote('playerKeyPress', 'E');
		}
	}

	private subscribeToEvents() {
		mp.events.subscribeToDefault({
			playerEnterColshape: this.playerEnterColshape.bind(this),
			playerExitColshape: this.playerExitColshape.bind(this)
		});

		mp.keys.bind(
			+keycode('E'),
			false,
			binder.wrapHandler(this.playerKeyPress.bind(this), false)
		);
	}
}

export default new Colshapes();
