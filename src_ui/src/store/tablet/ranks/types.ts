export const GET_RANKS = 'GET_RANKS';

export type Rank = {
	id: string;
	name: string;
};

type GetRanksAction = {
	type: typeof GET_RANKS;
	payload: Rank[];
};

export type RanksActionTypes = GetRanksAction;

export interface RanksState {
	items: Rank[];
}
