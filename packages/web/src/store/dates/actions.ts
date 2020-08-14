import { Dispatch } from "redux";

import { AppActions, AppState } from "../rootReducer";
// import  from "./types";
import Dates, { DateActionTypes, Day } from "./types";

export const toggleDay = (dateId: number) => (
	dispatch: Dispatch<AppActions>
): AppActions => {
	return dispatch({
		type: DateActionTypes.TOGGLE_DAY,
		dateId
	});
};

export const setStartDate = (start: number) => (
	dispatch: Dispatch<AppActions>
): AppActions => {
	return dispatch({
		type: DateActionTypes.SET_START,
		start
	});
};
