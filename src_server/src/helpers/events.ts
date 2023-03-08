import rpc from 'rage-rpc';
import { isArray } from 'lodash';
import { ClientError, SilentError } from 'utils/errors';
import logger from 'utils/logger';

const eventLogs = logger.create('events');

class Events {
	constructor() {
		this.setup();
	}

	async callClient(player: PlayerMp, name: string, args?: any, pending = false) {
		const promise = rpc.callClient(player, name, args, { noRet: !pending });

		if (pending) {
			const response = await promise;

			return response?.err ? Promise.reject(response?.err) : response;
		}
	}

	reject(reason: any) {
		return Promise.reject(new ClientError(reason));
	}

	subscribe(
		events: { [name: string]: (player: Player, ...args) => any },
		authorized = true
	) {
		Object.entries(events).forEach(([name, callback]) =>
			rpc.register(name, async (data: null | any[], info) => {
				const player = mp.players.get(info.player as PlayerMp);

				if (!player || player.performing || (authorized && !player.dbId)) {
					eventLogs.info(name);
					return new Promise((res, rej) => {});
				}

				try {
					player.performing = true;

					const result = isArray(data)
						? await callback(player, ...data)
						: await callback(player, data);

					player.performing = false;

					return result;
				} catch (err) {
					player.performing = false;

					if (err instanceof ClientError) return { err: { msg: err.message } };
					if (!(err instanceof SilentError) && !err.field) {
						console.error(err, `rpc event error "${name}"`);
					}

					return { err };
				}
			})
		);
	}

	subscribeToDefault(events: { [name: string]: (...args) => void }, authorized = true) {
		Object.entries(events).forEach(([name, callback]) => {
			mp.events.add(name, async (...args: any[]) => {
				try {
					const [entity, ...data] = args;
					const player = mp.players.get(entity);

					if (authorized && !player?.dbId) return;

					await callback(player, ...data);
				} catch (err) {
					if (err instanceof SilentError) return;

					console.error(err, `default event error "${name}"`);
				}
			});
		});
	}

	private setup() {
		global.SilentError = SilentError as typeof Error;

		mp.events.subscribe = this.subscribe.bind(this);
		mp.events.subscribeToDefault = this.subscribeToDefault.bind(this);
		mp.events.reject = this.reject;
	}
}

export default new Events();
