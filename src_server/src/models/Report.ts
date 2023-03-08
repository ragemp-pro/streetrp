import * as mongoose from 'mongoose';

const { Schema } = mongoose;

type Report = {
	admin?: string;
	sender: string;
	message: string;
	timestamp: string;
} & mongoose.Document;

const reportSchema = new Schema({
	sender: {
		type: Schema.Types.ObjectId,
		ref: 'Character',
		required: true
	},
	admin: {
		type: Schema.Types.ObjectId,
		ref: 'Character'
	},
	message: {
		type: String,
		required: true
	},
	timestamp: {
		type: Date,
		default: Date.now
	}
});

const Report = mongoose.model<Report>('Report', reportSchema);

export default Report;
