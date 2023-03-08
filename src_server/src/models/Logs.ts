import mongoose from 'mongoose';

const { Schema } = mongoose;

type MoneyLog = {
	sender: string;
	recipient: string;
	sum: number;
	note?: string;
	createdAt: string;
} & mongoose.Document;

const moneyLogSchema = new Schema<MoneyLog>({
	sender: {
		type: Schema.Types.ObjectId,
		ref: 'Character'
	},
	recipient: {
		type: Schema.Types.ObjectId,
		ref: 'Character',
		required: true
	},
	payment: {
		type: String,
		required: true
	},
	sum: {
		type: Number,
		required: true
	},
	note: String,
	createdAt: {
		type: Date,
		default: Date.now
	}
});

type AdminLog = {
	action: string;
	admin: string;
	player?: string;
	note?: string;
	createdAt: string;
} & mongoose.Document;

const adminLogSchema = new Schema<AdminLog>({
	admin: {
		type: Schema.Types.ObjectId,
		ref: 'Character',
		required: true
	},
	player: {
		type: Schema.Types.ObjectId,
		ref: 'Character'
	},
	action: {
		type: String,
		required: true
	},
	note: String,
	createdAt: {
		type: Date,
		default: Date.now
	}
});

type FactionLog = {
	faction: string;
	member: string;
	action: string;
	thing: string;
	amount: number;
	createdAt: string;
} & mongoose.Document;

const factionLogSchema = new Schema({
	faction: {
		type: String,
		required: true
	},
	member: {
		type: Schema.Types.ObjectId,
		required: true,
		ref: 'Character'
	},
	action: {
		type: String,
		required: true
	},
	thing: {
		type: String,
		required: true
	},
	amount: {
		type: Number,
		required: true
	},
	createdAt: {
		type: Date,
		default: Date.now
	}
});

export const MoneyLog = mongoose.model<MoneyLog>('Moneylog', moneyLogSchema);
export const AdminLog = mongoose.model<AdminLog>('Adminlog', adminLogSchema);
export const FactionLog = mongoose.model<FactionLog>('Factionlog', factionLogSchema);
