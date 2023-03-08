import animations from 'helpers/animations';
import inventory from 'basic/inventory/helper';
import actions from './actions';

class Alcohol {
	drink(player: Player, item: InventoryItem) {
		actions.checkActionTimeout(player);

		const { duration } = inventory.getItemData(item.name);

		this.setDrunkEffect(player, duration * 1000);

		item.amount -= 1;
		player.mp.health -= Math.floor(duration * 0.1);

		animations.setScenario(player, `drink_${item.name}`, true);
		actions.setActionTimeout(player, 6500);
	}

	private setDrunkEffect(player: Player, duration: number) {
		player.callEvent('Effects-StartDrunkEffect', duration);
	}
}

export default new Alcohol();
