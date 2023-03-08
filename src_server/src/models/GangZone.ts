import mongoose from 'mongoose';

const { Schema } = mongoose;

type GangZone = {
	owner: string;
	position: PositionEx;
	capturedAt: string;
} & mongoose.Document;

const gangZoneSchema = new Schema({
	owner: {
		type: String,
		required: true,
		ref: 'Faction'
	},
	position: {
		type: Object,
		required: true
	},
	capturedAt: {
		type: Date,
		default: Date.now
	}
});

const GangZone = mongoose.model<GangZone>('Gangzone', gangZoneSchema);

export default GangZone;
