import { sortBy } from 'lodash';
import { isZero } from 'utils/vector';

const player = mp.players.local;

const coordsList: { [name: string]: PositionEx[] } = {
	boat: [
		{
			x: -283.241,
			y: 6611.433,
			z: 0.368
		},
		{
			x: 1433.506,
			y: 3834.719,
			z: 30.248
		},
		{
			x: 1334.518,
			y: 4233.295,
			z: 30.871
		},
		{
			x: -3316.195,
			y: 990.424,
			z: 0.361
		},
		{
			x: -1751.061,
			y: -1046.915,
			z: 0.939
		},
		{
			x: -798.048,
			y: -1414.832,
			z: 0.314
		}
	],
	plane: [
		{
			x: -951.328,
			y: -2976.424,
			z: 14.547
		},
		{
			x: -959.191,
			y: -2998.881,
			z: 14.548
		},
		{
			x: -976.636,
			y: -3025.582,
			z: 14.548
		}
	],
	helicopter: [
		{
			x: -1179.366,
			y: -2847.272,
			z: 13.846
		},
		{
			x: -1144.661,
			y: -2862.899,
			z: 13.847
		},
		{
			x: -1112.651,
			y: -2884.364,
			z: 13.847
		}
	]
};

class VehicleSpawn {
	getClosestSpawnCoords(model: string): PositionEx {
		const vehicleClass = mp.game.vehicle.getVehicleClassFromName(mp.game.joaat(model));

		switch (vehicleClass) {
			case 14:
				return VehicleSpawn.getClosestCoords(coordsList.boat);
			case 15:
				return VehicleSpawn.getClosestCoords(coordsList.helicopter);
			case 16:
				return VehicleSpawn.getClosestCoords(coordsList.plane);

			default:
				return VehicleSpawn.getSideOfRoad();
		}
	}

	private static getClosestCoords(coords: PositionEx[]) {
		return sortBy(coords, ({ x, y, z }) =>
			mp.game.system.vdist(
				player.position.x,
				player.position.y,
				player.position.z,
				x,
				y,
				z
			)
		)[0];
	}

	private static getSideOfRoad() {
		const {
			position: { x, y, z }
		} = player;
		const zeroVector = new mp.Vector3(0, 0, 0);

		const node = mp.game1.pathfind.getClosestVehicleNode(x, y, z, zeroVector, 1, 3.0, 0);
		const coord = mp.game1.pathfind.getSafeCoordForPed(
			node.x,
			node.y,
			node.z,
			true,
			zeroVector,
			16
		);

		return isZero(coord) ? node : coord;
	}
}

export default new VehicleSpawn();
