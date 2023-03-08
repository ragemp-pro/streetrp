import { isNumber } from 'lodash';
import BusinessModel from 'models/Business';
import money from 'helpers/money';
import entities, { Entity } from './entities';
import owning from './owning';
import businessCtrl from './index';

class BusinessTax {
	private maxDays = 12;

	private taxPercent = 0.025;

	constructor() {
		mp.events.subscribe({
			'Business-GetTax': (player: Player) => {
				return this.getSumByIndex(player, player.businesses[0]);
			}
		});
	}

	getTax(data: Entity) {
		const { price } = data;
		return (price / 100) * this.taxPercent;
	}

	async pay(player: Player, index: number, amount: any) {
		const entity = entities.getItem(player, index);
		const days = parseInt(amount, 10);

		if (!owning.isOwner(player, entity?.owner)) {
			return mp.events.reject('Вы не являетесь владельцем бизнеса');
		}

		if (!isNumber(days) || days <= 0 || entity.paid + days > this.maxDays) {
			return mp.events.reject(
				`Дом можно оплатить только на ${this.maxDays - entity.paid} дней`
			);
		}

		await money.change(
			player,
			'bank',
			-this.getSumByIndex(player, index) * days,
			'business tax'
		);
		await entities.update(entity, { paid: entity.paid + days });
	}

	async take() {
		const operations = [];

		entities.items.forEach((entity) => {
			if (!entity?.owner) return;
			if (entity.paid <= 0) return businessCtrl.withdraw(entity);

			operations.push({
				updateOne: {
					filter: { _id: entity.id },
					update: {
						$inc: { paid: -1 }
					}
				}
			});

			entity.paid--;
		});

		if (operations.length) await BusinessModel.bulkWrite(operations);
	}

	private getSumByIndex(player: Player, index: number) {
		const entity = entities.getItem(player, index);
		return entity ? this.getTax(entity) : 0;
	}
}

export default new BusinessTax();
