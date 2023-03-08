import {
	MembersState,
	MembersActionTypes,
	GET_MEMBERS,
	UPDATE_MEMBER,
	REMOVE_MEMBER,
	RESET_MEMBERS
} from './types';

const initialState: MembersState = {
	items: []
};

export default function membersReducer(
	state = initialState,
	action: MembersActionTypes
): MembersState {
	switch (action.type) {
		case GET_MEMBERS:
			return {
				...state,
				items: [...state.items, ...action.payload]
			};
		case UPDATE_MEMBER:
			return {
				...state,
				items: state.items.map((member) =>
					member.userId === action.payload.userId
						? { ...member, ...action.payload }
						: member
				)
			};
		case REMOVE_MEMBER:
			return {
				...state,
				items: state.items.filter((member) => member.userId !== action.payload)
			};
		case RESET_MEMBERS:
			return {
				...state,
				items: []
			};

		default:
			return state;
	}
}
