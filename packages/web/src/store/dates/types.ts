export type Day = {
	id: number;
	weekDay: string;
	active: boolean;
};
export default interface Dates {
	// State Interface
	frequency: Day[];
	startAt: number;
	createdAt: number;
}

// Action Types
export enum DateActionTypes {
	TOGGLE_DAY = "TOGGLE_DAY",
	SET_START = "SET_START",
	DO_NOTHING = "DO_NOTHING"
}

export type ToggleDayAction = {
	type: DateActionTypes.TOGGLE_DAY;
	dateId: number;
};

export type SetStartAction = {
	type: DateActionTypes.SET_START;
	start: number;
};

export type DateAction = ToggleDayAction | SetStartAction;
