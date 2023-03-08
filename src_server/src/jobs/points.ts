import points from 'helpers/points';

class JobPoints {
	private items: Point[];

	private orderPoint?: Point;

	constructor() {
		this.items = [];
	}

	get amount() {
		return this.items.length;
	}

	createForOrder(
		position: PositionEx,
		radius: number,
		handler: (player: Player) => void
	) {
		this.orderPoint = points.create(
			position,
			radius,
			{ onKeyPress: handler },
			{ type: 1, color: [207, 152, 25, 100] }
		);
	}

	add(point: Point) {
		this.items.push(point);
	}

	show(player: Player, index?: number) {
		const point = this.getPoint(index);

		if (point) {
			point.showFor(player.mp);

			mp.blips.create(point.position, { model: 0, color: 48, name: 'Чекпоинт' }, player);
		}
	}

	hide(player: Player, index?: number) {
		const point = this.getPoint(index);

		if (point) {
			point.hideFor(player.mp);

			mp.blips.delete(player, 'Чекпоинт');
		}
	}

	private getPoint(id: number) {
		return id >= 0 ? this.items[id] : this.orderPoint;
	}
}

export default JobPoints;
