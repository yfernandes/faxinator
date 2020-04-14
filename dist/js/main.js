import * as Members from "./handlers/member.js";
import * as Tasks from "./handlers/task.js";
import Dates from "./handlers/date.js";
import * as Result from "./handlers/result.js";

const membersForm = document.querySelector("#members-form");
const membersList = document.querySelector(".members-list");
const memberNameInput = document.querySelector("#member-name");

const taskForm = document.querySelector("#task-form");
const taskList = document.querySelector(".task-list");
const taskNameInput = document.querySelector("#tasks-name");
const taskNameDifficulty = document.querySelector("#tasks-difficulty");



function loadData() {
	Tasks.loadTaskFromStorage();
	Dates.start();
	Members.loadMembersFromStorage();
	Result.generateResult();
}

document.addEventListener("DOMContentLoaded", loadData);

// Add Task Event
membersForm.onsubmit = (e) => {
	e.preventDefault();
	if (memberNameInput.value === "") {
		alert("Informe o nome do participante");
		return;
	}

	Members.addMember(memberNameInput.value);
	Members.storeMemberInLocalStorage(memberNameInput.value);

	memberNameInput.value = "";
};

membersList.onclick = Members.removeMember;

// Add Task Event
taskForm.onsubmit = (e) => {
	e.preventDefault();
	if (taskNameInput.value === "") {
		alert("Informe o nome da Tarefa");
		return;
	}

	Tasks.addTask(taskNameInput.value, taskNameDifficulty.value);
	Tasks.storeTaskInLocalStorage(taskNameInput.value, taskNameDifficulty.value);

	// Clear Input
	taskNameInput.value = "";
};

taskList.click = Tasks.removeTask;

