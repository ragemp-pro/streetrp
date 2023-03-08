import { SET_VISIBLE, SET_CAPTURE, Capture, HudActionTypes } from './types';

export function setVisible(status: boolean): HudActionTypes {
	return {
		type: SET_VISIBLE,
		payload: status
	};
}

export function setCapture(data: Capture): HudActionTypes {
	return {
		type: SET_CAPTURE,
		payload: data
	};
}
