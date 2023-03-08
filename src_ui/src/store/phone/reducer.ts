import {
	PhoneState,
	PhoneActionTypes,
	SET_CALL,
	ACCEPT_CALL,
	SET_WALLPAPER
} from './types';
import './events';

const initialState: PhoneState = {
	wallpaper: '0'
};

export default function phoneReducer(
	state = initialState,
	action: PhoneActionTypes
): PhoneState {
	switch (action.type) {
		case SET_CALL:
			return {
				...state,
				call: action.payload
			};
		case ACCEPT_CALL:
			return {
				...state,
				call: state.call ? { ...state.call, isRecieve: true } : undefined
			};
		case SET_WALLPAPER:
			return {
				...state,
				wallpaper: action.payload
			};

		default:
			return state;
	}
}
