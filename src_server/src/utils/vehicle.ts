import { sortBy } from 'lodash';

export function getClosestVehicleInRange(position: Vector3Mp, range: number) {
	const vehicles: VehicleMp[] = [];

	mp.vehicles.forEachInRange(position, range, (vehicle) => vehicles.push(vehicle));

	return sortBy(vehicles, (vehicle) => vehicle.dist(position))[0];
}
