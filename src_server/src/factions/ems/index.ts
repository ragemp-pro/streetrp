import factions from 'factions';
import FactionBuilder from 'factions/builder';
import { Garage } from 'factions/garage';
import { Wardrobe } from 'factions/wardrobe';
import './licenses';
import './health';

const name = 'ems';

const coords = factions.getCoords(name);
const wardrobe = new Wardrobe({
	male: {
		hat: [
			[122, 0],
			[122, 1]
		],
		shirt: [
			[13, 0],
			[13, 3],
			[22, 0],
			[271, 0]
		],
		pants: [
			[20, 0],
			[10, 0],
			[10, 2],
			[22, 1],
			[24, 1]
		],
		shoes: [
			[7, 0],
			[8, 0],
			[10, 1],
			[42, 6],
			[51, 0]
		],
		decals: [[57, 0]],
		accessories: [
			[126, 0],
			[127, 0]
		]
	},
	female: {
		hat: [
			[121, 0],
			[121, 1]
		],
		shirt: [
			[73, 0],
			[141, 0],
			[119, 0],
			[119, 1],
			[258, 0],
			[366, 0]
		],
		pants: [
			[23, 0],
			[37, 0],
			[37, 2],
			[37, 3]
		],
		shoes: [
			[1, 0],
			[6, 0],
			[13, 1],
			[52, 0]
		],
		decals: [[65, 0]],
		accessories: [
			[96, 0],
			[97, 0]
		]
	}
});

const garage = new Garage(coords.garage, ['ambulance', 'lguard'], {});

const builder = new FactionBuilder(name, true);

builder.createWarehouse(coords.warehouse, 30000);
builder.createInventory(coords.inventory, { cells: 180, slots: 10000 });
builder.createWorkshop(coords.workshop, {
	medkit: 15
});

builder.setWardrobe(coords.wardrobe, wardrobe);
builder.setGarage(garage);

builder.makeBlip(coords.spawn, { name: 'Госпиталь', model: 61, color: 1, scale: 1.1 });

const ems = builder.build();

export default ems;
