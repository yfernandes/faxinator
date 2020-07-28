import styled from "styled-components";

export const MainSection = styled.section`
	max-width: var(--website-width);
	margin: 1rem auto;
	display: flex;
	justify-content: space-between;
`;

export const LeftContent = styled.div`
	width: 25%;
`;

export const RightContent = styled.div`
	margin-left: 1rem;
	width: 75%;
`;

/*
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
*/
