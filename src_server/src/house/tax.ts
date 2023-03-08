import { isNumber } from 'lodash';
import HouseModel from 'models/House';
import money from 'helpers/money';
import houses from 'data/houses.json';
import houseCtrl from './index';
import entities from './entities';
import owning from './owning';

class HouseTax {
	private maxDays = 12;

	constructor() {
		mp.events.subscribe({
			'House-GetTax': this.getSumByIndex.bind(this)
		});
	}

	getSumByType(type: string) {
		const data = houses[type];

		return (data?.tax as number) ?? 0;
	}

	async pay(player: Player, index: number, amount: any) {
		const house = entities.getItem(player, index);
		const days = parseInt(amount, 10);

		if (!owning.isOwner(player, house?.owner)) {
			return mp.events.reject('Вы не являетесь владельцем дома');
		}

		if (!isNumber(days) || days <= 0 || house.paid + days > this.maxDays) {
			return mp.events.reject(
				`Дом можно оплатить только на ${this.maxDays - house.paid} дней`
			);
		}

		await money.change(
			player,
			'bank',
			-this.getSumByType(house.type) * days,
			'house tax'
		);

		await entities.update(house, { paid: house.paid + days });
	}

	async take() {
		const operations = [];

		entities.items.forEach((house) => {
			if (!house?.owner) return;

			if (house.paid <= 0) return houseCtrl.withdraw(house);

			operations.push({
				updateOne: {
					filter: { _id: house.id },
					update: {
						$inc: { paid: -1 }
					}
				}
			});

			house.paid--;
		});

		if (operations.length) await HouseModel.bulkWrite(operations);
	}

	private getSumByIndex(player: Player, index: number) {
		const house = entities.getItem(player, index);

		return this.getSumByType(house?.type);
	}
}

export default new HouseTax();
