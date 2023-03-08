import hud from 'helpers/hud';
import offers from 'helpers/offers';
import factions from 'factions';
import Faction from './faction';
import { Rank } from './faction/ranks';

class FactionLeader {
	constructor() {
		mp.events.subscribe({
			'FactionLeader-Invite': this.invite.bind(this),
			'FactionLeader-Kick': this.kick.bind(this),
			'FactionLeader-SetRank': this.setRank.bind(this),
			'FactionLeader-EditRank': this.editRank.bind(this),
			'FactionLeader-ChangeMoney': this.changeMoney.bind(this)
		});
	}

	private checkAccess(player: Player, faction: Faction, deputy = false) {
		if (!faction || !faction.isLeader(player, deputy)) {
			throw new SilentError("doesn't have permission");
		}
	}

	private getPlayerFaction(player: Player) {
		return factions.getFaction(player.faction);
	}

	private invite(player: Player) {
		const target = mp.players.get(player.target as PlayerMp);
		const faction = this.getPlayerFaction(player);

		if (!player.entityIsNearby(target?.mp)) return;
		this.checkAccess(player, faction, true);

		offers.create(player, target, {
			onAccept: async () => {
				const rank = faction.ranks.items.keys().next().value;

				await faction.members.add(target, rank);
				factions.loadForPlayer(target, faction);

				hud.showNotification(target, 'success', 'Вы устроились в организацию');
			}
		});
		offers.showWithExpires(target, player.mp.id, 'Предлагает вступить в организацию');
	}

	private async kick(player: Player, memberId: string) {
		const faction = this.getPlayerFaction(player);
		this.checkAccess(player, faction, true);

		const target = mp.players.getByDbId(memberId);
		if (target) faction.finishWork(target);

		await faction.members.delete(memberId);
		factions.loadForPlayer(player, faction);
	}

	private async setRank(player: Player, memberId: string, rank: string) {
		const faction = this.getPlayerFaction(player);
		this.checkAccess(player, faction, true);

		if (faction.ranks.hasPermission(rank, 'leader')) {
			throw new SilentError('there should be only one leader');
		}

		await faction.members.update(memberId, { rank });
	}

	private async editRank(player: Player, rank: string, data: Rank['permissions']) {
		const faction = this.getPlayerFaction(player);
		this.checkAccess(player, faction);

		await faction.ranks.upatePermissions(rank, data);
	}

	private async changeMoney(
		player: Player,
		operation: 'add' | 'withdraw',
		amount: number
	) {
		const faction = this.getPlayerFaction(player);
		this.checkAccess(player, faction);

		if (operation === 'add') await faction.money.add(player, amount);
		else if (operation === 'withdraw') await faction.money.withdraw(player, amount);

		return faction.money.current;
	}
}

const leader = new FactionLeader();
