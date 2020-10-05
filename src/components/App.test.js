import React from "react";
// stops tests from indirectly asserting on behaviour of child components
import { shallow } from "enzyme";
import App from "./App";
import "../setupTests";

const app = shallow(<App />);

it("renders correctly", () => {
	expect(app).toMatchSnapshot();
});

it("initialises the `state` with an empty list of gifts", () => {
	expect(app.state().gifts).toEqual([]);
});

it("adds a new gift to `state` when clicking the `add gift` button", () => {
	app.find(".btn-add").simulate("click");

	expect(app.state().gifts).toEqual([{ id: 1 }]);
});
