import hud from 'helpers/hud';
import offers from 'helpers/offers';
import money from 'helpers/money';
import owning from './owning';
import entities from './entities';
import houseCtrl from './index';
import building from './building';

type Data = {
	id: number;
	price: number;
};

class HouseTrade {
	constructor() {
		mp.events.subscribe({
			'HouseTrade-ShowMenu': this.showMenu.bind(this),
			'HouseTrade-ShowOffer': this.offerToBuy.bind(this),
			'HouseTrade-GetData': this.getData.bind(this)
		});
	}

	private showMenu(player: Player) {
		const { houses } = player;

		if (!houses.length) {
			return hud.showNotification(player, 'error', 'У вас пока нет недвижимости', true);
		}

		player.callEvent('HouseTrade-ShowMenu', { houses });
	}

	private offerToBuy(player: Player, data: Data) {
		const { id: house, price } = data;
		const customer = mp.players.get(player.target as PlayerMp);

		if (!customer || price <= 0 || price > 1000000000) return;

		offers.create(player, customer, {
			onAccept: this.confirm.bind(this, customer, player, house, price)
		});

		customer.callEvent('HouseTrade-ShowMenu', {
			seller: player.getName(),
			houses: [house],
			price
		});
	}

	private async confirm(player: Player, seller: Player, id: number, price: number) {
		const house = entities.getItem(seller, id);

		if (!owning.isOwner(seller, house?.owner)) {
			throw new SilentError("seller isn't owner of this house");
		}

		houseCtrl.checkCanBuy(player);

		await money.change(player, 'cash', -price, 'buy house');
		await money.change(seller, 'cash', price, 'sell house');

		await owning.setOwner(player, house);

		houseCtrl.changePlayerData(seller, house);
		houseCtrl.changePlayerData(player, house);

		building.toggleBlip(house, seller);
		building.toggleBlip(house, player);
	}

	private getData(player: Player, id: number) {
		const house = entities.getItem(player, id);

		return (
			house && {
				type: house.type,
				govPrice: houseCtrl.getPrice(house),
				garage: entities.getVehicleSlots(house),
				safe: entities.getInventoryCapacity(house).slots
			}
		);
	}
}

const trade = new HouseTrade();
