import {
	PlayerActionTypes,
	PlayerState,
	SET_BONUS,
	SET_ID,
	SET_MONEY,
	SET_SATIETY,
	SET_TASKS
} from './types';
import './events';

const initialState: PlayerState = {
	id: 0,
	satiety: 100,
	money: {
		cash: 0,
		bank: 0,
		points: 0
	},
	bonus: -1,
	tasks: []
};

export default function playerReducer(
	state = initialState,
	action: PlayerActionTypes
): PlayerState {
	switch (action.type) {
		case SET_SATIETY:
			return {
				...state,
				satiety: action.payload
			};
		case SET_MONEY:
			return {
				...state,
				money: action.payload
			};
		case SET_TASKS:
			return {
				...state,
				tasks: action.payload
			};
		case SET_ID:
			return {
				...state,
				id: action.payload
			};
		case SET_BONUS:
			return {
				...state,
				bonus: action.payload
			};

		default:
			return state;
	}
}
