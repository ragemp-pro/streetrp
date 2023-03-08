import { isNumber } from 'lodash';
import hud from 'helpers/hud';
import money from 'helpers/money';
import playerInventory from 'player/inventory';
import tasks from 'awards/tasks';
import Service from './service';

const prices = {
	bottle: 70,
	dagger: 500,
	bat: 400,
	golfclub: 380,
	knuckle: 800,
	knife: 350,
	pistol: 2000,
	pistol50: 2500,
	snspistol: 1500,
	vintagepistol: 2800,
	revolver: 5000,
	doubleaction: 3500,
	machinepistol: 6000,
	microsmg: 6300,
	minismg: 6800,
	smg: 7000,
	combatpdw: 7500,
	assaultsmg: 8000,
	compactrifle: 10000,
	assaultrifle: 12000,
	carbinerifle: 12000,
	advancedrifle: 15000,
	specialcarbine: 18000,
	sawnoffshotgun: 10000,
	pumpshotgun: 11500,
	assaultshotgun: 13000,
	heavyshotgun: 15000,
	musket: 25000,
	dbshotgun: 12000,
	'9mm': 2,
	'7.62mm': 5,
	'12gauge': 7
};

class Weapons extends Service {
	constructor() {
		super('weapons', { name: 'Ammu-Nation', model: 110, color: 4 });
	}

	protected subscribeToEvents() {
		mp.events.subscribe({
			'Weapons-Buy': this.buyWeapon.bind(this),
			'Weapons-BuyAmmo': this.buyAmmo.bind(this)
		});
	}

	onKeyPress(player: Player) {
		if (player.mp.vehicle) return;

		if (!player.hasLicense('weapon')) {
			return hud.showNotification(player, 'error', 'У вас нет лицензии на оружие');
		}

		player.callEvent('Weapons-ShowMenu', prices);
	}

	private getPriceOfAmmo(ammo: string, amount: number) {
		if (!prices[ammo] || !isNumber(amount) || amount <= 0 || amount > 1000) {
			throw new SilentError('wrong ammo data');
		}

		return prices[ammo] * amount;
	}

	private async buyAmmo(
		player: Player,
		type: string,
		amount: number,
		payment: PaymentType
	) {
		const price = this.getPriceOfAmmo(type, amount);
		const item = { name: type, amount };

		playerInventory.checkEnoughSlots(player, [item]);

		await money.change(player, payment, -price, 'weapons ammo');
		await playerInventory.addItem(player, item);
	}

	private async buyWeapon(player: Player, weapon: string, payment: PaymentType) {
		const price = prices[weapon];

		if (!price) throw new SilentError('wrong weapon name');

		const item = {
			name: weapon,
			amount: 1
		};

		playerInventory.checkEnoughSlots(player, [item]);

		await money.change(player, payment, -price, 'weapons');
		await playerInventory.addItem(player, item);

		await tasks.implement(player, 'buy_weapon');
	}
}

const service = new Weapons();
