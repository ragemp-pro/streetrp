import FactionModel from 'models/Faction';
import playerClothes from 'player/clothes';
import Ranks, { Permission } from './ranks';
import Members from './members';
import Money from './money';
import Points from './points';
import Warehouse from '../warehouse/warehouse';
import { Garage } from '../garage';
import { Workshop } from '../workshop';
import { Wardrobe } from '../wardrobe';
import { Inventory } from '../inventory';

class Faction {
	public readonly name: string;

	public readonly government: boolean;

	public readonly ranks: Ranks;

	public readonly members: Members;

	public readonly money: Money;

	public readonly points: Points;

	public garage?: Garage;

	public inventory?: Inventory;

	public warehouse?: Warehouse;

	public workshop?: Workshop;

	public wardrobe?: Wardrobe;

	constructor(name: string, government: boolean) {
		this.name = name;
		this.government = government;

		this.points = new Points();
		this.ranks = new Ranks(name);
		this.members = new Members(name);
		this.money = new Money(name);
	}

	async load(data: FactionModel) {
		this.money.current = data.money;
		this.ranks.load(data.ranks);
		this.members.load(data.members);

		if (this.warehouse) this.warehouse.current = data.materials;
		if (this.inventory) this.inventory.init(data.inventory);
	}

	getPlayers(atWork = false) {
		const members = this.members.getAll();

		return Array.from(members.keys()).flatMap((id) => {
			const player = mp.players.getByDbId(id);
			if (!player) return [];

			return (!atWork || this.isAlreadyAtWork(player) ? player : []) as Player;
		});
	}

	isAlreadyAtWork(player: Player) {
		return (
			this.inFaction(player) &&
			((!this.government || player.mp.getOwnVariable('factionWork')) as boolean)
		);
	}

	inFaction(player: Player) {
		return this.members.getAll().has(player?.dbId);
	}

	isLeader(player: Player, deputy = false) {
		return deputy ? this.hasAccess(player, 'members') : this.hasAccess(player, 'leader');
	}

	hasAccess(player: Player, component: Permission) {
		const member = this.members.getMember(player);

		return member && this.ranks.hasPermission(member.rank, component);
	}

	startWork(player: Player) {
		if (player.job) return;

		player.mp.setOwnVariable('factionWork', true);
	}

	finishWork(player: Player) {
		if (!this.isAlreadyAtWork(player)) return;

		player.mp.setOwnVariable('factionWork', false);
		if (this.wardrobe) playerClothes.load(player);
	}

	setPointsVisible(player: Player, visible: boolean) {
		if (visible) this.points.showFor(player.mp);
		else this.points.hideFor(player.mp);
	}
}

export default Faction;
