import { IRoute } from 'routes';
import Docs from './docs';
import Garage from './garage';
import Wardrobe from './wardrobe';
import Workshop from './workshop';
import Tablet from '../Tablet';

export default [
	{
		path: '/factions/docs',
		component: Docs
	},
	{
		path: '/factions/garage',
		component: Garage
	},
	{
		path: '/factions/garage',
		component: Garage
	},
	{
		path: '/factions/tablet',
		component: Tablet
	},
	{
		path: '/factions/wardrobe',
		component: Wardrobe
	},
	{
		path: '/factions/workshop',
		component: Workshop
	}
] as IRoute[];
