import Vehicle from '../vehicle';
import Theft from './theft';
import { vehiclePositions } from './data';

class MiddleTheft extends Theft {
	constructor() {
		const vehicle = new Vehicle(
			['felon', 'virgo2', 'baller3', 'primo', 'cog55', 'warrener'],
			vehiclePositions.Middle,
			null,
			{ lock: 0 }
		);

		super('Middle', 1350, vehicle);
	}
}

export default new MiddleTheft();
