import mongoose from 'mongoose';

const { Schema } = mongoose;

type Wanted = {
	creator: string;
	suspect: string;
	priority: number;
	reason: string;
	createdAt: string;
} & mongoose.Document;

const wantedSchema = new Schema({
	creator: {
		type: Schema.Types.ObjectId,
		required: true,
		ref: 'Character'
	},
	suspect: {
		type: Schema.Types.ObjectId,
		required: true,
		ref: 'Character'
	},
	priority: {
		type: Number,
		required: true
	},
	reason: {
		type: String,
		required: true
	},
	createdAt: {
		type: Date,
		default: Date.now
	}
});

const Wanted = mongoose.model<Wanted>('Wanted', wantedSchema);

export default Wanted;
