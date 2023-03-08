import mongoose from 'mongoose';

const { Schema } = mongoose;

type Clothes = {
	gender: string;
	category: string;
	style: number;
	price: number;
} & mongoose.Document;

const clothesSchema = new Schema({
	gender: {
		type: String,
		required: true
	},
	category: {
		type: String,
		required: true
	},
	style: {
		type: Number,
		required: true
	},
	price: {
		type: Number,
		required: true
	}
});

const Clothes = mongoose.model<Clothes>('Clothes', clothesSchema);

export default Clothes;
