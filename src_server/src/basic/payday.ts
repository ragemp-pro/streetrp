import hud from 'helpers/hud';
import money from 'helpers/money';
import houseTax from 'house/tax';
import businessTax from 'business/tax';
import playerLevel from 'player/level';
import factions from 'factions';
import Faction from 'factions/faction';
import gangZones from 'factions/gangs/zones';

class Payday {
	async trigger(tax = false) {
		if (tax) await this.getTaxes();

		this.processPlayers();
		gangZones.giveMoney();
	}

	private async getTaxes() {
		await houseTax.take();
		await businessTax.take();
	}

	private processPlayers() {
		mp.players.toCustomArray().forEach((player: Player) => {
			if (player.paydayTime < 20) {
				return hud.showNotification(
					player,
					'info',
					'Для получения пейдея, нужно наиграть минимум 20 мин'
				);
			}

			player.paydayTime = 0;
			playerLevel.addExp(player, 20);

			const faction = factions.getFaction(player.faction);

			if (faction?.government) this.giveFactionSalary(player, faction);
			else if (!player.job) this.giveUnemploymentBenefits(player);
		});
	}

	private async giveUnemploymentBenefits(player: Player) {
		await money.change(player, 'bank', 400, 'unemployment benefits');
	}

	private async giveFactionSalary(player: Player, faction: Faction) {
		const member = faction.members.getMember(player);
		const salary = faction.ranks.getRank(member?.rank)?.salary;

		if (faction.isAlreadyAtWork(player) && salary > 0) {
			await money.change(player, 'bank', salary, 'faction salary');
		}
	}
}

export default new Payday();
