import mongoose from 'mongoose';

const { Schema } = mongoose;

type Business = {
	owner?: string;
	name: string;
	price: number;
	position: PositionEx;
	income: number;
	paid: number;
	paymentTime?: Date;
} & mongoose.Document;

const businessSchema = new Schema({
	owner: {
		type: Schema.Types.ObjectId,
		ref: 'Character'
	},
	name: {
		type: String,
		required: true
	},
	price: {
		type: Number,
		required: true
	},
	position: {
		type: Object,
		required: true
	},
	income: {
		type: Number,
		required: true
	},
	paid: {
		type: Number,
		default: 1
	},
	paymentTime: {
		type: Date,
		default: null
	}
});

const Business = mongoose.model<Business>('Business', businessSchema);

export default Business;
