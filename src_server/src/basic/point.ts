import colshapes from 'helpers/colshapes';

class PointEntity implements Point {
	public readonly id: number;

	private colshape: ColshapeMp;

	private marker: MarkerMp;

	private _position: Vector3Mp;

	private _dimension: number;

	private _visible: boolean;

	constructor(colshape: ColshapeMp, marker: MarkerMp) {
		this.id = colshape.id;
		this.colshape = colshape;
		this.marker = marker;

		this._position = marker.position;
		this._dimension = colshape.dimension;
		this._visible = marker.visible;
	}

	get position() {
		return this._position;
	}

	set position(pos: Vector3Mp) {
		this.colshape.position = pos;
		this.marker.position = pos;

		this._position = pos;
	}

	get dimension() {
		return this._dimension;
	}

	set dimension(index: number) {
		this.colshape.dimension = index;
		this.marker.dimension = index;

		this._dimension = index;
	}

	get visible() {
		return this._visible;
	}

	set visible(status: boolean) {
		colshapes.setVisible(this.colshape, status);
		this.colshape.dimension = status ? this.dimension : 9999;
		this.marker.visible = status;

		this._visible = status;
	}

	isPointWithin(point: Vector3Mp) {
		return this.colshape.isPointWithin(point);
	}

	showFor(player: PlayerMp) {
		const { colshape, marker } = this;

		colshapes.setVisible(colshape, true, player);
		marker.showFor(player);
	}

	hideFor(player: PlayerMp) {
		const { colshape, marker } = this;

		colshapes.setVisible(colshape, false, player);
		marker.hideFor(player);
	}

	destroy() {
		this.colshape.destroy();
		this.marker.destroy();
	}
}

export default PointEntity;
