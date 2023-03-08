import { Rank, GET_RANKS, RanksActionTypes } from './types';

export function loadRanks(ranks: Rank[]): RanksActionTypes {
	return {
		type: GET_RANKS,
		payload: ranks
	};
}
