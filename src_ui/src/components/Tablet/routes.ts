import { f7 } from 'framework7-react';

import Members from './pages/members';
import Member from './pages/members/member';
import RankSelect from './pages/members/rank-select';
import Ranks from './pages/ranks';
import Rank from './pages/ranks/rank';
import Money from './pages/money';
import Materials from './pages/materials';
import MedicCalls from './pages/medic-calls';
import PoliceCalls from './pages/police-calls';
import Database from './pages/database';
import DatabaseUsers from './pages/database/users';
import DatabaseUser from './pages/database/users/user';
import DatabaseVehicles from './pages/database/vehicles';
import DatabaseVehicle from './pages/database/vehicles/vehicle';
import Fine from './pages/database/users/fine';
import Arrest from './pages/database/users/arrest';
import Wanted from './pages/wanted';
import WantedForm from './pages/wanted/form';
import WantedItem from './pages/wanted/item';
import Journal from './pages/journal';
import Vehicles from './pages/vehicles';
import Settings from './pages/settings';
import GangZones from './pages/gang-zones';

const pages: typeof f7.routes = [
	{
		path: '/members/',
		component: Members,
		routes: [
			{
				path: 'member/',
				component: Member,
				routes: [
					{
						path: 'rank/',
						component: RankSelect
					}
				]
			}
		]
	},
	{
		path: '/settings/',
		component: Settings
	},
	{
		path: '/journal/',
		component: Journal
	},
	{
		path: '/ranks/',
		component: Ranks,
		routes: [
			{
				path: 'rank/',
				component: Rank
			}
		]
	},
	{
		path: '/money/',
		component: Money
	},
	{
		path: '/materials/',
		component: Materials
	},
	{
		path: '/med_calls/',
		component: MedicCalls
	},
	{
		path: '/pol_calls/',
		component: PoliceCalls
	},
	{
		path: '/database/',
		component: Database,
		routes: [
			{
				path: 'users/',
				component: DatabaseUsers
			},
			{
				path: 'user/',
				component: DatabaseUser
			},
			{
				path: 'vehicles/',
				component: DatabaseVehicles
			},
			{
				path: 'vehicle/',
				component: DatabaseVehicle
			}
		]
	},
	{
		path: '/wanted/',
		component: Wanted,
		routes: [
			{
				path: 'form/',
				component: WantedForm
			},
			{
				path: 'item/',
				component: WantedItem
			}
		]
	},
	{
		path: '/fine/',
		component: Fine
	},
	{
		path: '/arrest/',
		component: Arrest
	},
	{
		path: '/vehicles/',
		component: Vehicles
	},
	{
		path: '/gang_zones/',
		component: GangZones
	}
];

export default pages;
