import { Strategy } from './index';
import MaterialsLoading from './loading';

class ArmySupply implements Strategy {
	private materials: number;

	private loading: MaterialsLoading;

	constructor() {
		this.materials = 0;
		this.loading = new MaterialsLoading({ x: 3049.985, y: -4762.813, z: 15.262 }, this);
	}

	get materialsLeft() {
		return this.materials;
	}

	showPoints() {
		this.loading.togglePoint(true);
	}

	hidePoints() {
		this.loading.togglePoint(false);
	}

	changeMaterials(amount: number) {
		this.materials += amount;

		if (this.materials <= 0) this.stopSupply();
	}

	notifyAboutOrder() {}

	private stopSupply() {
		this.materials = 0;

		this.hidePoints();
		this.loading.stopLoading();
	}
}

export default ArmySupply;
