import army from 'factions/army';
import ArmySupply from './army';
import GovernmentSupply from './government';

export interface Strategy {
	materialsLeft: number;

	notifyAboutOrder(): void;
	showPoints(): void;
	hidePoints(): void;
	changeMaterials(amount: number): void;
}

class MaterialsSupply {
	private strategy?: Strategy;

	constructor() {
		mp.events.subscribe({
			'Factions-OrderMaterials': this.createOrder.bind(this)
		});
	}

	get inProgress() {
		return this.strategy?.materialsLeft > 0;
	}

	setStrategy(strategy: Strategy) {
		this.strategy = strategy;
	}

	async createOrder(player: Player, forArmy: boolean, amount: number) {
		if (!army.isLeader(player)) throw new SilentError('access denied');

		if (this.inProgress || amount > 1_000_00) {
			return mp.events.reject('Поставка материалов уже в процессе');
		}
		if (!forArmy && army.warehouse.current < amount) {
			return mp.events.reject('Недостаточно материалов на складе');
		}

		this.setStrategy(forArmy ? new ArmySupply() : new GovernmentSupply());

		if (!forArmy) await army.warehouse.changeMaterials(-amount);
		this.strategy.changeMaterials(amount);

		this.startDelivering();
	}

	private startDelivering() {
		this.strategy.showPoints();
		this.strategy.notifyAboutOrder();
	}
}

export default new MaterialsSupply();
