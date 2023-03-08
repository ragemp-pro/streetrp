import { HudState, HudActionTypes, SET_VISIBLE, SET_CAPTURE } from './types';
import './events';

const initialState: HudState = {
	visible: true,
	tasks: true
	// capture: {
	// 	time: 500,
	// 	attacker: {
	// 		name: 'marabunta',
	// 		members: 4
	// 	},
	// 	defender: {
	// 		name: 'bloods',
	// 		members: 6
	// 	}
	// }
};

export default function appReducer(
	state = initialState,
	action: HudActionTypes
): HudState {
	switch (action.type) {
		case SET_VISIBLE:
			return {
				...state,
				visible: action.payload
			};
		case SET_CAPTURE:
			return {
				...state,
				capture: action.payload
			};

		default:
			return state;
	}
}
