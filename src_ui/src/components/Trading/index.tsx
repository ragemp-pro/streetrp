import { IRoute } from 'routes';
import Vehicle from './vehicle';
import House from './house';
import Business from './business';

export default [
	{
		path: '/trading/vehicle',
		component: Vehicle
	},
	{
		path: '/trading/house',
		component: House
	},
	{
		path: '/trading/business',
		component: Business
	}
] as IRoute[];
