import CharModel from 'models/Character';
import money from 'helpers/money';
import character, { Appearance } from 'player/character';
import clothes from 'player/clothes';
import Service from './service';

type Data = Pick<Appearance, 'gender' | 'skindata' | 'facedata'>;

const price = 12000;

class Surgeon extends Service {
	constructor() {
		super('surgeon', null);
	}

	protected subscribeToEvents() {
		mp.events.subscribe({
			'Surgeon-Buy': this.buy.bind(this),
			'Surgeon-Exit': this.onExit.bind(this)
		});
	}

	async onKeyPress(player: Player) {
		if (player.mp.vehicle) return;

		const appearance = await character.getPlayerAppearance(player);

		player.cache.appearance = appearance;
		player.togglePrivateDimension();

		clothes.clear(player);

		player.callEvent('Surgeon-ShowMenu', [
			{
				gender: appearance.gender,
				skindata: appearance.skindata,
				facedata: appearance.facedata
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
		await money.change(player, payment, -price, 'surgeon');

		await this.changeAppearance(player, data);
	}
}

const service = new Surgeon();
