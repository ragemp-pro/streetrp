import { AppState, AppActionTypes, SET_DATE, SEND_MESSAGE, SET_ONLINE } from './types';
import './events';

const initialState: AppState = {
	date: new Date().toISOString(),
	online: 0,
	chat: []
};

export default function appReducer(
	state = initialState,
	action: AppActionTypes
): AppState {
	switch (action.type) {
		case SET_DATE:
			return {
				...state,
				date: action.payload
			};
		case SEND_MESSAGE:
			return {
				...state,
				chat:
					state.chat.length >= 40
						? [...state.chat.slice(-39), action.payload]
						: [...state.chat, action.payload]
			};

		case SET_ONLINE:
			return {
				...state,
				online: action.payload
			};

		default:
			return state;
	}
}
