import React from "react";

import { Container } from "./styles";

interface Props {}

const Members = (props: Props) => {
	return <Container> </Container>;
};

export default Members;

/* PUG
// Section: Members Input
section#members
	h2.section-title Participantes
	.members-container
		form#members-form
			.form-group
				label(for='name') Adicionar Participante
				input#member-name(type='text' name='name' placeholder='Nome da criatura')
				br
				input.btn-main(type="submit" value="Adicionar")
		ul.members-list
			//- li.member-unique Bento
			//- 	a.delete-item
			//- 		i.fa.fa-remove
*/

/* JS
export default {
	membersMock: ["Bento", "Yago", "Piu-Piu", "Sequela", "Xi", "Ceci"],

	membersForm: document.querySelector("#members-form"),
	membersList: document.querySelector(".members-list"),
	memberNameInput: document.querySelector("#member-name"),

	start() {
		this.loadMembersFromStorage();

		this.membersForm.addEventListener("submit", (e) => {
			e.preventDefault();
			if (this.memberNameInput.value === "") {
				alert("Informe o nome do participante");
				return;
			}

			this.addMember(this.memberNameInput.value);
			this.storeMemberInLocalStorage(this.memberNameInput.value);

			this.memberNameInput.value = "";
		});

		this.membersList.addEventListener("click", (e) => {
			e.preventDefault();
			this.removeMember(e);
		});
	},

	addMember(value) {
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
		this.membersList.appendChild(li);

		// Clear Input
	},

	storeMemberInLocalStorage(member) {
		let members;
		if (localStorage.getItem("members") === null) {
			members = [];
		} else {
			members = JSON.parse(localStorage.getItem("members"));
		}

		members.push(member);

		localStorage.setItem("members", JSON.stringify(members));
	},

	loadMembersFromStorage() {
		// console.log("Loading Members");

		let members;
		if (localStorage.getItem("members") === null) {
			members = [];
		} else {
			members = JSON.parse(localStorage.getItem("members"));
		}

		members.forEach((member) => {
			this.addMember(member);
		});
	},

	removeMember(e) {
		if (e.target.parentElement.classList.contains("delete-item")) {
			e.target.parentElement.parentElement.remove();

			// Remove From LS
			this.removeMemberFromLocalStorage(e.target.parentElement.parentElement);
		}
	},

	removeMemberFromLocalStorage(taskItem) {
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
	},

	getMembers() {
		let members;
		if (localStorage.getItem("members") === null) {
			members = [];
		} else {
			members = JSON.parse(localStorage.getItem("members"));
		}
		return members;
	},
};

 */
