import rpc from 'rage-rpc';
import { isArray } from 'lodash';

class Events {
	constructor() {
		mp.events.subscribe = this.subscribe;
		mp.events.subscribeToDefault = this.subscribeToDefault;
		mp.events.subscribeToData = this.subscribeToData;

		mp.events.callServer = this.callServer;
		mp.events.callBrowser = this.callBrowser;
		mp.events.reject = this.reject;
	}

	subscribe(events: { [name: string]: (...args) => any }) {
		Object.entries(events).forEach(([name, callback]) =>
			rpc.register(name, (data: any[]) => {
				return isArray(data) ? callback(...data) : callback(data);
			})
		);
	}

	subscribeToDefault(events: { [name: string]: (...args) => void }) {
		Object.entries(events).forEach(([name, callback]) => {
			mp.events.add(name, (...args: any[]) => callback(...args));
		});
	}

	subscribeToData(
		events: { [name: string]: (entity: EntityMp, data: any, oldData?: any) => void },
		stream = true
	) {
		Object.entries(events).forEach(([name, callback]) => {
			mp.events.addDataHandler(name, (entity: EntityMp, data: any, oldData?: any) => {
				if (
					!stream ||
					(stream && entity.handle && mp.game.entity.isAnEntity(entity.handle))
				) {
					callback(entity, data, oldData);
				}
			});
		});
	}

	reject(error: any) {
		return new Promise((resolve, reject) => setTimeout(() => reject(error), 1));
	}

	async callServer(event: string, args?: any, pending = true) {
		const promise = rpc.callServer(event, args, { noRet: !pending });

		if (pending) {
			const response = await promise;

			return response?.err ? this.reject(response.err) : response;
		}
	}

	async callBrowser(event: string, args?: any, pending = true, browser?: BrowserMp) {
		const promise = rpc.callBrowser(browser ?? mp.browsers.at(0), event, args, {
			noRet: !pending
		});

		if (pending) {
			const response = await promise;

			return response?.err ? this.reject(response.err) : response;
		}
	}
}

export default new Events();
