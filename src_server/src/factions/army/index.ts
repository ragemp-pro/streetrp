import factions from 'factions';
import FactionBuilder from 'factions/builder';
import { Garage } from 'factions/garage';
import { Wardrobe } from 'factions/wardrobe';
import '../supply';
import './ticket';

const name = 'sang';

const coords = factions.getCoords(name);
const wardrobe = new Wardrobe({
	male: {
		hat: [
			[103, 3],
			[106, 3],
			[107, 3],
			[141, 3],
			[123, 5],
			[38, 0]
		],
		shirt: [
			[208, 3],
			[221, 3],
			[239, 3],
			[48, 0]
		],
		pants: [
			[47, 0],
			[46, 0],
			[86, 3],
			[87, 3],
			[88, 3],
			[30, 0]
		],
		shoes: [
			[24, 0],
			[25, 0],
			[62, 0],
			[63, 0]
		],
		accessories: [
			[33, 0],
			[122, 0, 'undershirt']
		]
	},
	female: {
		hat: [
			[102, 3],
			[105, 3],
			[106, 3],
			[140, 3],
			[122, 3],
			[37, 0]
		],
		shirt: [
			[212, 3],
			[225, 3],
			[230, 3],
			[231, 3],
			[232, 3],
			[41, 0]
		],
		pants: [
			[48, 0],
			[49, 0],
			[89, 3],
			[90, 3],
			[91, 3],
			[29, 0]
		],
		shoes: [
			[24, 0],
			[25, 0],
			[65, 0],
			[66, 0]
		],
		accessories: [
			[16, 0],
			[152, 0, 'undershirt']
		]
	}
});
const garage = new Garage(
	coords.garage,
	[
		'barracks',
		'crusader',
		'freecrawler',
		'insurgent2',
		'besra',
		'titan',
		'baller5',
		'kuruma2',
		'maverick'
	],
	{ armor: 2, paint: { primary: [217, 205, 152, 0], secondary: [217, 205, 152, 0] } }
);

const builder = new FactionBuilder(name, true);

builder.createWarehouse(coords.warehouse, 100000);
builder.createInventory(coords.inventory, { cells: 180, slots: 10000 });
builder.createWorkshop(coords.workshop, {
	handcuffs: 5,
	nightstick: 8,
	stungun: 10,
	knife: 5,
	pistol: 15,
	pistol50: 18,
	smg: 50,
	combatpdw: 70,
	heavyshotgun: 110,
	carbinerifle: 120,
	assaultrifle: 130,
	'9mm': 1,
	'7.62mm': 3,
	'12gauge': 5,
	armor_medium: 5,
	armor_heavy: 15
});
builder.setWardrobe(coords.wardrobe, wardrobe);
builder.setGarage(garage);
builder.makeBlip(coords.spawn, { name: 'SANG', model: 758, color: 25 });

const army = builder.build();

export default army;
