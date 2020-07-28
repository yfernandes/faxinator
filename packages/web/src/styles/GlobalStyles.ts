import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap");

:root{
	--website-width: 1400px;
	--bg-color: #c4d3f6;
	--main-color: #3d4479;
	--row-color-hover: #ececff;
	--white-color: #ffffff;
	--text-color: #666666;
	--darker-text-color: #555555;
	--border-color: #f2f2f2;

	--data-title-color: #808080; /* Mobile only */
}

* {
	margin: 0px;
	padding: 0px;
	box-sizing: border-box;
}

body,
html {
	height: 100%;
	font-family: "Poppins", sans-serif;
	background-color: var(--bg-color);
}

ul,
li {
	text-decoration: none;
	list-style: none;
}
`;
