import styled from "styled-components";

const sharedButton = styled.button`
	display: inline-block;
	padding: 0.8rem 2rem;
	transition: all 0.5s;
	border: none;
	cursor: pointer;
`;

export const btnMain = styled(sharedButton)`
	color: #333;
	background-color: var(--bg-color);
	font-family: "Poppins", sans-serif;
`;

export const btnActive = styled(sharedButton)`
	background-color: var(--main-color);
	color: #000;
	font-weight: bold;
`;
