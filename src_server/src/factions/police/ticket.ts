import money from 'helpers/money';
import offers from 'helpers/offers';
import police from 'factions/police';

type TicketData = {
	sum: number;
	reason: string;
};

class Ticket {
	private maxSum: number;

	constructor() {
		this.maxSum = 12000;

		mp.events.subscribe({
			'Police-WriteTicket': this.writeForPlayer.bind(this)
		});
	}

	private async writeForPlayer(player: Player, userId: string, data: TicketData) {
		if (!police.isAlreadyAtWork(player)) throw new SilentError('access denied');

		const target = mp.players.getByDbId(userId);
		const sum = parseInt(data?.sum as any, 10);

		if (!target || sum <= 0 || sum > this.maxSum) {
			throw new SilentError('wrong data');
		}

		offers.create(player, target, {
			onAccept: this.payTicket.bind(this, target, sum)
		});
		offers.showWithExpires(
			target,
			player.mp.id,
			`Предлагает оплатить штраф на сумму ${sum}$. Причина: ${data.reason}`
		);
	}

	private async payTicket(customer: Player, sum: number) {
		await money.change(customer, 'cash', -sum, 'pay ticket');
		await police.money.changeBalance(sum);
	}
}

const ticket = new Ticket();
