import hud from 'helpers/hud';
import offers from 'helpers/offers';
import money from 'helpers/money';
import owning from './owning';
import entities from './entities';
import building from './building';
import businessCtrl from './index';

type Data = {
	id: number;
	price: number;
};

class BusinessTrade {
	constructor() {
		mp.events.subscribe({
			'BusinessTrade-ShowMenu': this.showMenu.bind(this),
			'BusinessTrade-ShowOffer': this.offerToBuy.bind(this),
			'BusinessTrade-GetData': this.getData.bind(this)
		});
	}

	private showMenu(player: Player) {
		const { businesses } = player;
		if (!businesses.length) {
			return hud.showNotification(player, 'error', 'У вас пока нет недвижимости', true);
		}

		player.callEvent('BusinessTrade-ShowMenu', { items: businesses });
	}

	private offerToBuy(player: Player, data: Data) {
		const { id: business, price } = data;
		const customer = mp.players.get(player.target as PlayerMp);

		if (!customer || price <= 0 || price > 1000000000) return;

		offers.create(player, customer, {
			onAccept: this.confirm.bind(this, customer, player, business, price)
		});

		customer.callEvent('BusinessTrade-ShowMenu', {
			seller: player.getName(),
			items: [business],
			price
		});
	}

	private async confirm(player: Player, seller: Player, id: number, price: number) {
		const entity = entities.getItem(seller, id);
		if (!owning.isOwner(seller, entity?.owner)) {
			throw new SilentError("seller isn't owner of this business");
		}

		businessCtrl.checkCanBuy(player);

		await money.change(player, 'cash', -price, 'buy business');
		await money.change(seller, 'cash', price, 'sell business');
		await owning.setOwner(player, entity);

		businessCtrl.changePlayerData(seller, entity);
		businessCtrl.changePlayerData(player, entity);

		building.toggleBlip(entity, seller);
		building.toggleBlip(entity, player);
	}

	private getData(player: Player, id: number) {
		const entity = entities.getItem(player, id);

		return (
			entity && {
				govPrice: entity.price,
				income: entity.income,
				name: entity.name
			}
		);
	}
}

const trade = new BusinessTrade();
