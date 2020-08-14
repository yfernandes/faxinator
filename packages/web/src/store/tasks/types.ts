export type Task = {
	id: number;
	name: string;
	difficulty: number;
};
export default interface Tasks {
	tasks: Task[];
}

export enum TaskActionTypes {
	ADD_TASK = "ADD_TASK",
	REMOVE_TASK = "REMOVE_TASK"
}

export type AddTaskAction = {
	type: TaskActionTypes.ADD_TASK;
	name: string;
	difficulty: number;
};

export type RemoveTaskAction = {
	type: TaskActionTypes.REMOVE_TASK;
	id: number;
};

export type TaskAction = AddTaskAction | RemoveTaskAction;
