import { sortBy } from 'lodash';
import { getDistance } from 'utils/vectors';
import factions from 'factions';
import GangZoneModel from 'models/GangZone';
import gangs from './data';

export type Zone = {
	id: string;
	position: PositionEx;
	owner: string;
	status: boolean;
};

class GangsZones {
	private zones: Map<string, Zone>;

	private income = 50;

	constructor() {
		this.zones = new Map();

		mp.events.subscribe(
			{
				'GangZones-GetInfo': this.getInfo.bind(this),
				'GangZones-GetList': this.getZonesForClient.bind(this)
			},
			false
		);
	}

	async load() {
		const cursor = await GangZoneModel.find().lean().cursor();
		cursor.on('data', this.createZone.bind(this));
	}

	getNearestZone(pos: Vector3Mp) {
		return sortBy(Array.from(this.zones.values()), ({ position }) => {
			return getDistance(pos, new mp.Vector3(position.x, position.y, position.z));
		})[0];
	}

	giveMoney() {
		const gangsIncome: { [name: string]: number } = {};

		Array.from(this.zones.values()).forEach((zone) => {
			if (gangsIncome[zone.owner]) gangsIncome[zone.owner] += this.income;
			else gangsIncome[zone.owner] = this.income;
		});

		Object.entries(gangsIncome).forEach(([name, sum]) => {
			const gang = factions.getFaction(name);
			if (gang) gang.money.changeBalance(sum);
		});
	}

	async setOwner(zone: Zone, owner: string) {
		const data = {
			owner,
			capturedAt: new Date().toISOString()
		};

		await GangZoneModel.findByIdAndUpdate(zone.id, { $set: data });
		this.zones.set(zone.id, { ...zone, ...data, status: false });
		this.updateZoneBlip(this.zones.get(zone.id));
	}

	updateZoneBlip(zone: Zone) {
		const newColor = this.getColorOfZone(zone);

		mp.players.toCustomArray().forEach((player) => {
			player.callEvent('GangZones-UpdateZone', [zone.id, newColor, zone.status]);
		});
	}

	private getZonesForClient() {
		return Array.from(this.zones.values()).map((zone) => {
			return { ...zone, color: this.getColorOfZone(zone), owner: undefined };
		});
	}

	private getColorOfZone(zone: Zone) {
		const { owner } = zone;
		return gangs[owner]?.blip?.color ?? 0;
	}

	private getInfo(player: Player) {
		const zones = Array.from(this.zones.values()).reduce(
			(amount, zone) => (zone.owner === player.faction ? amount + 1 : amount),
			0
		);
		return { zones, income: zones * this.income };
	}

	private createZone(data: GangZoneModel) {
		const { owner, position } = data;
		const id = data._id.toString();

		this.zones.set(id, { id, position, owner, status: false });
	}
}

export default new GangsZones();
