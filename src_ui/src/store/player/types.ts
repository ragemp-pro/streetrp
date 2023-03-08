export const SET_SATIETY = 'SET_SATIETY';
export const SET_MONEY = 'SET_MONEY';
export const SET_TASKS = 'SET_TASKS';
export const SET_ID = 'SET_ID';
export const SET_BONUS = 'SET_BONUS';

export type Money = {
	cash: number;
	bank: number;
	points: number;
};

type SetSatietyAction = {
	type: typeof SET_SATIETY;
	payload: number;
};
type SetMoneyAction = {
	type: typeof SET_MONEY;
	payload: Money;
};
type SetTasksAction = {
	type: typeof SET_TASKS;
	payload: string[];
};
type SetIdAction = {
	type: typeof SET_ID;
	payload: number;
};
type SetBonusAction = {
	type: typeof SET_BONUS;
	payload: number;
};

export type PlayerActionTypes =
	| SetSatietyAction
	| SetMoneyAction
	| SetTasksAction
	| SetIdAction
	| SetBonusAction;

export interface PlayerState {
	id: number;
	satiety: number;
	money: Money;
	tasks: string[];
	bonus: number;
}
