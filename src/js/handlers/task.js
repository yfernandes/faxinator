"use strict";

export default {
	taskMock: [
		{ lugar: "Cozinha", dificuldade: 10 },
		{ lugar: "Sala", dificuldade: 10 },
		{ lugar: "Banheiro Suite", dificuldade: 10 },
		{ lugar: "Banheiro Social", dificuldade: 10 },
	],

	taskForm: document.querySelector("#task-form"),
	taskList: document.querySelector(".task-list"),
	taskNameInput: document.querySelector("#tasks-name"),
	taskNameDifficulty: document.querySelector("#tasks-difficulty"),

	start() {
		// Load Local Storage Data
		this.loadTaskFromStorage();

		// Set Event Listeners
		this.taskForm.addEventListener("submit", (e) => {
			e.preventDefault();
			this.addTaskHandler(e);
		});

		this.taskList.addEventListener("click", (e) => {
			this.removeTask(e);
			// this.removeTaskFromLocalStorage(e);
		});
	},

	addTaskHandler(e) {
		if (this.taskNameInput.value === "") {
			alert("Informe o nome da Tarefa");
			return;
		}

		this.addTask(this.taskNameInput.value, this.taskNameDifficulty.value);
		this.storeTaskInLocalStorage(
			this.taskNameInput.value,
			this.taskNameDifficulty.value
		);

		// Clear Input
		this.taskNameInput.value = "";
		this.taskNameDifficulty.value = "";
	},

	addTask(name, diff) {
		const taskList = document.querySelector(".task-list");

		// Create Div Element
		const li = document.createElement("li");
		// Add Class
		li.className = "task-unique";

		const nameEl = document.createElement("span");
		nameEl.className = "task-name";
		nameEl.appendChild(document.createTextNode(`${name}`));

		const dificuldadeEl = document.createElement("span");
		dificuldadeEl.className = "task-difficulty";
		dificuldadeEl.appendChild(document.createTextNode(diff));

		const link = document.createElement("a");
		// Add class
		link.className = "delete-item";
		// Add icon html
		link.innerHTML = '<i class="fa fa-remove"></i>';
		// Append the link to li

		// Append li to ul
		li.appendChild(nameEl);
		li.appendChild(dificuldadeEl);
		li.appendChild(link);
		taskList.appendChild(li);
	},

	storeTaskInLocalStorage(taskName, diff) {
		let tasks;
		if (localStorage.getItem("tasks") === null) {
			tasks = [];
		} else {
			tasks = JSON.parse(localStorage.getItem("tasks"));
		}

		let taskObject = {
			lugar: taskName,
			dificuldade: diff,
		};

		tasks.push(taskObject);
		console.log(tasks);

		localStorage.setItem("tasks", JSON.stringify(tasks));
	},

	loadTaskFromStorage() {
		// console.log("Loading Tasks");

		let tasks = [];
		if (localStorage.getItem("tasks") === null) {
			tasks = [];
		} else {
			tasks = JSON.parse(localStorage.getItem("tasks"));
		}

		tasks.forEach((task) => {
			// console.log("task");
			this.addTask(task.lugar, task.dificuldade);
		});
	},

	removeTask(e) {
		if (e.target.parentElement.classList.contains("delete-item")) {
			console.log(e.target.parentElement);
			e.target.parentElement.parentElement.remove();
			// Remove from LS
			this.removeTaskFromLocalStorage(e.target.parentElement.parentElement);
		}
	},

	removeTaskFromLocalStorage(taskItem) {
		console.log("Got here");
		let tasks;
		if (localStorage.getItem("tasks") === null) {
			tasks = [];
		} else {
			tasks = JSON.parse(localStorage.getItem("tasks"));
		}

		console.log(taskItem.children[0].textContent);
		tasks.forEach(function (task, index) {
			if (taskItem.children[0].textContent === task.lugar) {
				tasks.splice(index, 1);
			}
		});

		localStorage.setItem("tasks", JSON.stringify(tasks));
	},
	getTasks() {
		let tasks = [];
		if (localStorage.getItem("tasks") === null) {
			tasks = [];
		} else {
			tasks = JSON.parse(localStorage.getItem("tasks"));
		}

		// Convert stringified number to Number
		tasks.forEach((elem) => [(elem.dificuldade = Number(elem.dificuldade))]);

		return tasks;
	},
};
