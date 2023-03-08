import { RanksState, RanksActionTypes, GET_RANKS } from './types';

const initialState: RanksState = {
	items: []
};

export default function membersReducer(
	state = initialState,
	action: RanksActionTypes
): RanksState {
	switch (action.type) {
		case GET_RANKS:
			return {
				...state,
				items: action.payload
			};

		default:
			return state;
	}
}
