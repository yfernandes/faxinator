import React from "react";
import { NavBar, Title, Link } from "./styles";

const Header = () => {
	return (
		<NavBar>
			<Title>Faxinator</Title>
			<ul>
				<Link to="/about"> About</Link>
				<Link to="/login"> Login</Link>
			</ul>
		</NavBar>
	);
};

export default Header;
