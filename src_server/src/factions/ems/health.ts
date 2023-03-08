import animations from 'helpers/animations';
import hud from 'helpers/hud';
import money from 'helpers/money';
import offers from 'helpers/offers';
import ems from 'factions/ems';
import inventoryHelper from 'basic/inventory/helper';
import playerActions from 'player/actions';
import playerDeath from 'player/death';

class EmsHealth {
	private price = 250;

	constructor() {
		mp.events.subscribe({
			'EmsHealth-OfferHeal': this.offerToHeal.bind(this),
			'EmsHealth-Reanimate': this.reanimateTarget.bind(this)
		});
	}

	private offerToHeal(player: Player) {
		if (!ems.isAlreadyAtWork(player)) return;
		playerActions.checkActionTimeout(player);

		const customer = mp.players.get(player.target as PlayerMp);
		if (!player.entityIsNearby(customer?.mp)) return;

		offers.create(player, customer, {
			onAccept: this.healTarget.bind(this, player, customer)
		});
		offers.showWithExpires(
			customer,
			player.mp.id,
			`Медик предлагает лечение за ${this.price}$`
		);
	}

	private async healTarget(player: Player, target: Player) {
		await money.change(target, 'cash', -this.price, 'buy ems heal');
		await money.change(player, 'cash', this.price, 'ems healing');

		animations.playOnServer(player.mp, 'resuscitation');

		mp.players.withTimeout(
			player.mp,
			() => {
				animations.stopOnServer(player.mp);
				target.mp.health = 100;
			},
			5000
		);
		playerActions.setActionTimeout(player, 6000);
	}

	private reanimateTarget(player: Player) {
		if (!ems.isAlreadyAtWork(player)) {
			return hud.showNotification(player, 'error', 'Для начала начните смену');
		}
		playerActions.checkActionTimeout(player);

		const target = mp.players.get(player.target as PlayerMp);
		if (!player.entityIsNearby(target?.mp) || !target.dead) return;

		const medkit = inventoryHelper.findItem(player.inventory, 'medkit');
		if (!medkit) {
			return hud.showNotification(player, 'error', 'У вас нет аптечки');
		}

		inventoryHelper.removeItem(player.inventory, medkit);
		animations.playOnServer(player.mp, 'resuscitation');

		mp.players.withTimeout(
			player.mp,
			() => {
				animations.stopOnServer(player.mp);

				if (target.dead) playerDeath.ressurect(target);
			},
			15000
		);
		playerActions.setActionTimeout(player, 18000);
	}
}

const emsHealth = new EmsHealth();
