import animations from 'helpers/animations';
import inventory from 'basic/inventory/helper';
import actions from './actions';

class PlayerHealth {
	async selfHeal(player: Player, item: InventoryItem) {
		actions.checkActionTimeout(player);

		if (player.mp.health >= 100) {
			return mp.events.reject('У вас нет проблем со здоровьем');
		}

		const { health } = inventory.getItemData(item.name);
		const total = player.mp.health + health;

		item.amount -= 1;
		player.mp.health = total < 100 ? total : 100;

		animations.setScenario(player, `use_${item.name}`, true);
		actions.setActionTimeout(player, item.name === 'bandage' ? 5000 : 8000);
	}
}

export default new PlayerHealth();
