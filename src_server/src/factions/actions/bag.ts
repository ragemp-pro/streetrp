import hud from 'helpers/hud';
import inventoryHelper from 'basic/inventory/helper';
import playerClothes from 'player/clothes';
import playerInventory from 'player/inventory';

class BagActions {
	constructor() {
		mp.events.subscribe({
			'BagActions-PutOn': this.useBag.bind(this),
			'BagActions-TakeOff': this.takeOffBag.bind(this)
		});
	}

	inBag(player: Player) {
		return !!player.mp.getVariable('headsack');
	}

	reset(player: Player) {
		playerClothes.hide(player, 'mask');
		player.mp.setVariable('headsack', false);
	}

	private async useBag(player: Player) {
		const target = mp.players.get(player.target as any);
		if (!player.entityIsNearby(target?.mp) || this.inBag(target) || target.dead) return;

		const bag = inventoryHelper.findItem(player.inventory, 'sack');
		if (!bag) {
			return hud.showNotification(player, 'error', 'Для этого нужен мешок');
		}

		inventoryHelper.removeItem(player.inventory, bag);
		this.setBagOnHead(target);
	}

	private async takeOffBag(player: Player) {
		const target = mp.players.get(player.target as any);

		if (!player.entityIsNearby(target?.mp) || !this.inBag(target)) return;

		this.reset(target);
		await playerInventory.addItem(player, { name: 'sack', amount: 1 });
	}

	private setBagOnHead(player: Player) {
		player.mp.setVariable('headsack', true);
		player.mp.setClothes(1, 89, 0, 0);
	}
}

export default new BagActions();
