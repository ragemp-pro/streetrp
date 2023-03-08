import chat from 'basic/chat';
import { Strategy } from './index';
import MaterialsLoading from './loading';

class GovernmentSupply implements Strategy {
	private materials: number;

	private loading: MaterialsLoading;

	constructor() {
		this.materials = 0;
		this.loading = new MaterialsLoading({ x: -2119.767, y: 3240.074, z: 32.81 }, this);
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

	notifyAboutOrder() {
		chat.sendSystem('Правительство заказало поставку материалов', 'fcba03');
	}

	changeMaterials(amount: number) {
		this.materials += amount;

		if (this.materials <= 0) this.stopSupply();
	}

	private stopSupply() {
		this.materials = 0;

		this.hidePoints();
		this.loading.stopLoading();
	}
}

export default GovernmentSupply;
