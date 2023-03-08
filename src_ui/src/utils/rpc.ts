import { isArray } from 'lodash';
import rpc from 'rage-rpc';

class RPC {
	register(name: string, callback: (...args: any[]) => void) {
		rpc.register(name, (data: any[]) => {
			return isArray(data) ? callback(...data) : callback(data);
		});
	}

	unregister(name: string) {
		rpc.unregister(name);
	}

	async callServer(name: string, args?: any) {
		const response = await rpc.callServer(name, args);

		return response?.err ? Promise.reject(response.err) : response;
	}

	async callClient(name: string, args?: any) {
		const response = await rpc.callClient(name, args);

		return response?.err ? Promise.reject(response.err) : response;
	}
}

export default new RPC();
