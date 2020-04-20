"use strict";

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
		// Reconciliate State and View
		this.updateFrequencyDOM(this.frequency);
		// Set Event Listeners
		this.dateInputEl.addEventListener("change", this.dateInputHandler);
		this.daysFrequencyEl.onclick = (e) => this.daysBtnHandler(e); // Buttons Event Listener
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

	dateInputHandler(e) {
		e.preventDefault();
		this.startDate = e.target.value;
		console.log("Got to Date input, startDate: ", this.startDate);
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
