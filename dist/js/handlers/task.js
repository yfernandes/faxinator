const taskMock = [
	{ lugar: "Cozinha", dificuldade: 10 },
	{ lugar: "Sala", dificuldade: 10 },
	{ lugar: "Banheiro Suite", dificuldade: 10 },
	{ lugar: "Banheiro Social", dificuldade: 10 },
];

function addTask(name, diff) {
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
}

function storeTaskInLocalStorage(taskName, diff) {
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
}

function loadTaskFromStorage() {
	// console.log("Loading Tasks");

	let tasks = [];
	if (localStorage.getItem("tasks") === null) {
		tasks = [];
	} else {
		tasks = JSON.parse(localStorage.getItem("tasks"));
	}

	tasks.forEach((task) => {
		// console.log("task");
		addTask(task.lugar, task.dificuldade);
	});
}

function removeTask(e) {
	// console.log(e.target.parentElement.parentElement);
	if (e.target.parentElement.classList.contains("delete-item")) {
		e.target.parentElement.parentElement.remove();
		// Remove from LS
		removeTaskFromLocalStorage(e.target.parentElement.parentElement);
	}
}

function removeTaskFromLocalStorage(taskItem) {
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
}

export {
	addTask,
	removeTask,
	loadTaskFromStorage,
	storeTaskInLocalStorage,
	taskMock,
};
