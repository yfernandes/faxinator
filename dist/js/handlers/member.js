const membersMock = ["Bento", "Yago", "Piu-Piu", "Sequela", "Xi", "Ceci"];

function addMember(value) {
	const membersList = document.querySelector(".members-list");
	// // Create Div Element
	const li = document.createElement("li");
	// // Add Class
	li.className = "member-unique";
	// // Create text node and append to Div
	li.appendChild(document.createTextNode(value));

	const link = document.createElement("a");
	// Add class
	link.className = "delete-item";
	// Add icon html
	link.innerHTML = '<i class="fa fa-remove"></i>';
	// Append the link to li
	li.appendChild(link);

	// // Append li to ul
	membersList.appendChild(li);

	// Clear Input
}

function storeMemberInLocalStorage(member) {
	let members;
	if (localStorage.getItem("members") === null) {
		members = [];
	} else {
		members = JSON.parse(localStorage.getItem("members"));
	}

	members.push(member);

	localStorage.setItem("members", JSON.stringify(members));
}

function loadMembersFromStorage() {
	// console.log("Loading Members");

	let members;
	if (localStorage.getItem("members") === null) {
		members = [];
	} else {
		members = JSON.parse(localStorage.getItem("members"));
	}

	members.forEach((member) => {
		addMember(member);
	});
}

function removeMember(e) {
	if (e.target.parentElement.classList.contains("delete-item")) {
		e.target.parentElement.parentElement.remove();

		// Remove From LS
		removeMemberFromLocalStorage(e.target.parentElement.parentElement);
	}
}

function removeMemberFromLocalStorage(taskItem) {
	let tasks;
	if (localStorage.getItem("members") === null) {
		tasks = [];
	} else {
		tasks = JSON.parse(localStorage.getItem("members"));
	}

	tasks.forEach(function (task, index) {
		if (taskItem.textContent === task) {
			tasks.splice(index, 1);
		}
	});

	localStorage.setItem("members", JSON.stringify(tasks));
}

export {
	addMember,
	removeMember,
	loadMembersFromStorage,
	storeMemberInLocalStorage,
};
