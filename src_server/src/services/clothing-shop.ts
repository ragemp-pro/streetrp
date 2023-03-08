import money from 'helpers/money';
import ClothesModel from 'models/Clothes';
import playerInventory from 'player/inventory';
import playerClothes, { ClothesName } from 'player/clothes';
import tasks from 'awards/tasks';
import Service from './service';

type Clothes = {
	[category in ClothesName]?: [number, number][];
};

type Product = {
	type: string;
	index: number;
	color: number;
};

class ClothingShop extends Service {
	private readonly clothes: {
		[gender in Player['gender']]: Clothes;
	};

	constructor() {
		super('clothing_shop', { name: 'Магазин одежды', model: 73, color: 24 });

		this.clothes = { male: {}, female: {} };
	}

	protected subscribeToEvents() {
		mp.events.subscribe({
			'ClothingShop-SetItem': this.setItem,
			'ClothingShop-GetClothes': this.getClothesByType.bind(this),
			'ClothingShop-Buy': this.buy.bind(this),
			'ClothingShop-Exit': this.onExit
		});
	}

	load(data: (PositionEx & { radius?: number })[]) {
		super.load(data);
		this.loadClothesList();
	}

	onKeyPress(player: Player) {
		if (player.mp.vehicle) return;

		player.togglePrivateDimension();
		player.callEvent('ClothingShop-ShowMenu');
	}

	setItem(player: Player, type: ClothesName, item: any, load = false) {
		if (load) playerClothes.load(player);

		playerClothes.set(player, type, item);
	}

	private onExit(player: Player) {
		playerClothes.load(player);
		player.togglePrivateDimension();
	}

	private getClothesOfGender(player: Player) {
		return this.clothes[player.gender];
	}

	private getClothesByType(player: Player, type: string) {
		return this.getClothesOfGender(player)[type];
	}

	private getPrice(clothes: Clothes, type: string, index: number) {
		return clothes[type][index][1] as number;
	}

	private prepareForInventory(clothes: Clothes, data: Product) {
		const { type, index, color } = data;
		const style: number = clothes[type][index][0];

		return {
			name: type,
			amount: 1,
			data: {
				style,
				color
			}
		};
	}

	private async buy(player: Player, product: Product, payment: PaymentType) {
		const clothes = this.getClothesOfGender(player);
		const item = this.prepareForInventory(clothes, product);

		playerInventory.checkEnoughSlots(player, [item]);

		const price = this.getPrice(clothes, product.type, product.index);

		await money.change(player, payment, -price, 'clothing shop');
		await playerInventory.addItem(player, item);

		await tasks.implement(player, 'buy_clothes');
	}

	private async loadClothesList() {
		const clothes = await ClothesModel.find({}).lean();

		clothes.forEach((item) => {
			const { gender, category, style, price } = item;
			const list = this.clothes[gender][category] || [];

			if (category === 'mask') {
				this.clothes.male[category] = [...list];
				this.clothes.female[category] = [...list];

				this.clothes.male[category].push([style, price]);
				this.clothes.female[category].push([style, price]);
			} else {
				this.clothes[gender][category] = [...list];
				this.clothes[gender][category].push([style, price]);
			}
		});
	}
}

const service = new ClothingShop();
