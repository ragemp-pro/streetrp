export function getDistance(v1: Vector3Mp, v2: Vector3Mp) {
	const x = v2.x - v1.x;
	const y = v2.y - v1.y;

	return Math.abs(Math.hypot(x, y));
}
