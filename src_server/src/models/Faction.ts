import mongoose from 'mongoose';

const { Schema } = mongoose;

type Faction = {
	name: string;
	money: number;
	materials: number;
	members: any[];
	ranks: any[];
	inventory: InventoryItem[];
} & mongoose.Document;

const memberSchema = new Schema(
	{
		userId: {
			type: Schema.Types.ObjectId,
			required: true,
			ref: 'Character'
		},
		rank: {
			type: Schema.Types.ObjectId,
			required: true
		}
	},
	{ _id: false }
);

const rankSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	salary: {
		type: Number,
		default: 0
	},
	permissions: {
		type: Object,
		default: {}
	}
});

const factionSchema = new Schema<Faction>({
	name: {
		type: String,
		required: true,
		unique: true
	},
	money: {
		type: Number,
		default: 0
	},
	materials: {
		type: Number,
		default: 0
	},
	inventory: {
		type: Array,
		default: []
	},
	ranks: [rankSchema],
	members: [memberSchema]
});

const Faction = mongoose.model<Faction>('Faction', factionSchema);

export default Faction;
