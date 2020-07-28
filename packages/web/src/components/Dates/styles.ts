import styled from "styled-components";
import { GlobalContainer, btnMain } from "../../styles/GlobalComponents";

export const Container = styled(GlobalContainer)`
	margin: 0 2rem;
	height: 100%;

	padding: 1.5rem;
`;

export const Title = styled.h2`
	text-align: center;
`;

export const SelectionContainer = styled.div``;

export const StartingDate = styled.div`
	display: flex;
	margin: 0.5rem 0;
	justify-content: center;
`;

export const WeekDays = styled.div`
	display: flex;
	flex-flow: row wrap;
	justify-content: space-evenly;
`;

export const Button = styled(btnMain)`
	height: 3rem;
	padding: 0.5rem;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	align-content: space-between;
	.day-btn {
		width: 30%;
	}
`;
