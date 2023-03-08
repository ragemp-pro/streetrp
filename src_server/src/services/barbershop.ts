import CharModel from 'models/Character';
import money from 'helpers/money';
import clothes from 'player/clothes';
import character, { Appearance } from 'player/character';
import tasks from 'awards/tasks';
import Service from './service';

type Data = Pick<Appearance, 'headOverlay' | 'hair' | 'eyeColor'>;

const price = 1200;

class Barbershop extends Service {
	constructor() {
		super('barbershop', { name: 'Парикмахерская', model: 71, color: 5 });
	}

	protected subscribeToEvents() {
		mp.events.subscribe({
			'Barbershop-Buy': this.buy.bind(this),
			'Barbershop-Exit': this.onExit.bind(this)
		});
	}

	async onKeyPress(player: Player) {
		if (player.mp.vehicle) return;

		const appearance = await character.getPlayerAppearance(player);

		player.cache.appearance = appearance;
		player.togglePrivateDimension();

		player.callEvent('Barbershop-ShowMenu', [
			{
				gender: player.gender,
				headOverlay: appearance.headOverlay,
				hair: appearance.hair,
				eyeColor: appearance.eyeColor
			},
			price
		]);
	}

	private onExit(player: Player) {
		if (!player.cache.appearance) return;

		character.load(player, player.cache.appearance);
		clothes.load(player);
		player.togglePrivateDimension();

		delete player.cache.appearance;
	}

	private async changeAppearance(player: Player, data: Data) {
		const appearance = {};

		Object.entries(data).forEach(([prop, value]) => {
			appearance[`appearance.${prop}`] = value;
		});

		await CharModel.findByIdAndUpdate(player.dbId, { $set: appearance });

		player.cache.appearance = { ...player.cache.appearance, ...data };
	}

	private async buy(player: Player, data: Data, payment: PaymentType) {
		await money.change(player, payment, -price, 'barbershop');

		await this.changeAppearance(player, data);
		await tasks.implement(player, 'barbershop');
	}
}

const service = new Barbershop();
