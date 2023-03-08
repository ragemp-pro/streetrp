import events from 'helpers/events';
import antiCheat from 'basic/anti-cheat';
import licenses from 'player/licenses';
import level from 'player/level';

class PlayerEntity implements Player {
	public readonly mp: PlayerMp;

	public dbId = '';

	public cache = {};

	public performing = false;

	public adminLvl = 0;

	public gender: Player['gender'] = 'male';

	public vehicleSlots = 0;

	public vehicles: string[] = [];

	public experience = 0;

	constructor(player: PlayerMp) {
		this.mp = player;
	}

	get dead() {
		return !!this.mp.getVariable('isDying');
	}

	set dead(status: boolean) {
		this.mp.setVariable('isDying', status);
	}

	get level() {
		return level.getLevelFromExp(this.experience);
	}

	getName(separator = false) {
		const { name } = this.mp;

		return separator ? name : name.replace('_', ' ');
	}

	tp(position: PositionEx, rotation = 90, dimension = 0) {
		const { x, y, z } = position;

		antiCheat.sleep(this, 4000);

		this.mp.position = new mp.Vector3(x, y, z);
		this.mp.heading = rotation;
		this.mp.dimension = dimension;
	}

	isDriver() {
		const { vehicle, seat } = this.mp;

		return vehicle && seat === 0;
	}

	isEnoughVehicleSlots() {
		return this.vehicleSlots > this.vehicles.length;
	}

	hasLicense(name: string) {
		return licenses.hasLicense(this, name as any);
	}

	togglePrivateDimension() {
		const { id, dimension } = this.mp;

		this.mp.dimension = dimension ? 0 : id + 1000;
	}

	entityIsNearby(entity: EntityMp, range = 3) {
		const { position } = this.mp;

		return entity && entity.dist(position) <= range;
	}

	callEvent(name: string, args?: any, pending = false) {
		return events.callClient(this.mp, name, args, pending);
	}
}

export default PlayerEntity;
