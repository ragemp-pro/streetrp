import zones from 'data/green-zones.json';

class GreenZone {
	private within = false;

	constructor() {
		this.init();
	}

	get playerWithin() {
		return this.within;
	}

	private create(x: number, y: number, range: number) {
		const colshape = mp.colshapes.newCircle(x, y, range);

		colshape.greenZone = true;
	}

	private onEnter(colshape: ColshapeMp) {
		if (colshape.greenZone) this.within = true;
	}

	private onExit(colshape: ColshapeMp) {
		if (colshape.greenZone) this.within = false;
	}

	private init() {
		zones.forEach(({ x, y, range }) => this.create(x, y, range));

		mp.events.subscribeToDefault({
			playerEnterColshape: this.onEnter.bind(this),
			playerExitColshape: this.onExit.bind(this)
		});
	}
}

export default new GreenZone();
