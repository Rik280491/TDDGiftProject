import React from "react";
// stops tests from indirectly asserting on behaviour of child components
import { shallow } from "enzyme";
import App from "./App";
import "../setupTests";

describe("App", () => {
	const app = shallow(<App />);

	it("renders correctly", () => {
		expect(app).toMatchSnapshot();
	});

	it("initialises the `state` with an empty list of gifts", () => {
		expect(app.state().gifts).toEqual([]);
	});

	// beforeEach here to avoid code duplication (DRY)
	// afterEach to cleanup, avoids test pollution.
	describe("when clicking the `add gift` button", () => {
		beforeEach(() => {
			app.find(".btn-add").simulate("click");
		});

		afterEach(() => {
			app.setState({ gifts: [] });
		});

		it("adds a new gift to `state`", () => {
			expect(app.state().gifts).toEqual([{ id: 1 }]);
		});

		it("adds a new gift to the rendered list", () => {
			expect(app.find(".gift-list").children().length).toEqual(1);
		});

		it("creates a Gift component", () => {
			expect(app.find("Gift").exists()).toBe(true);
		});
	});
});
