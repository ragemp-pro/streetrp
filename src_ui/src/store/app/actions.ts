import { SET_DATE, SEND_MESSAGE, SET_ONLINE, AppActionTypes } from './types';

export function setDate(date: string): AppActionTypes {
	return {
		type: SET_DATE,
		payload: date
	};
}

export function sendMessage(message: string): AppActionTypes {
	return {
		type: SEND_MESSAGE,
		payload: message
	};
}

export function setOnline(count: number): AppActionTypes {
	return {
		type: SET_ONLINE,
		payload: count
	};
}
