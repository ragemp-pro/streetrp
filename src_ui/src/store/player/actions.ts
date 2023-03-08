import {
	Money,
	PlayerActionTypes,
	SET_BONUS,
	SET_ID,
	SET_MONEY,
	SET_SATIETY,
	SET_TASKS
} from './types';

export function setSatiety(amount: number): PlayerActionTypes {
	return {
		type: SET_SATIETY,
		payload: amount
	};
}

export function setMoney(data: Money): PlayerActionTypes {
	return {
		type: SET_MONEY,
		payload: data
	};
}

export function setTasks(tasks: string[]): PlayerActionTypes {
	return {
		type: SET_TASKS,
		payload: tasks
	};
}

export function setId(id: number): PlayerActionTypes {
	return {
		type: SET_ID,
		payload: id
	};
}

export function setBonus(time: number): PlayerActionTypes {
	return {
		type: SET_BONUS,
		payload: time
	};
}
