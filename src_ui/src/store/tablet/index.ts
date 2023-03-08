import { combineReducers } from 'redux';
import { MembersActionTypes } from './members/types';
import { RanksActionTypes } from './ranks/types';
import membersReducer from './members/reducer';
import ranksReducer from './ranks/reducer';

export const RESET_STATE = 'RESET_STATE';

const tabletReducer = combineReducers({
	members: membersReducer,
	ranks: ranksReducer
});

const rootReducer = (
	state: ReturnType<typeof tabletReducer>,
	action: MembersActionTypes | RanksActionTypes | { type: string }
) => {
	return tabletReducer(action.type === RESET_STATE ? undefined : state, action as any);
};

export default rootReducer as typeof tabletReducer;
