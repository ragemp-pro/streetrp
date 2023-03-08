/* eslint-disable max-classes-per-file */
export class ClientError extends Error {
	constructor(message: string) {
		super(message);

		this.name = 'ClientError';
	}
}

export class SilentError extends Error {
	constructor(message: string) {
		super(message);

		this.name = 'SilentError';
	}
}
