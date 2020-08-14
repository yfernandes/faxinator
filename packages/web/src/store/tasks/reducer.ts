import Tasks, { TaskActionTypes, TaskAction } from "./types";

const DefaultTasks: Tasks = { tasks: null };

const tasksReducer = (state = DefaultTasks, action: TaskAction): Tasks => {
	switch (action.type) {
		case TaskActionTypes.ADD_TASK:
			return {
				...state
			};
		case TaskActionTypes.REMOVE_TASK:
			const createdAt = Date.now();
			return { ...state };
		default:
			return state;
	}
};

export { tasksReducer };
