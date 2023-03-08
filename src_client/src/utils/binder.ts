import { debounce } from 'lodash';
import keycode from 'keycode';

type Bind = {
	key?: string;
	hold: boolean;
	handler: Function;
};

class Binder {
	private binds: Map<string, Bind>;

	constructor() {
		this.binds = new Map();

		mp.events.subscribe({
			'Binder-Rebind': this.rebind.bind(this)
		});
	}

	getBind(name: string) {
		return this.binds.get(name);
	}

	bind(action: string, key: string, handler: Function, cursor = false, hold = false) {
		if (this.isDeclared(key)) throw new Error('Bind has been declared');

		const newKey = mp.storage.data.binds[action] ?? key;
		const wrappedHandler = cursor !== null ? this.wrapHandler(handler, cursor) : handler;

		mp.keys.bind(+keycode(newKey), hold, wrappedHandler);

		// temp crutch
		if (action === 'mic') mp.keys.bind(+keycode(newKey), false, wrappedHandler);

		mp.storage.update({ binds: { ...mp.storage.data.binds, [action]: newKey } });

		this.binds.set(action, { hold, handler: wrappedHandler, key: newKey });
	}

	unbind(action: string, key: string) {
		if (!this.isDeclared(key)) throw new Error('Bind has not been declared');

		mp.keys.unbind(+keycode(key), false);
		mp.storage.update({ binds: { ...mp.storage.data.binds, [action]: null } });

		this.binds.set(action, { ...this.getBind(action), key: null });
	}

	wrapHandler(handler: Function, cursor: boolean) {
		return debounce(() => mp.gui.cursor.visible === cursor && handler(), 250, {
			leading: true,
			trailing: false
		});
	}

	private rebind(action: string, key: string) {
		const bind = this.getBind(action);

		if (!bind || this.isDeclared(key)) {
			return mp.events.reject('Bind not exists or has been declared');
		}

		mp.keys.unbind(+keycode(bind.key), bind.hold, bind.handler);
		mp.keys.bind(+keycode(key), bind.hold, bind.handler);

		// temp crutch
		if (action === 'mic') {
			mp.keys.unbind(+keycode(bind.key), false, bind.handler);
			mp.keys.bind(+keycode(key), false, bind.handler);
		}

		mp.storage.update({ binds: { ...mp.storage.data.binds, [action]: key } });

		this.binds.set(action, { ...bind, key });
	}

	private isDeclared(key: string) {
		const bind = Array.from(this.binds).find(([, item]) => key === item.key);

		return !!bind;
	}
}

export default new Binder();
