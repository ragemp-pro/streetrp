import mongoose from 'mongoose';

const { Schema } = mongoose;

type Token = {
	email: string;
	expires: string;
	type: string;
	token: string;
} & mongoose.Document;

const tokenSchema = new Schema({
	email: {
		type: String,
		required: true
	},
	token: {
		type: String,
		required: true,
		unique: true
	},
	expires: {
		type: Date,
		required: true
	},
	type: {
		type: String,
		required: true
	}
});

const Token = mongoose.model<Token>('Token', tokenSchema);

export default Token;
