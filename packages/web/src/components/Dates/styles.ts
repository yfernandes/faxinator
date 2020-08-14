import styled from "styled-components";
import { GlobalContainer, btnMain } from "../../styles/GlobalComponents";

export const Container = styled(GlobalContainer)`
	margin: 0 2rem;

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

interface ButtonProps {
	active: boolean;
}
export const Button = styled(btnMain)<ButtonProps>`
	margin: 0.5rem;
	width: 10rem;
	color: ${(props) => (props.active ? "red" : "black")};
`;
