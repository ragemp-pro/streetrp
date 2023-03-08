import CharModel from 'models/Character';
import money from 'helpers/money';
import clothes from 'player/clothes';
import character, { Appearance } from 'player/character';
import tasks from 'awards/tasks';
import Service from './service';

const prices = {
	torso: 3500,
	head: 1800,
	leftarm: 5000,
	rightarm: 5000,
	leftleg: 4500,
	rightleg: 4500
};

type Tattoo = Appearance['tattoos'][0];

class TattooShop extends Service {
	constructor() {
		super('tattoo_shop', { name: 'Тату салон', model: 75, color: 61 });
	}

	protected subscribeToEvents() {
		mp.events.subscribe({
			'TattooShop-Buy': this.buy.bind(this),
			'TattooShop-Exit': this.onExit
		});
	}

	async onKeyPress(player: Player) {
		if (player.mp.vehicle) return;

		const tattoos = await this.getPlayerTattoos(player);

		player.togglePrivateDimension();
		clothes.clear(player);

		player.callEvent('TattooShop-ShowMenu', [tattoos, prices]);
	}

	private onExit(player: Player) {
		clothes.load(player);
		player.togglePrivateDimension();
	}

	private async getPlayerTattoos(player: Player) {
		const data = await character.getPlayerAppearance(player);

		return data.tattoos as Tattoo[];
	}

	private async addTattoo(player: Player, data: Tattoo) {
		await CharModel.findByIdAndUpdate(player.dbId, {
			$push: { 'appearance.tattoos': data }
		});

		player.mp.setDecoration(mp.joaat(data.dict), mp.joaat(data.texture));
	}

	private async removeTattoo(player: Player, data: Tattoo) {
		const { appearance } = await CharModel.findByIdAndUpdate(
			player.dbId,
			{
				$pull: { 'appearance.tattoos': data }
			},
			{ new: true }
		)
			.select({ _id: 0, appearance: 1 })
			.lean();

		character.setTattoos(player.mp, appearance.tattoos);
	}

	private async buy(
		player: Player,
		action: 'add' | 'remove',
		position: string,
		tattoo: Tattoo,
		payment: PaymentType
	) {
		const price = prices[position];

		if (!price) throw new SilentError('incorrect data');

		await money.change(player, payment, -price, 'tattoo shop');

		if (action === 'add') await this.addTattoo(player, tattoo);
		else await this.removeTattoo(player, tattoo);

		await tasks.implement(player, 'tattoo');
	}
}

const service = new TattooShop();
