import { IRoute } from 'routes';
import Gas from './gas';
import Supermarket from './supermarket';
import Licenses from './licenses';
import VehicleShop from './vehicle-shop';
import Weapons from './weapons';
import LSC from './lsc';
import ClothingShop from './clothing-shop';
import TattooShop from './tattoo-shop';
import Barbershop from './barbershop';
import Surgeon from './surgeon';
import Passport from './passport';
import Bank from './bank';
import VehicleDump from './vehicle-dump';

export default [
	{
		path: '/gas',
		component: Gas
	},
	{
		path: '/supermarket',
		component: Supermarket
	},
	{
		path: '/licenses',
		component: Licenses
	},
	{
		path: '/vehicle_shop',
		component: VehicleShop
	},
	{
		path: '/weapons',
		component: Weapons
	},
	{
		path: '/lsc',
		component: LSC
	},
	{
		path: '/clothing_shop',
		component: ClothingShop
	},
	{
		path: '/tattoo_shop',
		component: TattooShop
	},
	{
		path: '/barbershop',
		component: Barbershop
	},
	{
		path: '/surgeon',
		component: Surgeon
	},
	{
		path: '/passport',
		component: Passport
	},
	{
		path: '/bank',
		component: Bank
	},
	{
		path: '/vehicle_dump',
		component: VehicleDump
	}
] as IRoute[];
