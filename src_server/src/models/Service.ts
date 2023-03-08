import mongoose from 'mongoose';

const { Schema } = mongoose;

type Service = {
	name: string;
	positions: PositionEx[];
} & mongoose.Document;

const serviceSchema = new Schema({
	name: {
		type: String,
		required: true,
		unique: true
	},
	positions: {
		type: Array,
		default: [],
		required: true
	}
});

const Service = mongoose.model<Service>('Service', serviceSchema);

export default Service;
