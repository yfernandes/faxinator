import Members from "./handlers/member.js";
import Tasks from "./handlers/task.js";
import Dates from "./handlers/date.js";

// import * as sorter from "./sorters/faxina.js";
import Result from "./handlers/result.js";

function loadData() {
	Tasks.start();
	Dates.start();
	Members.start();

	let data = {
		members: Members.getMembers(),
		tasks: Tasks.getTasks(),
		frequency: Dates.getFrequency(),
		startDate: Dates.getStart(),
	};

	Result.generateResult(data);
}

document.addEventListener("DOMContentLoaded", loadData);
