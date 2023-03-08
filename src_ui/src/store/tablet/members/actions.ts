import {
	Member,
	GET_MEMBERS,
	UPDATE_MEMBER,
	REMOVE_MEMBER,
	RESET_MEMBERS,
	MembersActionTypes
} from './types';

export function loadMembers(members: Member[]): MembersActionTypes {
	return {
		type: GET_MEMBERS,
		payload: members
	};
}

export function updateMember(data: Member): MembersActionTypes {
	return {
		type: UPDATE_MEMBER,
		payload: data
	};
}

export function removeMember(userId: string): MembersActionTypes {
	return {
		type: REMOVE_MEMBER,
		payload: userId
	};
}

export function resetMembers(): MembersActionTypes {
	return {
		type: RESET_MEMBERS
	};
}
