import bcrypt from 'bcryptjs';

export async function encrypt(text: string) {
	const hash = await bcrypt.hash(text, 12);

	return hash;
}

export async function compare(text: string, hash: string) {
	const match = await bcrypt.compare(text, hash);

	return match;
}
