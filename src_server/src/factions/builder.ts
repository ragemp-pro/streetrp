import factions from 'factions';
import Faction from './faction';
import warehouse from './warehouse';
import workshop from './workshop';
import { Garage } from './garage';
import inventory from './inventory';
import wardrobeCtrl, { Wardrobe } from './wardrobe';

class FactionBuilder {
	private faction: Faction;

	constructor(name: string, government: boolean) {
		this.reset(name, government);
	}

	build() {
		factions.addFaction(this.faction);

		return this.faction;
	}

	makeBlip(position: PositionEx, options: BlipsOptions) {
		mp.blips.create(position, options);
	}

	setGarage(garage: Garage) {
		this.faction.garage = garage;
	}

	setWardrobe(position: PositionEx, wardrobe: Wardrobe) {
		this.faction.wardrobe = wardrobeCtrl.create(position, wardrobe, this.faction);
	}

	createWorkshop(position: PositionEx, products: any) {
		this.faction.workshop = workshop.create(position, products, this.faction);
	}

	createInventory(position: PositionEx, capacity: InventoryCapacity) {
		this.faction.inventory = inventory.create(position, capacity, this.faction);
	}

	createWarehouse(position: PositionEx, capacity: number) {
		this.faction.warehouse = warehouse.create(position, capacity, this.faction);
	}

	private reset(name: string, government: boolean) {
		this.faction = new Faction(name, government);
	}
}

export default FactionBuilder;
