export function getLookingAtEntity(range = 4, ped = false) {
	const localPlayer = mp.players.local;

	const startPosition = localPlayer.getBoneCoords(12844, 0.5, 0, 0);
	const resolution = mp.game.graphics.getScreenActiveResolution(1, 1);

	const secondPoint = mp.game.graphics.screen2dToWorld3d([
		resolution.x / 2,
		resolution.y / 2,
		14
	] as any);

	if (!secondPoint) return;

	startPosition.z -= 0.3;

	const result = mp.raycasting.testPointToPoint(
		startPosition,
		secondPoint,
		localPlayer as any,
		14
	);

	// 14 peds & vehs
	// 17 objects only with map
	// 30/31 all

	if (!result || !result.entity?.type || (!ped && result.entity.type === 'ped')) return;

	const { position } = localPlayer;
	const {
		entity,
		entity: { position: entityPosition }
	} = result;

	const dist = mp.game.system.vdist(
		position.x,
		position.y,
		position.z,
		entityPosition.x,
		entityPosition.y,
		entityPosition.z
	);

	return dist <= range ? entity : null;
}
