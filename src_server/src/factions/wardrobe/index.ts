import points from 'helpers/points';
import playerClothes, { ClothesName } from 'player/clothes';
import factions from 'factions';
import Faction from 'factions/faction';
import Wardrobe from './wardrobe';

class WardrobeCtrl {
	constructor() {
		mp.events.subscribe({
			'FactionWardrobe-GetClothes': this.getClothes,
			'FactionWardrobe-WearItem': this.wearItem,
			'FactionWardrobe-Exit': this.onExit
		});
	}

	create(position: PositionEx, wardrobe: Wardrobe, faction: Faction) {
		const point = points.create(
			position,
			1,
			{
				onKeyPress: wardrobe.showMenu
			},
			{ color: [24, 132, 219, 100] }
		);
		faction.points.add(point);

		return wardrobe;
	}

	private getClothes(player: Player, type: ClothesName) {
		const faction = factions.getFaction(player.faction);

		if (faction?.wardrobe) {
			return faction.wardrobe.getClothesByType(player, type);
		}
	}

	private wearItem(player: Player, type: ClothesName, item: number, prevItem?: number) {
		const faction = factions.getFaction(player.faction);

		if (faction?.wardrobe) {
			faction.wardrobe.useClothesItem(player, { type, index: item }, prevItem);
		}
	}

	private onExit(player: Player) {
		const faction = factions.getFaction(player.faction);

		if (!faction || !faction.isAlreadyAtWork(player)) {
			playerClothes.load(player);
		}

		player.togglePrivateDimension();
	}
}

export { Wardrobe };

export default new WardrobeCtrl();
