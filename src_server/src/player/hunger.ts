import hud from 'helpers/hud';
import animations from 'helpers/animations';
import prison from 'basic/prison';
import inventory from 'basic/inventory/helper';
import actions from './actions';

class Hunger {
	eat(player: Player, food: InventoryItem) {
		actions.checkActionTimeout(player);

		const { satiety } = inventory.getItemData(food.name);
		const current = player.hunger + satiety <= 100 ? player.hunger + satiety : 100;

		this.updateForPlayer(player, current);

		food.amount -= 1;
		animations.setScenario(player, `eat_${food.name}`, true);
		actions.setActionTimeout(player, 6500);
	}

	decrease(player: Player) {
		if (prison.isImprisoned(player) || player.mp.getVariable('AGM')) return;

		if (player.hunger > 0) this.updateForPlayer(player, player.hunger - 0.5);
		else player.mp.health -= 5;
	}

	reset(player: Player) {
		player.mp.health = 100;

		this.updateForPlayer(player, 100);
	}

	updateForPlayer(player: Player, hunger: number) {
		player.hunger = hunger;

		hud.showSatiety(player.mp, hunger);
	}
}

export default new Hunger();
