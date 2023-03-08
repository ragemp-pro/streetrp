class Doors {
	private items: Map<number, boolean>;

	constructor() {
		this.items = new Map();

		mp.events.subscribe(
			{
				'Doors-GetState': this.getItemsState.bind(this)
			},
			false
		);
		mp.events.subscribe({
			'Doors-Toggle': this.toggle.bind(this)
		});
	}

	toggle(player: Player, hash: number, state: boolean) {
		this.items.set(hash, !state);

		mp.players.call('doorChangeState', [hash, !state]);
	}

	private getItemsState() {
		return Object.fromEntries(this.items);
	}
}

export default new Doors();
