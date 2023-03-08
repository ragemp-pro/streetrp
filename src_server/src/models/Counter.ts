import mongoose from 'mongoose';

const { Schema } = mongoose;

type Counter = {
	_id: string;
	seq: number;
};

const counterSchema = new Schema({
	_id: { type: String, required: true },
	seq: { type: Number, default: 0 }
});
counterSchema.index({ _id: 1, seq: 1 }, { unique: true });

const CounterModel = mongoose.model<Counter>('Counter', counterSchema);

const autoIncrementId = (
	doc: mongoose.Document,
	field: string,
	next: mongoose.HookNextFunction
) => {
	CounterModel.findByIdAndUpdate(
		(doc.constructor as any).modelName,
		{ $inc: { seq: 1 } },
		{ new: true, upsert: true },
		(error, counter) => {
			if (error) return next(error);

			doc[field] = counter.seq;
			next();
		}
	);
};

export default autoIncrementId;
