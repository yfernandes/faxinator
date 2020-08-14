import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk, { ThunkMiddleware } from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { datesReducer } from "./dates/reducer";
import { DateAction } from "./dates/types";

import { membersReducer } from "./members/reducer";
import { MembersAction } from "./members/types";

import { tasksReducer } from "./tasks/reducer";
import { TaskAction } from "./tasks/types";

const rootReducer = combineReducers({
	dates: datesReducer,
	members: membersReducer,
	tasks: tasksReducer
});

export type AppState = ReturnType<typeof rootReducer>;
export type AppActions = DateAction | MembersAction | TaskAction;

const middleware = [thunk as ThunkMiddleware<AppState, AppActions>];
const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
