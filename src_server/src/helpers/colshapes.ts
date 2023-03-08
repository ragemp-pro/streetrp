import { pull } from 'lodash';
import hud from './hud';

type ColshapeOptions = {
	dimension?: number;
	visible?: boolean;
	data?: any;
};
type Colshape = { data?: any } & ColshapeHandlers;

class Colshapes {
	private items: Map<number, Colshape>;

	constructor() {
		this.items = new Map();

		mp.colshapes.create = this.create.bind(this);
		mp.colshapes.delete = this.delete.bind(this);
		mp.colshapes.getData = this.getData.bind(this);

		this.subscribeToEvents();
	}

	getData(player: PlayerMp) {
		const colshape = this.items.get(player.colshape);

		return colshape?.data;
	}

	isVisibleFor(player: PlayerMp, shape: ColshapeMp) {
		return shape?.visible || player.colshapes.includes(shape?.id);
	}

	create(
		position: PositionEx,
		radius: number,
		handlers: ColshapeHandlers,
		options: ColshapeOptions = {}
	) {
		const { x, y, z } = position;
		const { data, dimension = 0, visible = true } = options;

		const shape = mp.colshapes.newSphere(x, y, z, radius);
		shape.dimension = dimension;
		shape.visible = visible;

		this.items.set(shape.id, { keyName: 'E', ...handlers, data });

		return shape;
	}

	delete(shape: ColshapeMp) {
		if (!mp.colshapes.exists(shape)) return;

		shape.destroy();
		this.items.delete(shape.id);
	}

	setVisible(shape: ColshapeMp, visible: boolean, player?: PlayerMp) {
		if (!player) {
			shape.visible = visible;
			return;
		}

		const { id } = shape;
		const isVisible = this.isVisibleFor(player, shape);

		if (!isVisible && visible) player.colshapes.push(id);
		else if (isVisible) {
			pull(player.colshapes, id);
			this.setPlayerColshape(player, null);
		}
	}

	private playerEnterColshape(player: Player, shape: ColshapeMp) {
		if (!this.isVisibleFor(player.mp, shape)) return;

		const colshape = this.items.get(shape?.id);
		if (!colshape) return;

		this.setPlayerColshape(player.mp, shape.id);

		if (colshape.onEnter) return colshape.onEnter(player, colshape.data);
		if (colshape.onKeyPress) hud.showInteract(player, colshape.keyName);
	}

	private playerExitColshape(player: Player, shape: ColshapeMp) {
		if (!this.isVisibleFor(player.mp, shape)) return;

		const colshape = this.items.get(shape?.id);
		if (!colshape) return;

		this.setPlayerColshape(player.mp, null);

		if (colshape.onKeyPress) hud.showInteract(player);
		if (colshape.onExit) return colshape.onExit(player, colshape.data);
	}

	private playerKeyPress(player: Player, key: string) {
		const colshape = this.items.get(player.mp.colshape);

		if (colshape && colshape.keyName === key && colshape.onKeyPress) {
			hud.showInteract(player);
			return colshape.onKeyPress(player, colshape.data);
		}
	}

	private setPlayerColshape(player: PlayerMp, id?: number) {
		player.colshape = id;
		player.setOwnVariable('colshape', id);
	}

	private subscribeToEvents() {
		mp.events.subscribeToDefault({
			playerEnterColshape: this.playerEnterColshape.bind(this),
			playerExitColshape: this.playerExitColshape.bind(this),
			playerKeyPress: this.playerKeyPress.bind(this)
		});
	}
}

export default new Colshapes();
