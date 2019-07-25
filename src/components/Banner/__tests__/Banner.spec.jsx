import React from "react";
import { mount } from "enzyme";
import Banner from "../Banner";

let wrapper;

beforeEach(() => {
  wrapper = mount(
    <Banner fontSize={20} color={"primary"}>
      Yoo, I'm a banner!
    </Banner>
  );
});

it("Renders without crashing", () => {
  expect(wrapper).toBeDefined();
  expect(wrapper).toHaveLength(1);
});

it("Its able to set fontSize prop", () => {
  expect(wrapper.props().fontSize).toEqual(20);
});

it("Its able to set color prop", () => {
  expect(wrapper.props().color).toEqual("primary");
});

it("Its able to render children", () => {
  expect(
    wrapper
      .find("[data-test-id='banner']")
      .last()
      .text()
  ).toEqual("Yoo, I'm a banner!");
});
