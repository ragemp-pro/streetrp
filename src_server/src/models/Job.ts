import mongoose from 'mongoose';

const { Schema } = mongoose;

type Job = {
	name: string;
	checkpoints: {
		[name: string]: PositionEx[];
	};
} & mongoose.Document;

const jobSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	checkpoints: {
		type: Object,
		default: {}
	}
});

const Job = mongoose.model<Job>('Job', jobSchema);

export default Job;
