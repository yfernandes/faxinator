import styled from "styled-components";
import { GlobalContainer } from "../../styles/GlobalComponents";

import { Link as RouterLink } from "react-router-dom";

export const NavBar = styled.header`
	background-color: var(--main-color);
	color: var(--white-color);
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0.5rem 0;
`;

export const Title = styled.a`
	font-size: 2.2rem;
	color: var(--white-color);
	justify-self: center;
	margin-left: 47vw;
`;

export const LinkList = styled.ul`
	justify-self: right;
`;

export const Link = styled(RouterLink)`
	text-align: right;
	color: var(--white-color);
	margin-left: auto;
	padding-right: 1rem;
`;
/*
	.section-title {
		background-color: var(--main-color);
		color: var(--white-color);
		text-align: center;

		padding: 0.5rem 0;
		font-weight: 100;
		text-transform: uppercase;
	}

	*/
