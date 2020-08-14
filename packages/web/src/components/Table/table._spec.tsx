import React from "react";
import {
	render,
	screen,
	fireEvent,
	waitForElement
} from "@testing-library/react";

import Table from "./index";

const renderComponent = (Component: React.FC) => {
	return render(<Component />);
};

describe("Members", () => {
	describe("UI", () => {
		test("Should have Title", () => {});
		test("Should have a name input field", () => {});
		test("Should have a add buttons", () => {});
	});
	describe("State", () => {
		test("Should persist locally picked date", () => {});
		test("Should persist locally selected days", () => {});
		describe("User logged in", () => {
			test("Should persist to all data DB", () => {});
		});
		describe("User not logged", () => {});
	});
});
