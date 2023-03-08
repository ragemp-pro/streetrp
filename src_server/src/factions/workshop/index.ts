import points from 'helpers/points';
import hud from 'helpers/hud';
import factions from 'factions';
import journal from 'factions/journal';
import Faction from 'factions/faction';
import Workshop, { Products } from './workshop';

class WorkshopCtrl {
	constructor() {
		mp.events.subscribe({
			'FactionWorkshop-CraftItem': this.craftItem.bind(this)
		});
	}

	create(position: PositionEx, products: Products, faction: Faction) {
		if (!faction.warehouse) throw new Error('faction warehouse should be created');

		const workshop = new Workshop(products, faction.warehouse);

		const point = points.create(
			position,
			1,
			{ onKeyPress: this.showMenu.bind(this) },
			{ data: faction.name, color: [24, 132, 219, 100] }
		);
		faction.points.add(point);

		return workshop;
	}

	private canCraft(player: Player, faction: Faction) {
		return faction?.workshop && faction.hasAccess(player, 'workshop');
	}

	private showMenu(player: Player, factionName: string) {
		const faction = factions.getFaction(factionName);

		if (!this.canCraft(player, faction)) {
			return hud.showNotification(player, 'error', 'У вас нет доступа к складу');
		}

		faction.workshop.showMenu(player);
	}

	private async craftItem(player: Player, name: string, amount: number) {
		const faction = factions.getFaction(mp.colshapes.getData(player.mp));

		if (!this.canCraft(player, faction)) {
			return mp.events.reject('Ошибка доступа');
		}

		await faction.workshop.craftItem(player, name, amount);
		await journal.recordAction(player, 'craft', name, amount);

		return faction.warehouse.current;
	}
}

export { Workshop };

export default new WorkshopCtrl();
