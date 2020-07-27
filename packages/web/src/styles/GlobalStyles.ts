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
.section-title {
	background-color: var(--main-color);
	color: var(--white-color);
	text-align: center;

	/* font-size: 2rem; */
	/* display: block; */
	padding: 0.5rem 0;
	font-weight: 100;
	text-transform: uppercase;
}

.text-center {
	text-align: center;
}

.main {
	max-width: var(--website-width);
	margin: 1rem auto;
	display: flex;
	justify-content: space-between;

	.left {
		width: 25%;
	}
	.right {
		margin-left: 1rem;
		width: 75%;
	}
}

@media screen and (max-width: 768px) {
	.main {
		width: 100%;
		display: block;

		.left,
		.right {
			width: 80%;

			margin: auto;
		}
	}

	.table {
		display: block;
	}

	.row {
		display: block;
	}

	.row.header {
		padding: 0;
		height: 0px;
	}

	.row.header .cell {
		display: none;
	}

	.row .cell:before {
		font-family: Poppins-Bold;
		font-size: 12px;
		color: var(--data-title-color);
		line-height: 1.2;
		text-transform: uppercase;
		font-weight: unset !important;

		margin-bottom: 13px;
		content: attr(data-title);
		min-width: 98px;
		display: block;
	}

	.cell {
		display: block;
	}

	.row {
		border-bottom: 1px solid var(--border-color);
		padding-bottom: 18px;
		padding-top: 30px;
		padding-right: 15px;
		margin: 0;
	}

	.row .cell {
		border: none;
		padding-left: 30px;
		padding-top: 16px;
		padding-bottom: 16px;
	}
	.row .cell:nth-child(1) {
		padding-left: 30px;
	}

	.row .cell {
		font-family: Poppins-Regular;
		font-size: 18px;
		color: var(--darker-text-color);
		line-height: 1.2;
		font-weight: unset !important;
	}

	.table,
	.row,
	.cell {
		width: 100% !important;
	}
}


`;
