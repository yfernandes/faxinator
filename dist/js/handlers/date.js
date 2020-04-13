function updateDate() {}

const mockFrequency = [
	{ weekDay: "Domingo", active: false },
	{ weekDay: "Segunda", active: true },
	{ weekDay: "Terca", active: false },
	{ weekDay: "Quarta", active: true },
	{ weekDay: "Quinta", active: false },
	{ weekDay: "Sexta", active: true },
	{ weekDay: "Sabado", active: false },
	{ weekDay: "Todos", active: false },
	{ weekDay: "Alternado", active: false },
];

const daysButtons = document.querySelector(".days").querySelector(".buttons");

function selectDay(e) {
	e.preventDefault();
}

function loadDatesFromStorage() {
	for (let i = 0; i < 9; i++) {
		if (daysButtons.children[i].textContent === mockFrequency[i].weekDay) {
			if (mockFrequency[i].active) {
				if (!daysButtons.children[i].classList.contains("btn-active")) {
					daysButtons.children[i].classList.add("btn-active");
				}
			}
		}
	}

	// mockFrequency.forEach((weekDay) => {
	// });
}

export { updateDate, selectDay, loadDatesFromStorage };
