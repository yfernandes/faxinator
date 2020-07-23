import React from "react";

const index = () => {
	return <div></div>;
};

export default index;

/* JS
export default {
	defaultFrequency: [
		{ weekDay: "Domingo", active: false },
		{ weekDay: "Segunda", active: false },
		{ weekDay: "Terca", active: true },
		{ weekDay: "Quarta", active: false },
		{ weekDay: "Quinta", active: false },
		{ weekDay: "Sexta", active: false },
		{ weekDay: "Sabado", active: false },
		{ weekDay: "Todos", active: false },
		{ weekDay: "Alternado", active: false },
	],

	dateInputEl: document.querySelector("#startDate"),
	daysFrequencyEl: document.querySelector(".days"),
	daysButtonsEl: document.querySelector(".days").querySelector(".buttons"),
	startDate: "",
	frequency: [],

	start() {
		// Initialize variables
		this.startDate = this.dateInputEl.value;
		// Load Local Storage Data
		this.frequency = this.loadFrequencyFromLocalStorage();
		this.startDate = this.loadStartDateFromLocalStorage();
		// Reconciliate State and View
		this.updateFrequencyDOM(this.frequency);
		this.dateInputEl.value = this.startDate;
		// Set Event Listeners
		this.dateInputEl.addEventListener("change", (e) =>
			this.dateInputHandler(e)
		);
		this.daysFrequencyEl.onclick = (e) => this.daysBtnHandler(e);
	},

	daysBtnHandler(e) {
		console.log("Got to Btn input handler");
		let newFreq = [];
		// Update Frequency State
		newFreq = this.frequency.map((element) => {
			let el =
				element.weekDay === e.target.textContent
					? { weekDay: element.weekDay, active: !element.active }
					: element;
			return el;
		});

		this.frequency = newFreq;

		// console.log(this.frequency);

		// Persist State to Local Storage
		this.storeFrequencyToLocalStorage(this.frequency);
		// Update View State
		this.updateFrequencyDOM(this.frequency);
	},

	dateInputHandler(e) {
		e.preventDefault();
		this.startDate = e.target.value;
		console.log("Got to Date input, startDate: ", this.startDate);
		this.storeStartDateToLocalStorage(e.target.value);
	},

	storeFrequencyToLocalStorage(frequency) {
		localStorage.setItem("frequency", JSON.stringify(frequency));
	},

	loadFrequencyFromLocalStorage() {
		let loadedFrequency;

		if (
			localStorage.getItem("frequency") === null ||
			localStorage.getItem("frequency") === []
		) {
			console.log("No Previous Frequency Found, using default!");
			loadedFrequency = this.defaultFrequency;
		} else {
			// console.log("Previous Frequency Found!");
			loadedFrequency = JSON.parse(localStorage.getItem("frequency"));
		}

		return loadedFrequency;
	},

	updateFrequencyDOM(frequency) {
		// console.log("Updating DOM with:", frequency);

		// Removing Btn Active

		for (let i = 0; i < 9; i++) {
			if (this.daysButtonsEl.children[i].classList.contains("btn-active")) {
				this.daysButtonsEl.children[i].classList.remove("btn-active");
			}

			if (
				this.daysButtonsEl.children[i].textContent ===
					this.frequency[i].weekDay &&
				this.frequency[i].active
			) {
				this.daysButtonsEl.children[i].classList.add("btn-active");
			}
		}
	},

	loadStartDateFromLocalStorage() {
		let date;

		if (
			localStorage.getItem("startDate") === null ||
			localStorage.getItem("startDate") === ""
		) {
			date = "2020-04-01";
		} else {
			date = JSON.parse(localStorage.getItem("startDate"));
		}
		return date;
	},

	storeStartDateToLocalStorage(startDate) {
		localStorage.setItem("startDate", JSON.stringify(startDate));
	},

	getFrequency() {
		let freqString = [];
		this.frequency.forEach((element) => {
			if (element.active) {
				freqString.push(element.weekDay);
			}
		});
		return freqString;
	},

	getStart() {
		if (this.startDate !== "") {
			return this.startDate;
		} else {
			return "2020-04-07";
		}
	},
};

*/

/* PUG
// Section: Date Input
section#date
	h2.section-title Datas
	.date-container
		// Date Picker
		.start
			h4.text-center Quando começa?
				input#startDate(type='date')

		// Days Buttons
		.days
			h4.text-center Quais dias?
			.buttons
				button.btn-main.day-btn Domingo
				button.btn-main.day-btn Segunda
				button.btn-main.day-btn Terça
				button.btn-main.day-btn Quarta
				button.btn-main.day-btn Quinta
				button.btn-main.day-btn Sexta
				button.btn-main.day-btn Sábado
				button.btn-main.day-btn Todos
				button.btn-main.day-btn Alternado
*/
