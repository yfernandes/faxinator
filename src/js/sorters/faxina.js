"use strict";

/*
const mockData = {
	tasks: [
		{ lugar: "Cozinha", dificuldade: 7 },
		{ lugar: "Banheiro Suite", dificuldade: 6 },
		{ lugar: "Banheiro Social", dificuldade: 5 },
		{ lugar: "Sala", dificuldade: 4 },
		{ lugar: "Lavanderia", dificuldade: 3 },
		{ lugar: "Varanda", dificuldade: 2 },
		{ lugar: "Copa e Corredor", dificuldade: 1 },
	],
	members: ["Momô", "Piu-Piu", "Bento", "Vlad", "Naue", "Cecilia", "Sequela"],
	frequency: ["Terça", "Sexta"],
	startDate: "2020-04-08",
};
 */
function orderTasks(tarefas, pessoas) {
	tarefas.sort((a, b) => {
		if (a.dificuldade > b.dificuldade) {
			return 1;
		}
		if (a.dificuldade < b.dificuldade) {
			return -1;
		}
	});

	while (pessoas.length - tarefas.length !== 0) {
		if (pessoas.length - tarefas.length > 0) {
			addBreak(tarefas);
		} else {
			mergeTasks(tarefas);
		}
	}

	tarefas.sort((a, b) => {
		if (a.dificuldade > b.dificuldade) {
			return 1;
		}
		if (a.dificuldade < b.dificuldade) {
			return -1;
		}
	});

	let sortedTasks = [];
	var a = tarefas.length;
	for (var i = 0; i < a; i++) {
		if (i % 2 == 0) {
			sortedTasks.push(tarefas.pop());
		} else {
			sortedTasks.push(tarefas.shift());
		}
	}
	return sortedTasks;
}

function makeSheet(tarefas, datas, pessoas) {
	var result = [];

	var header = ["Dias"];
	for (var i = 0; i < datas.length; i++) {
		header.push(datas[i]);
	}
	result.push(header);

	for (var i = 0; i < tarefas.length; i++) {
		var line = [tarefas[i].lugar];
		for (var j = 0; j < pessoas.length; j++) {
			line.push(pessoas[(j + i) % pessoas.length]);
		}
		result.push(line);
	}
	return result;
}

function calculateDays(primeiraFaxina, diasFaxina, tarefas) {
	var d = new Date(primeiraFaxina);
	d.setDate(d.getDate() - d.getDay());
	let days = [];
	for (var i = 0; i < tarefas.length; i++) {
		var aux = new Date(d);
		if (diasFaxina.length == 1) {
			aux.setDate(aux.getDate() + dateToNumber(diasFaxina[0]) + i * 7);
		} else if (diasFaxina.length == 2) {
			switch (i % 2) {
				case 0:
					aux.setDate(
						aux.getDate() + dateToNumber(diasFaxina[0]) + Math.floor(i / 2) * 7
					);
					break;
				case 1:
					aux.setDate(
						aux.getDate() + dateToNumber(diasFaxina[1]) + Math.floor(i / 2) * 7
					);
					break;
			}
		} else if (diasFaxina.length == 3) {
			switch (i % 3) {
				case 0:
					aux.setDate(
						aux.getDate() + dateToNumber(diasFaxina[0]) + Math.floor(i / 3) * 7
					);
					break;
				case 1:
					aux.setDate(
						aux.getDate() + dateToNumber(diasFaxina[1]) + Math.floor(i / 3) * 7
					);
					break;
				case 2:
					aux.setDate(
						aux.getDate() + dateToNumber(diasFaxina[2]) + Math.floor(i / 3) * 7
					);
					break;
			}
		}
		days.push(aux);
	}
	for (var i = 0; i < days.length; i++) {
		let formatted_date =
			days[i].getDate() +
			"-" +
			(days[i].getMonth() + 1) +
			"-" +
			days[i].getFullYear();
		days[i] = formatted_date;
	}
	return days;
}

function addBreak(tarefas) {
	var aux = tarefas.length;
	for (var j = 0; j < aux; j++) {
		tarefas[j].dificuldade += 1;
	}
	tarefas.push({ lugar: "Folga", dificuldade: 1 });
}

function mergeTasks(tarefas) {
	var values = [];
	// Find Min
	for (var i = 0; i < 2; i++) {
		var min;
		for (var j = 0; j < tarefas.length; j++) {
			if (j == 0) {
				min = tarefas[j].dificuldade;
			} else if (tarefas[j].dificuldade < min) {
				min = tarefas[j].dificuldade;
			}
		}
		values.push(
			tarefas.splice(
				tarefas.findIndex((a) => a.dificuldade == min),
				1
			)
		);
	}

	var newTask = {
		lugar: values[0][0].lugar + " & " + values[1][0].lugar,
		dificuldade: values[0][0].dificuldade + values[1][0].dificuldade,
	};
	tarefas.push(newTask);
}

function dateToNumber(dia) {
	switch (dia) {
		case "Domingo":
		case "domingo":
			return 0;
		case "Segunda":
		case "segunda":
			return 1;
		case "Terça":
		case "Terca":
		case "terça":
		case "terca":
			return 2;
		case "Quarta":
		case "quarta":
			return 3;
		case "Quinta":
		case "quinta":
			return 4;
		case "Sexta":
		case "sexta":
			return 5;
		case "Sabado":
		case "Sábado":
		case "sabado":
		case "sábado":
			return 6;
	}
}

export default function faxinaComum(data) {
	let orderedTasks = orderTasks(data.tasks, data.members);
	let days = calculateDays(data.startDate, data.frequency, orderedTasks);
	let sheet = makeSheet(orderedTasks, days, data.members);

	return sheet;
}

// faxine(data);
