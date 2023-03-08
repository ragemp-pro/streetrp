declare const SilentError: ErrorConstructor;

declare namespace NodeJS {
	interface Global {
		SilentError: typeof SilentError;
	}
}

type PositionEx = {
	x: number;
	y: number;
	z: number;
};

type PaymentType = 'bank' | 'cash' | 'points';

type InventoryItem = {
	cell: number;
	name: string;
	amount: number;
	data?: { [name: string]: any };
};
type InventoryCapacity = {
	cells: number;
	slots: number;
};

interface EventMpPool {
	subscribe(
		events: { [name: string]: (player: Player, ...args) => any },
		authorized?: boolean
	): void;
	subscribeToDefault(
		events: { [name: string]: (...args) => void },
		authorized?: boolean
	): void;
	reject(reason: any): Promise<Error>;
}
interface PlayerMpPool {
	get(player: PlayerMp | number): Player;
	getByDbId(id: string): Player;
	delete(id: number): void;

	toCustomArray(authorized?: boolean): Player[];
	withTimeout(player: PlayerMp, callback: Function, duration: number): void;
	callInStream(position: Vector3Mp, event: string, args: any);
}

interface VehicleMpPool {
	getById(id: string): VehicleMp;
	authorize(vehicle: VehicleMp, dbId: string): void;
	delete(vehicle: VehicleMp): void;
}

interface ColshapeHandlers {
	keyName?: string;
	onEnter?: (player: Player, data?: any) => void;
	onKeyPress?: (player: Player, data?: any) => void;
	onExit?: (player: Player, data?: any) => void;
}

interface ColshapeMp {
	visible: boolean;
}

interface ColshapeMpPool {
	getData(player: PlayerMp): any;
	create(
		position: PositionEx,
		radius: number,
		handlers: ColshapeHandlers,
		options?: {
			dimension?: number;
			visible?: boolean;
			data?: any;
		}
	): ColshapeMp;
	delete(colshape: ColshapeMp): void;
}

interface PickupMpPool {
	create(position: PositionEx, dimension: number, item: InventoryItem): void;
}

type BlipsOptions = {
	name: string;
	color: number;
	model: number;
	scale?: number;
	dimension?: number;
	shortRange?: boolean;
};

interface BlipMpPool {
	create(
		position: PositionEx,
		options: BlipsOptions,
		player?: Player
	): BlipMp | undefined;
	createForPlayer(
		player: Player,
		position: PositionEx,
		options: BlipsOptions,
		id?: string
	): void;
	delete(player: Player, blip: BlipMp | string): void;
}

interface Point {
	readonly id: number;
	position: Vector3Mp;
	dimension: number;
	visible: boolean;

	isPointWithin(point: Vector3Mp): boolean;
	showFor(player: PlayerMp): void;
	hideFor(player: PlayerMp): void;
	destroy(): void;
}
