import animations from 'helpers/animations';
import inventory from 'basic/inventory/helper';
import actions from './actions';

class Drugs {
	use(player: Player, item: InventoryItem) {
		actions.checkActionTimeout(player);

		const { category } = inventory.getItemData(item.name);

		switch (category) {
			case 'smoke':
				this.useSmokeItem(player, item);
				break;

			default:
				break;
		}
	}

	private useSmokeItem(player: Player, item: InventoryItem) {
		item.amount -= 1;
		player.mp.health -= 2;

		animations.setScenario(player, 'smoke_cigarette', true);
		mp.players.callInStream(player.mp.position, 'Particles-ShowSmoke', [
			player.mp,
			30000
		]);
		actions.setActionTimeout(player, 36000);
	}
}

export default new Drugs();
