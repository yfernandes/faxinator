import React from "react";
import DayPickerInput from "react-day-picker/DayPickerInput";
import "react-day-picker/lib/style.css";
import { connect } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { bindActionCreators } from "redux";

import { setStartDate, toggleDay } from "../../store/dates/actions";
import Date, { Day } from "../../store/dates/types";
import { AppState, AppActions } from "../../store/rootReducer";

import {
	Container,
	Title,
	SelectionContainer,
	StartingDate,
	WeekDays,
	Button
} from "./styles";

interface DatesState {}

type Props = OwnProps & StateProps & DispatchProps;

const Dates: React.FC<Props> = ({ frequency, toggleDay, setStartDate }) => {
	return (
		<Container>
			<Title>Datas</Title>
			<SelectionContainer>
				<StartingDate data-testid="dayPickerContainer">
					<DayPickerInput
						onDayChange={(day) => {
							setStartDate(day.getTime());
						}}
					/>
				</StartingDate>
				<WeekDays>
					{frequency.map((date) => (
						<Button
							key={date.id}
							active={date.active}
							onClick={() => toggleDay(date.id)}
						>
							{date.weekDay}
						</Button>
					))}
				</WeekDays>
			</SelectionContainer>
		</Container>
	);
};

interface OwnProps {
	id?: string;
	color?: string;
}

interface StateProps {
	dates: Date;
	frequency: Day[];
}
const mapStateToProps = (state: AppState): StateProps => ({
	dates: state.dates,
	frequency: state.dates.frequency
});

interface DispatchProps {
	toggleDay: (id: number) => void;
	setStartDate: (start: number) => void;
}
const mapDispatchToProps = (
	dispatch: ThunkDispatch<any, any, AppActions>
): DispatchProps => ({
	toggleDay: bindActionCreators(toggleDay, dispatch),
	setStartDate: bindActionCreators(setStartDate, dispatch)
});

export default connect<StateProps, DispatchProps, OwnProps>(
	mapStateToProps,
	mapDispatchToProps
)(Dates);
