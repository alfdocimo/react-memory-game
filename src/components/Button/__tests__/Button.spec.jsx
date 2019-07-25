import React from "react";
import { mount } from "enzyme";
import Button from "../Button";

let wrapper;
const mockCallBack = jest.fn();

beforeEach(() => {
  wrapper = mount(
    <Button onClick={mockCallBack} fontSize={20}>
      Click me!
    </Button>
  );
});

it("Renders without crashing", () => {
  expect(wrapper).toBeDefined();
  expect(wrapper).toHaveLength(1);
});

it("Its able to callback the function passed as prop onClick", () => {
  wrapper
    .find("[data-test-id='button']")
    .last()
    .simulate("click");
  expect(mockCallBack).toHaveBeenCalled();
});

it("Its able to render children", () => {
  expect(
    wrapper
      .find("[data-test-id='button']")
      .last()
      .text()
  ).toEqual("Click me!");
});

it("Its able to set props", () => {
  expect(wrapper.props().fontSize).toEqual(20);
});
