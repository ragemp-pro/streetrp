export const GET_MEMBERS = 'GET_MEMBERS';
export const UPDATE_MEMBER = 'UPDATE_MEMBER';
export const REMOVE_MEMBER = 'REMOVE_MEMBER';
export const RESET_MEMBERS = 'RESET_MEMBERS';

export type Member = {
	userId: string;
	name: string;
	rank: string;
	online: boolean;
};

type GetMembersAction = {
	type: typeof GET_MEMBERS;
	payload: Member[];
};

type UpdateMemberAction = {
	type: typeof UPDATE_MEMBER;
	payload: Member;
};

type RemoveMemberAction = {
	type: typeof REMOVE_MEMBER;
	payload: string;
};

type ResetMemberAction = {
	type: typeof RESET_MEMBERS;
};

export type MembersActionTypes =
	| GetMembersAction
	| UpdateMemberAction
	| RemoveMemberAction
	| ResetMemberAction;

export interface MembersState {
	items: Member[];
}
