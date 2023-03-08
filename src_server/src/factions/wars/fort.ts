import chat from 'basic/chat';
import MaterialsLoading from './loading';

class FortWar {
	private materials: number;

	private loading: MaterialsLoading;

	constructor() {
		this.materials = 0;
		this.loading = new MaterialsLoading({ x: -2131.956, y: 3265.097, z: 32.811 }, this);
	}

	get isStarted() {
		return this.materials > 0;
	}

	start() {
		if (this.isStarted) throw new SilentError('war is already started');

		this.materials = 15_000;

		this.loading.togglePoint(true);
		this.notifyFactions('Объявлено нападание на Fort Zancudo');
	}

	end() {
		this.materials = 0;

		this.loading.togglePoint(false);
		this.loading.stopLoading();
		this.notifyFactions('Нападание на Fort Zancudo закончено.');
	}

	changeMaterials(amount: number) {
		this.materials += amount;

		if (this.materials <= 0) this.end();
	}

	private notifyFactions(message: string) {
		chat.sendSystem(message);
	}
}

export default new FortWar();
