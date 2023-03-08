class Storage {
	private initialState: StorageState;

	private storage: StorageMp;

	constructor() {
		this.initialState = {
			login: '',
			binds: {},
			friends: [],
			chat: {
				opacity: 1
			},
			phone: {
				wallpaper: '0'
			}
		};

		this.init();
	}

	updateState(data: Partial<StorageState>) {
		Object.assign(this.storage.data, data);

		this.storage.flush();
	}

	private setInitialState() {
		if (Object.keys(this.storage.data).length) return;

		this.updateState(this.initialState);
	}

	private init() {
		this.storage = mp.storage;

		mp.storage.update = this.updateState.bind(this);

		this.setInitialState();
	}
}

export default new Storage();
