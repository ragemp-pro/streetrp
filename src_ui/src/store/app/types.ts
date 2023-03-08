export const SET_DATE = 'SET_DATE';
export const SEND_MESSAGE = 'SEND_MESSAGE';
export const SET_ONLINE = 'SET_ONLINE';

type SetDateAction = {
	type: typeof SET_DATE;
	payload: string;
};
type SendMessageAction = {
	type: typeof SEND_MESSAGE;
	payload: string;
};
type SetOnlineAction = {
	type: typeof SET_ONLINE;
	payload: number;
};

export type AppActionTypes = SetDateAction | SendMessageAction | SetOnlineAction;

export interface AppState {
	date: string;
	online: number;
	chat: string[];
}
