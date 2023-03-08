export function fromObject(data: PositionEx) {
	const { x, y, z } = data;

	return new mp.Vector3(x, y, z);
}

export function isZero(vector: Vector3Mp) {
	const { x, y, z } = vector;

	return x === 0 && y === 0 && z === 0;
}

export function subtractVector(v1: Vector3Mp, v2: Vector3Mp) {
	return { x: v1.x - v2.x, y: v1.y - v2.y, z: v1.z - v2.z };
}
