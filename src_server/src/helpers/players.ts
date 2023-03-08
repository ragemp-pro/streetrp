import { isNumber } from 'lodash';
import events from './events';
import PlayerEntity from '../player/player';

class Players {
	private items: Map<number, Player>;

	private authorized: Map<string, Player>;

	constructor() {
		this.items = new Map();
		this.authorized = new Map();

		this.init();
	}

	get(player: PlayerMp | number) {
		const target = isNumber(player) ? mp.players.at(player) : player;

		return mp.players.exists(target) ? this.items.get(target.id) : null;
	}

	getByDbId(id: string) {
		return id && this.authorized.get(id.toString());
	}

	toCustomArray(authorized = true) {
		return Array.from(authorized ? this.authorized.values() : this.items.values());
	}

	withTimeout(player: PlayerMp, callback: Function, duration: number) {
		setTimeout(() => {
			try {
				if (!mp.players.exists(player) || !mp.players.get(player)) return;

				callback();
			} catch (err) {
				console.log(err);
			}
		}, duration);
	}

	delete(id: number) {
		const player = this.items.get(id);

		if (player) {
			this.items.delete(id);
			this.authorized.delete(player.dbId);
		}
	}

	callInStream(position: Vector3Mp, event: string, args?: any) {
		mp.players.forEachInRange(
			position,
			mp.config['stream-distance'],
			(player: PlayerMp) => events.callClient(player, event, args)
		);
	}

	authorize(player: Player) {
		if (!player.dbId) return;

		this.authorized.set(player.dbId, player);
		player.mp.setOwnVariable('authorized', true);
		player.loginAt = new Date().toISOString();
	}

	private add(player: PlayerMp) {
		this.items.set(player.id, new PlayerEntity(player));
	}

	private init() {
		mp.events.add({
			playerJoin: this.add.bind(this)
		});

		mp.players.get = this.get.bind(this);
		mp.players.getByDbId = this.getByDbId.bind(this);

		mp.players.delete = this.delete.bind(this);
		mp.players.withTimeout = this.withTimeout.bind(this);
		mp.players.callInStream = this.callInStream.bind(this);
		mp.players.toCustomArray = this.toCustomArray.bind(this);
	}
}

export default new Players();
