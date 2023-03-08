import { pull } from 'lodash';
import VehicleModel from 'models/Vehicle';
import hud from 'helpers/hud';
import offers from 'helpers/offers';
import money from 'helpers/money';
import tuning, { Tuning } from './tuning';
import owning from './owning';

type Data = {
	price: number;
	model: string;
	govNumber: string;
	tuning: Partial<Tuning>;
	owners: number;
};

class VehicleTrade {
	constructor() {
		mp.events.subscribe({
			'VehicleTrade-ShowMenu': this.showMenu.bind(this),
			'VehicleTrade-ShowOffer': this.offerToBuy.bind(this),
			'VehicleTrade-GetData': this.getData.bind(this)
		});
	}

	private showMenu(player: Player) {
		const { vehicles, target } = player;

		if (!vehicles.length || !target) {
			return hud.showNotification(player, 'error', 'У вас пока нет транспорта', true);
		}

		player.callEvent('VehicleTrade-ShowMenu', { vehicles });
	}

	private offerToBuy(player: Player, vehicle: string, data: Data) {
		if (data.owners >= 3) {
			return hud.showNotification(
				player,
				'error',
				'Достигнут лимит владельцев у данного ТС',
				true
			);
		}

		const customer = mp.players.get(player.target as PlayerMp);
		const { price } = data;

		if (!customer || price <= 0 || price > 1000000000) return;

		offers.create(player, customer, {
			onAccept: this.confirm.bind(this, customer, player, vehicle, price)
		});

		customer.callEvent('VehicleTrade-ShowMenu', { ...data, seller: player.getName() });
	}

	private async confirm(
		player: Player,
		seller: Player,
		vehicleId: string,
		price: number
	) {
		if (!seller.vehicles.includes(vehicleId) || !player.isEnoughVehicleSlots()) {
			return mp.events.reject('Недостаточно мест для новых ТС');
		}

		const vehicle = mp.vehicles.getById(vehicleId);
		const doc = await VehicleModel.findById(vehicleId).select({ oldOwners: 1, owner: 1 });

		await this.exchangeMoney(seller, player, price);

		doc.oldOwners.push(doc.owner);
		doc.owner = player.dbId;
		await doc.save();

		if (vehicle) owning.setOwner(vehicle, { player: player.dbId });

		pull(seller.vehicles, vehicleId);
		player.vehicles.push(vehicleId);
	}

	private async exchangeMoney(seller: Player, buyer: Player, sum: number) {
		await money.change(buyer, 'cash', -sum, 'sell vehicle');
		await money.change(seller, 'cash', sum, 'buy vehicle');
	}

	private async getData(player: Player, id: string) {
		const data = await VehicleModel.findById(id)
			.select({ _id: 0, name: 1, govNumber: 1, tuning: 1, oldOwners: 1 })
			.lean();

		return (
			data && {
				model: data.name,
				govNumber: data.govNumber || 'Нет',
				owners: data.oldOwners.length,
				tuning: tuning.getMainItems(data.tuning || {})
			}
		);
	}
}

const trade = new VehicleTrade();
