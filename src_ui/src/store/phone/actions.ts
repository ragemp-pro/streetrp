import { Call, SET_CALL, ACCEPT_CALL, SET_WALLPAPER, PhoneActionTypes } from './types';

export function setCall(data?: Call): PhoneActionTypes {
	return {
		type: SET_CALL,
		payload: data
	};
}

export function acceptCall(): PhoneActionTypes {
	return {
		type: ACCEPT_CALL
	};
}

export function setWallpaper(name: string): PhoneActionTypes {
	return {
		type: SET_WALLPAPER,
		payload: name
	};
}
