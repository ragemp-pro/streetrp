import Vehicle from '../vehicle';
import Theft from './theft';
import { vehiclePositions } from './data';

class PremiumTheft extends Theft {
	constructor() {
		const vehicle = new Vehicle(
			['bestiagts', 'elegy2', 'turismo2', 'tempesta', 'zentorno', 'jester'],
			vehiclePositions.Premium,
			null,
			{ lock: 1 }
		);

		super('Premium', 1840, vehicle);
	}
}

export default new PremiumTheft();
