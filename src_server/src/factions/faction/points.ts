import { remove } from 'lodash';
import points from 'helpers/points';

class FactionPoints {
	private points: Point[] = [];

	add(point: Point) {
		this.points.push(point);
	}

	remove(point: Point) {
		remove(this.points, (item) => item.id === point.id);
		points.delete(point);
	}

	showFor(player: PlayerMp) {
		this.points.forEach((point) => point.showFor(player));
	}

	hideFor(player: PlayerMp) {
		this.points.forEach((point) => point.hideFor(player));
	}
}

export default FactionPoints;
