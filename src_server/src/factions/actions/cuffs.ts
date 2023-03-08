import hud from 'helpers/hud';
import animations from 'helpers/animations';
import inventoryHelper from 'basic/inventory/helper';
import playerInventory from 'player/inventory';
import equipment from 'player/equipment';
import follow from './follow';

class CuffsActions {
	constructor() {
		mp.events.subscribe({
			'CuffsActions-UseHandcuffs': this.useHandcuffs.bind(this),
			'CuffsActions-UseCableTie': this.useCableTie.bind(this),
			'CuffsActions-Uncuff': this.uncuffPlayer.bind(this),
			'CuffsActions-Untie': this.untiePlayer.bind(this)
		});
	}

	inCuffs(player: Player) {
		return !!player.mp.getVariable('cuffs');
	}

	reset(player: Player) {
		animations.stopScenario(player);
		follow.reset(player);
		this.setCuffs(player, undefined);
	}

	private useHandcuffs(player: Player) {
		const target = mp.players.get(player.target as any);
		if (!player.entityIsNearby(target?.mp) || this.inCuffs(target) || target.mp.vehicle)
			return;

		const handcuffs = inventoryHelper.findItem(player.inventory, 'handcuffs');
		if (!handcuffs) {
			return hud.showNotification(player, 'error', 'У вас нет наручников');
		}

		inventoryHelper.removeItem(player.inventory, handcuffs);

		animations.setScenario(target, 'arrested');
		this.setCuffs(target, 'handcuffs');
	}

	private useCableTie(player: Player) {
		const target = mp.players.get(player.target as any);
		if (!player.entityIsNearby(target?.mp) || this.inCuffs(target) || target.mp.vehicle)
			return;

		const tie = inventoryHelper.findItem(player.inventory, 'cable_tie');
		if (!tie) {
			return hud.showNotification(player, 'error', 'У вас нет стяжек');
		}

		inventoryHelper.removeItem(player.inventory, tie);

		animations.setScenario(target, 'tied');
		this.setCuffs(target, 'tie');
	}

	private async uncuffPlayer(player: Player) {
		const target = mp.players.get(player.target as any);
		if (!player.entityIsNearby(target?.mp) || !this.inCuffs(target)) return;

		this.reset(target);

		await playerInventory.addItem(player, { name: 'handcuffs', amount: 1 });
	}

	private untiePlayer(player: Player) {
		const target = mp.players.get(player.target as any);
		if (!player.entityIsNearby(target?.mp) || !this.inCuffs(target)) return;

		const knife = equipment.getEquipment(player, 'hands');
		if (knife?.name !== 'knife') {
			return hud.showNotification(player, 'error', 'Возьмите нож в руки');
		}

		this.reset(target);
	}

	private setCuffs(player: Player, type?: 'handcuffs' | 'tie') {
		player.mp.setVariable('cuffs', type);
	}
}

export default new CuffsActions();
