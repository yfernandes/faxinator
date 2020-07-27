import React from "react";
import {
	render,
	screen,
	fireEvent,
	waitForElement
} from "@testing-library/react";

import { Router } from "react-router-dom";

import Header from "./index";
import { createMemoryHistory } from "history";

const renderWithRouter = (Component: React.FC) => {
	const history = createMemoryHistory();
	return render(
		<Router history={history}>
			<Component />
		</Router>
	);
};

describe("Header", () => {
	test("should have title", () => {
		const { getByText } = renderWithRouter(Header);
		const title = getByText("Faxinator");

		expect(title).toBeInTheDocument();
	});

	test("should have links ", () => {
		const { getAllByRole } = renderWithRouter(Header);
		const test = getAllByRole("link");

		expect(test).toHaveLength(2);
	});
});
