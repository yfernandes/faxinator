import React from "react";
import {
	render,
	screen,
	fireEvent,
	waitForElement
} from "@testing-library/react";

import Dates from "./index";

const renderComponent = (Component: React.FC) => {
	return render(<Component />);
};

describe("Dates", () => {
	describe("UI", () => {
		test("Should have Title", () => {
			const { getByRole } = renderComponent(Dates);
			const title = getByRole("heading");
			expect(title).toBeInTheDocument();
		});
		test("Should have a DatePicker", () => {
			const { getByTestId } = renderComponent(Dates);
			const dayPicker = getByTestId("dayPickerContainer");
			expect(dayPicker).toBeInTheDocument();
		});
		test("Should have Buttons for interaction", () => {
			const { getAllByRole } = renderComponent(Dates);
			const buttons = getAllByRole("button");
			expect(buttons).toHaveLength(10);
		});
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
