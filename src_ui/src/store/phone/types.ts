export const SET_CALL = 'SET_CALL';
export const ACCEPT_CALL = 'ACCEPT_CALL';
export const SET_WALLPAPER = 'SET_WALLPAPER';

export type Call = {
	type: 'incoming' | 'outgoing';
	phoneNumber: string;
	isRecieve?: boolean;
};

type SetCallAction = {
	type: typeof SET_CALL;
	payload?: Call;
};
type AcceptCallAction = {
	type: typeof ACCEPT_CALL;
};
type SetWallpaperAction = {
	type: typeof SET_WALLPAPER;
	payload: string;
};

export type PhoneActionTypes = SetCallAction | AcceptCallAction | SetWallpaperAction;

export type PhoneState = {
	call?: Call;
	wallpaper: string;
};
