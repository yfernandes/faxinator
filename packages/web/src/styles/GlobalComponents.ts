import styled from "styled-components";

export const GlobalContainer = styled.div`
	background-color: var(--white-color);
	min-height: 2rem;

	text-align: center;
`;

// Buttons
const sharedButton = styled.button`
	font-family: "Poppins", sans-serif;
	display: inline-block;
	padding: 0.8rem 2rem;
	border: none;
	transition: all 0.5s;
	cursor: pointer;
`;

export const btnMain = styled(sharedButton)`
	color: #333;
	background-color: var(--bg-color);
`;

export const btnActive = styled(sharedButton)`
	background-color: var(--main-color);
	color: #000;
	font-weight: bold;
`;
