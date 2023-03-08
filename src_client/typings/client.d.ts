type PositionEx = {
	x: number;
	y: number;
	z: number;
};

interface Mp {
	game1: Mp['game'];
}

interface EventMpPool {
	subscribe(events: { [name: string]: (...args) => any }): void;
	subscribeToDefault(events: { [name: string]: (...args) => void }): void;
	subscribeToData(
		events: {
			[name: string]: (entity: EntityMp, data: any, oldData: any) => void;
		},
		stream?: boolean
	): void;

	callServer(event: string, args?: any, pending?: boolean): Promise<any>;
	callBrowser(
		event: string,
		args?: any,
		pending?: boolean,
		browser?: BrowserMp
	): Promise<any>;
	reject(error: any): Promise<any>;
}

interface BrowserMpPool {
	readonly hud: boolean;

	showPage(
		page: string,
		data?: { [name: string]: any },
		cursor?: boolean,
		freeze?: boolean
	): void;
	hidePage(page?: string): void;
	setHideBind(handler: Function, key?: string): void;
}

interface CameraMpPool {
	readonly gameplay: CameraMp;

	getOffset(position: Vector3Mp, angle: number, dist: number): Vector3Mp;
	set(
		position: Vector3Mp,
		rotation: Vector3Mp,
		point: PositionEx,
		fov: number,
		easing?: number
	): void;
	setToPlayer(
		offset: Vector3Mp,
		point: Vector3Mp,
		dist: number,
		angle?: number,
		fov?: number,
		easing?: number
	): void;
	reset(easing?: number): void;
}

type StorageState = {
	login: string;
	friends: number[];
	binds: {
		[name: string]: string;
	};
	chat: {
		opacity: number;
	};
	phone: {
		wallpaper: string;
	};
};

interface StorageMp {
	data: StorageState;
	update: (data: { [K in keyof StorageState]?: StorageState[K] }) => void;
}

interface PlayerMp {
	isListening: boolean;
	objects?: {
		[id: number]: ObjectMp;
	};
	scenario?: string;
}

interface VehicleMp {
	objects?: {
		[id: number]: ObjectMp;
	};
}

interface GamePlayerMp {
	setWeaponDefenseModifier(modifier: number): void;
}

interface ColshapeMp {
	greenZone?: boolean;
}

interface ObjectMp {
	systemResolve?: (object: ObjectMp) => void;
}

interface ObjectMpPool {
	create(model: number, position: Vector3Mp, options?: ObjectOptions): Promise<ObjectMp>;
}

type ObjectOptions = {
	alpha?: number;
	dimension?: number;
	rotation?: Vector3Mp;
};

interface NotificationMp {
	show(
		type: 'success' | 'info' | 'warn' | 'error',
		message: string,
		inMenu?: boolean
	): void;
	help(message: string): void;
}

type Attachment = {
	model: number | string;
	bone: string | number;
	offset: Vector3Mp;
	rotation: Vector3Mp;
};

interface AttachmentsMp {
	register(id: number | string, data: Attachment): void;
	addFor(entity: PlayerMp | VehicleMp, id: number): Promise<void>;
	removeFor(entity: PlayerMp | VehicleMp, id: number): void;
}

interface AnimationsMp {
	play(player: PlayerMp, animation: string): void;
	stop(player: PlayerMp, animation: string): void;
}

interface GameUiMp {
	notifications: NotificationMp;
}

interface Mp {
	attachments: AttachmentsMp;
	animations: AnimationsMp;
}

interface ColshapeHandlers {
	onEnter?: (data?: any) => void;
	onKeyPress?: (data?: any) => void;
	onExit?: (data?: any) => void;
}

interface ColshapeMpPool {
	create(
		position: PositionEx,
		radius: number,
		handlers: ColshapeHandlers,
		data?: any
	): ColshapeMp;
	destroy(colshape: ColshapeMp): void;
	getData(colshape?: ColshapeMp): any;
}
