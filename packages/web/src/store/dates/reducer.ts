import Dates, { DateActionTypes, DateAction } from "./types";

const DefaultDates: Dates = {
	frequency: [
		{ id: 0, weekDay: "Domingo", active: false },
		{ id: 1, weekDay: "Segunda", active: false },
		{ id: 2, weekDay: "Terça", active: false },
		{ id: 3, weekDay: "Quarta", active: false },
		{ id: 4, weekDay: "Quinta", active: false },
		{ id: 5, weekDay: "Sexta", active: false },
		{ id: 6, weekDay: "Sábado", active: false }
	],
	startAt: null,
	createdAt: null
};
const datesReducer = (state = DefaultDates, action: DateAction): Dates => {
	switch (action.type) {
		case DateActionTypes.TOGGLE_DAY:
			return {
				...state,
				frequency: state.frequency.map((day) => {
					return day.id === action.dateId
						? { ...day, active: !day.active }
						: day;
				})
			};
		case DateActionTypes.SET_START:
			const createdAt = Date.now();
			return { ...state, startAt: action.start, createdAt };
		default:
			return state;
	}
};

export { datesReducer };
