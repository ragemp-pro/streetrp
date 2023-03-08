import mongoose from 'mongoose';

const { Schema } = mongoose;

type User = {
	email: string;
	password: string;
	socialName: string;
	serial: string;
	ip: string[];
	loginAt: string;
	registrationAt: string;
	adminLvl: number;
	donate: number;
	character: string;
	referralAward: boolean;
	ban?: {
		admin: string;
		reason: string;
		expires: string;
		permanent: boolean;
	};
} & mongoose.Document;

const userSchema = new Schema({
	email: {
		type: String,
		unique: true,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	socialName: {
		type: String,
		required: true
	},
	serial: {
		type: String,
		required: true
	},
	ip: [],
	loginAt: Date,
	registrationAt: {
		type: Date,
		default: Date.now
	},
	adminLvl: {
		type: Number,
		default: 0
	},
	ban: {
		admin: {
			type: Schema.Types.ObjectId,
			ref: 'User'
		},
		reason: String,
		expires: Date,
		permanent: Boolean
	},
	donate: {
		type: Number,
		default: 0
	},
	character: {
		type: Schema.Types.ObjectId,
		ref: 'Character'
	},
	referralAward: {
		type: Boolean,
		default: false
	}
});

const User = mongoose.model<User>('User', userSchema);

export default User;
