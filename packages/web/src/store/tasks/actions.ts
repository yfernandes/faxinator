import { Dispatch } from "redux";

import { AppActions, AppState } from "../rootReducer";
// import  from "./types";
import Tasks, { TaskActionTypes, Task } from "./types";

export const addTask = (name: string, difficulty: number) => (
	dispatch: Dispatch<AppActions>
): AppActions => {
	return dispatch({
		type: TaskActionTypes.ADD_TASK,
		name,
		difficulty
	});
};

export const setStartDate = (id: number) => (
	dispatch: Dispatch<AppActions>
): AppActions => {
	return dispatch({
		type: TaskActionTypes.REMOVE_TASK,
		id
	});
};
