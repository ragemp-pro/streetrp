import hud from 'helpers/hud';
import ems from 'factions/ems';

type Call = {
	medic?: string;
	position: Vector3Mp;
	createdAt: string;
};

class EmsCalls {
	private calls: Map<string, Call>;

	constructor() {
		this.calls = new Map();

		mp.events.subscribe({
			'EmsCalls-GetList': this.getCallsList.bind(this),
			'EmsCalls-Accept': this.acceptCall.bind(this),
			'EmsCalls-Create': this.createCall.bind(this)
		});
	}

	cancelCall(id: string) {
		const call = this.getCall(id);
		if (!call) return;

		const medic = mp.players.getByDbId(call.medic);
		if (medic) mp.blips.delete(medic, 'Чекпоинт');

		this.calls.delete(id);
	}

	private getCall(id: string) {
		return this.calls.get(id);
	}

	private getCallsList(player: Player) {
		if (!ems.inFaction(player)) throw new SilentError('access denied');

		return Array.from(this.calls.entries()).flatMap(
			([id, { medic, position, createdAt }]) => {
				const victim = mp.players.getByDbId(id);

				return !medic && victim
					? { id, createdAt, victim: victim.getName(), dist: player.mp.dist(position) }
					: [];
			}
		);
	}

	private hasAcceptedCall(player: Player) {
		return (
			Array.from(this.calls.values()).findIndex((call) => call.medic === player.dbId) > -1
		);
	}

	private createCall(player: Player) {
		if (this.calls.has(player.dbId)) throw new SilentError('call is already created');

		this.calls.set(player.dbId, {
			position: player.mp.position,
			createdAt: new Date().toISOString()
		});
		this.notifyMedics('Поступил новый вызов, езжайте скорее!');
	}

	private acceptCall(player: Player, id: string) {
		const call = this.getCall(id);

		if (!call) return mp.events.reject('Этот вызов уже принят');
		if (this.hasAcceptedCall(player)) return mp.events.reject('Вы уже приняли вызов');

		const victim = mp.players.getByDbId(id);

		if (victim) {
			this.calls.set(id, { ...call, medic: player.dbId });

			mp.blips.create(call.position, { model: 0, color: 1, name: 'Чекпоинт' }, player);
			hud.showNotification(
				victim,
				'info',
				'Госпиталь принял ваш вызов, ожидайте скорую помощь'
			);
		}
	}

	private notifyMedics(message: string) {
		ems.getPlayers(true).forEach((medic) => hud.showNotification(medic, 'info', message));
	}
}

export default new EmsCalls();
