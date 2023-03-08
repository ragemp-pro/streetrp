interface PlayerMp {
	colshape?: number;
	colshapes: number[];
	attachments: number[];
}

interface Player {
	readonly mp: PlayerMp;
	performing: boolean;
	cache: { [name: string]: any };
	dbId: string;
	adminLvl: number;
	dead: boolean;

	account?: string;
	waypoint?: Vector3Mp;
	target?: PlayerMp | VehicleMp;
	actionTimeout?: number;

	readonly level: number;
	gender: 'male' | 'female';
	money?: PlayerMoney;
	hunger?: number;
	registerAt?: string;
	loginAt?: string;
	bankAccount?: string;
	experience: number;
	inventory?: InventoryItem[];
	equipment?: { [name: string]: InventoryItem };
	faction?: string;
	licenses?: { [name: string]: string };
	houses?: number[];
	businesses?: number[];
	vehicles: string[];
	vehicleSlots: number;
	paydayTime?: number;
	bonusTime?: number;
	skills?: { [name: string]: number };
	tasks?: {
		[name: string]: number;
	};
	arrest?: { time: number; reason: string };
	job?: { name: string; branch: string };
	phone?: {
		number?: string;
		contacts: {
			firstName: string;
			lastName: string;
			phone: string;
		}[];
		blacklist: string[];
		interlocutor?: PlayerMp;
	};

	callEvent: (name: string, args?: any, pending?: boolean) => Promise<any>;
	getName: (separator?: boolean) => string;
	tp: (position: PositionEx, rotation?: number, dimension?: number) => void;
	entityIsNearby: (target: EntityMp, range?: number) => boolean;
	isDriver: () => boolean;
	hasLicense: (name: string) => boolean;
	isEnoughVehicleSlots: () => boolean;
	togglePrivateDimension: () => void;
}

type PlayerMoney = {
	cash: number;
	bank: number;
	points: number;
};
