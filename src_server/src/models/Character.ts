import mongoose from 'mongoose';
import autoIncrementId from './Counter';

const { Schema } = mongoose;

type Character = {
	uid: number;
	firstName: string;
	lastName: string;
	position?: PositionEx;
	money: PlayerMoney;
	playedTime: number;
	paydayTime: number;
	bonusTime: number;
	health: number;
	hunger: number;
	inventory: InventoryItem[];
	vehicleSlots: number;
	experience: number;
	appearance?: { [name: string]: any };
	licenses: { [name: string]: string };
	tasks: { [name: string]: number };
	skills: { [name: string]: number };
	dailyBonus: {
		day: number;
		pickedAt?: string;
	};
	bankAccount?: string;
	phone: {
		number?: string;
		contacts: {
			firstName: string;
			lastName: string;
			phone: string;
		}[];
		blacklist: string[];
	};
	arrest?: { time: number; reason: string };
	createdAt: string;
} & mongoose.Document;

const characterSchema = new Schema({
	uid: {
		type: Number,
		unique: true
	},
	firstName: {
		type: String,
		required: true
	},
	lastName: {
		type: String,
		required: true
	},
	health: {
		type: Number,
		default: 100
	},
	hunger: {
		type: Number,
		default: 100
	},
	bankAccount: String,
	appearance: Object,
	position: Object,
	money: {
		cash: {
			type: Number,
			default: 0
		},
		bank: {
			type: Number,
			default: 0
		}
	},
	dailyBonus: {
		day: {
			type: Number,
			default: 0
		},
		pickedAt: Date
	},
	playedTime: {
		type: Number,
		default: 0
	},
	bonusTime: {
		type: Number,
		default: 0
	},
	paydayTime: {
		type: Number,
		default: 0
	},
	experience: {
		type: Number,
		default: 0
	},
	skills: {
		type: Object,
		default: {}
	},
	tasks: {
		type: Object,
		default: {}
	},
	phone: {
		number: String,
		contacts: Array,
		blacklist: Array
	},
	inventory: {
		type: Array,
		default: []
	},
	licenses: {
		type: Object,
		default: {}
	},
	vehicleSlots: {
		type: Number,
		default: 1
	},
	arrest: {
		time: Number,
		reason: String
	},
	createdAt: {
		type: Date,
		default: Date.now
	}
});

// eslint-disable-next-line func-names
characterSchema.pre('save', function (next) {
	if (!this.isNew) {
		next();
		return;
	}

	autoIncrementId(this, 'uid', next);
});

const Character = mongoose.model<Character>('Character', characterSchema);

export default Character;
