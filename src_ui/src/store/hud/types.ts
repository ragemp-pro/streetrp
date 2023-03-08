export const SET_VISIBLE = 'SET_VISIBLE';
export const SET_CAPTURE = 'SET_CAPTURE';

type CaptureTeam = {
	name: string;
	members: number;
};
export type Capture = {
	time: number;
	attacker: CaptureTeam;
	defender: CaptureTeam;
};

type SetVisibleAction = {
	type: typeof SET_VISIBLE;
	payload: boolean;
};
type SetCaptureAction = {
	type: typeof SET_CAPTURE;
	payload: Capture;
};

export type HudActionTypes = SetVisibleAction | SetCaptureAction;

export interface HudState {
	visible: boolean;
	tasks: boolean;
	capture?: Capture;
}
