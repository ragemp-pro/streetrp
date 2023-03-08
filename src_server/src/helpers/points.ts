import PointEntity from 'basic/point';

type Props = {
	type?: number;
	dimension?: number;
	color?: RGBA;
	visible?: boolean;
	data?: any;
};

class Points {
	private items: Map<number, Point>;

	constructor() {
		this.items = new Map();
	}

	create(
		position: PositionEx,
		radius: number,
		handlers: ColshapeHandlers,
		options: Props = {}
	) {
		const {
			type = 1,
			color = [255, 255, 255, 255],
			dimension = 0,
			visible = false,
			data
		} = options;

		const colshape = mp.colshapes.create(position, radius / 2, handlers, {
			dimension,
			visible,
			data
		});
		const marker = mp.markers.new(
			type,
			new mp.Vector3(position.x, position.y, position.z - 1.2),
			radius,
			{
				dimension,
				visible,
				color
			}
		);

		const point = new PointEntity(colshape, marker);
		this.items.set(point.id, point);

		return point;
	}

	delete(point: Point) {
		if (!this.items.has(point?.id)) return;

		point.destroy();
		this.items.delete(point.id);
	}
}

export default new Points();
