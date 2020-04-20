import faxinaComum from "../sorters/faxina.js";

export default {
	tableBodyEL: document.querySelector("tbody"),

	generateResult(data) {
		let result = faxinaComum(data);
		// console.log(this.tableBodyEL.children);
		this.tableBodyEL.innerHTML = "";

		for (let i = 0; i < result.length; i++) {
			if (i === 0) {
				this.tableBodyEL.appendChild(this.createTableRow(result[i], true));
			} else {
				this.tableBodyEL.append(this.createTableRow(result[i], false));
			}
		}
	},

	createTableRow(array, header) {
		// console.log(array, header);
		const row = document.createElement("tr");
		for (let i = 0; i < array.length; i++) {
			if (header) {
				const cell = document.createElement("th");
				cell.classList.add("cell");
				cell.textContent = array[i];
				row.appendChild(cell);
			} else {
				row.classList.add("row");
				const cell = document.createElement("td");
				cell.classList.add("cell");
				cell.textContent = array[i];
				row.appendChild(cell);
			}
		}
		return row;
	},
};
