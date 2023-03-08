import rpc from 'rage-rpc';
import tasks from 'awards/tasks';
import contacts from './contacts';

class PhoneCalls {
	constructor() {
		this.subscribeToEvents();
	}

	isHaveCall(player: Player) {
		return !!player.phone.interlocutor;
	}

	private getPlayerByNumber(phoneNumber: string) {
		const player = mp.players
			.toArray()
			.find((item) => mp.players.get(item).phone?.number === phoneNumber);

		return mp.players.get(player);
	}

	private async call(player: Player, phoneNumber: string) {
		if (!player.phone.number || player.phone.number === phoneNumber) {
			throw new SilentError('wrong phone number');
		}

		const recipient = this.getPlayerByNumber(phoneNumber);

		if (
			!recipient ||
			this.isHaveCall(recipient) ||
			contacts.isBlocked(recipient, player.phone.number)
		) {
			throw new SilentError('subscriber unavailable');
		}

		player.phone.interlocutor = recipient.mp;
		recipient.phone.interlocutor = player.mp;

		await rpc.callBrowsers(recipient.mp, 'Phone-IncomingCall', player.phone.number);

		await tasks.implement(player, 'phone_call');
	}

	private acceptCall(player: Player) {
		const interlocutor = mp.players.get(player.phone.interlocutor);

		if (!interlocutor) throw new SilentError("caller doesn't exists");

		interlocutor.callEvent('Phone-StartCall', player.mp);
		player.callEvent('Phone-StartCall', interlocutor.mp);
	}

	private declineCall(player: Player) {
		const interlocutor = mp.players.get(player.phone.interlocutor);

		if (interlocutor) {
			interlocutor.callEvent('Phone-StopCall');
			interlocutor.phone.interlocutor = null;
		}

		player.callEvent('Phone-StopCall');
		player.phone.interlocutor = null;
	}

	private subscribeToEvents() {
		mp.events.subscribe({
			'Phone-Call': this.call.bind(this),
			'Phone-AcceptCall': this.acceptCall.bind(this),
			'Phone-DeclineCall': this.declineCall.bind(this)
		});
	}
}

export default new PhoneCalls();
