import Vehicle from '../vehicle';
import Theft from './theft';
import { vehiclePositions } from './data';

class CheapTheft extends Theft {
	constructor() {
		const vehicle = new Vehicle(
			['asbo', 'emperor2', 'asea', 'asterope', 'tornado3', 'weevil'],
			vehiclePositions.Cheap
		);

		super('Cheap', 960, vehicle);
	}
}

export default new CheapTheft();
