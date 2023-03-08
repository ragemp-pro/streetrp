import hud from 'helpers/hud';
import animations from 'helpers/animations';
import money from 'helpers/money';
import offers from 'helpers/offers';
import tasks from 'awards/tasks';

class PlayerActions {
	constructor() {
		mp.events.subscribe({
			'Player-FriendOffer': this.friendOffer.bind(this),
			'Player-GiveCash': this.giveCash.bind(this)
		});
	}

	setActionTimeout(player: Player, ms: number) {
		player.actionTimeout = Date.now() + ms;
	}

	checkActionTimeout(player: Player) {
		if (player.actionTimeout > Date.now()) {
			hud.showNotification(player, 'error', 'Слишком часто', true);

			throw new SilentError('action timeout is active');
		}
	}

	private addFriend(player: Player, target: Player) {
		animations.playOnServer(player.mp, 'handshake', 4500);
		animations.playOnServer(target.mp, 'handshake', 4500);

		player.callEvent('PlayerFriends-Add', target.mp.getVariable('uid'));
		target.callEvent('PlayerFriends-Add', player.mp.getVariable('uid'));

		tasks.implement(player, 'handshake');
	}

	private friendOffer(player: Player) {
		const customer = mp.players.get(player.target as PlayerMp);
		if (!player.entityIsNearby(customer?.mp)) return;

		offers.create(player, customer, {
			onAccept: this.addFriend.bind(this, player, customer)
		});
		offers.showWithExpires(customer, player.mp.id, 'Хочет пожать Вам руку');
	}

	private async giveCash(player: Player, value: any) {
		const sum = parseInt(value, 10);
		const recipient = mp.players.get(player.target as PlayerMp);

		if (!player.entityIsNearby(recipient?.mp)) {
			throw new SilentError("recipient doesn't exists");
		}
		if (sum <= 0 || sum > 10000000) throw new SilentError('wrong sum');

		await money.change(player, 'cash', -sum, 'give cash');
		await money.change(recipient, 'cash', sum, 'got cash');

		await tasks.implement(player, 'give_cash');
	}
}

export default new PlayerActions();
