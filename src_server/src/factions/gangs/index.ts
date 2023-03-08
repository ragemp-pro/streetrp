import factions from 'factions';
import Faction from 'factions/faction';
import FactionBuilder from 'factions/builder';
import { Garage } from 'factions/garage';
import gangs from './data';
import '../wars/capture';

const items: { [name: string]: Faction } = {};

Object.entries(gangs).forEach(([name, gang]) => {
	const coords = factions.getCoords(name);
	const builder = new FactionBuilder(name, false);

	const garage = new Garage(
		coords.garage,
		['burrito3', 'picador', 'impaler', 'chino2', 'buccaneer', 'primo2'],
		{ paint: { primary: gang.vehicleColor, secondary: gang.vehicleColor } }
	);

	builder.createWarehouse(coords.warehouse, 20000);
	builder.createInventory(coords.inventory, { cells: 180, slots: 10000 });
	builder.createWorkshop(coords.workshop, {
		knife: 10,
		bat: 15,
		pistol: 20,
		revolver: 50,
		microsmg: 60,
		dbshotgun: 90,
		'9mm': 2,
		'12gauge': 7,
		armor_light: 15
	});
	builder.setGarage(garage);
	builder.makeBlip(coords.spawn, gang.blip);

	items[name] = builder.build();
});

export default items;
