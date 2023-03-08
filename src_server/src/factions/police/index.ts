import factions from 'factions';
import FactionBuilder from 'factions/builder';
import { Garage } from 'factions/garage';
import { Wardrobe } from 'factions/wardrobe';
import './ticket';
import './info';
import './wanted';

const name = 'lspd';

const coords = factions.getCoords(name);
const wardrobe = new Wardrobe({
	male: {
		hat: [
			[46, 0],
			[39, 0],
			[123, 0],
			[125, 0]
		],
		shirt: [
			[55, 0],
			[13, 0],
			[13, 3],
			[318, 0],
			[316, 0],
			[50, 0],
			[49, 0],
			[320, 0]
		],
		pants: [
			[35, 0],
			[12, 0],
			[49, 0],
			[25, 6],
			[34, 0],
			[121, 0]
		],
		shoes: [
			[21, 0],
			[51, 0],
			[24, 0],
			[25, 0]
		],
		decals: [[8, 1]],
		accessories: [
			[37, 0],
			[38, 0],
			[58, 0, 'undershirt'],
			[122, 0, 'undershirt'],
			[129, 0, 'undershirt'],
			[153, 0, 'undershirt'],
			[155, 0, 'undershirt']
		]
	},
	female: {
		hat: [
			[45, 0],
			[38, 0],
			[122, 0],
			[124, 0]
		],
		shirt: [
			[48, 0],
			[249, 1],
			[249, 2],
			[329, 0],
			[327, 0],
			[42, 0],
			[331, 0]
		],
		pants: [
			[34, 0],
			[50, 0],
			[37, 6],
			[33, 0],
			[127, 0]
		],
		shoes: [
			[6, 0],
			[52, 0],
			[29, 0],
			[24, 0],
			[25, 0]
		],
		decals: [[7, 1]],
		accessories: [
			[20, 0],
			[22, 0],
			[35, 0, 'undershirt'],
			[152, 0, 'undershirt'],
			[159, 0, 'undershirt'],
			[189, 0, 'undershirt'],
			[191, 0, 'undershirt']
		]
	}
});

const garage = new Garage(
	coords.garage,
	['policeb', 'police', 'police2', 'police3', 'police4', 'policet', 'riot', 'polmav'],
	{ armor: 2, paint: { primary: [255, 255, 255, 0], secondary: [0, 0, 0, 0] } }
);

const builder = new FactionBuilder(name, true);

builder.createWarehouse(coords.warehouse, 50000);
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
	pumpshotgun: 90,
	carbinerifle: 120,
	'9mm': 1,
	'7.62mm': 3,
	'12gauge': 5,
	armor_medium: 5,
	armor_heavy: 15
});
builder.setWardrobe(coords.wardrobe, wardrobe);
builder.setGarage(garage);
builder.makeBlip(coords.spawn, { name: 'LSPD', model: 60, color: 3 });

const police = builder.build();

export default police;
