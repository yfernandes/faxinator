// Members Functions
const membersForm = document.querySelector("#members-form");
const membersList = document.querySelector(".members-list");
const memberNameInput = document.querySelector("#member-name");
const clearBtn = document.querySelector(".delete-member");

function addMember(e) {
	if (memberNameInput.value === "") {
		alert("Informe o nome do participante");
	}

	// console.log(memberNameInput.value);

	// // Create Div Element
	const div = document.createElement("div");
	// // Add Class
	div.className = "member-unique";
	// // Create text node and append to Div
	div.appendChild(document.createTextNode(memberNameInput.value));

	// // Append li to ul
	membersList.appendChild(div);

	// Clear Input
	memberNameInput.value = "";

	e.preventDefault();
}

// Task Functions

const taskForm = document.querySelector("#task-form");
const taskList = document.querySelector(".task-list");
const taskNameInput = document.querySelector("#task-name");
const clearTask = document.querySelector(".delete-task");

function addTask(e) {
	if (memberNameInput.value === "") {
		alert("Informe o nome do participante");
	}

	console.log(memberNameInput.value);

	// // Create Div Element
	const div = document.createElement("div");
	// // Add Class
	div.className = "member-unique";
	// // Create text node and append to Div
	div.appendChild(document.createTextNode(memberNameInput.value));

	// // Append li to ul
	membersList.appendChild(div);

	// Clear Input
	memberNameInput.value = "";

	e.preventDefault();
}

const dateInput = document.querySelector("#startDate");

function selectDate(e) {
	e.preventDefault();
}

document.addEventListener("DOMContentLoaded", function () {
	var elems = document.querySelectorAll(".datePicker");
	var instances = M.Datepicker.init(elems);
});

// Load all event listeners
function loadEventListeners() {
	// Add Task Event
	membersForm.addEventListener("submit", addMember);
	dateInput.addEventListener("change", selectDate);
}

loadEventListeners();
