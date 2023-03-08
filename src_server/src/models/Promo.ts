import mongoose from 'mongoose';

const { Schema } = mongoose;

type Promo = {
	owner?: string;
	code: string;
	income: number;
	bonus: number;
	used: string[];
} & mongoose.Document;

const promoSchema = new Schema({
	owner: {
		type: Schema.Types.ObjectId,
		ref: 'User'
	},
	code: {
		type: String,
		required: true
	},
	income: {
		type: Number,
		required: true
	},
	bonus: {
		type: Number,
		required: true
	},
	used: [{ type: Schema.Types.ObjectId, ref: 'User' }]
});

const Promo = mongoose.model<Promo>('Promo', promoSchema);

export default Promo;
