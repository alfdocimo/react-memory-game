import React from "react";
import { mount } from "enzyme";
import Card from "../Card";

let wrapper;
const mockCallBack = jest.fn();

beforeEach(() => {
  wrapper = mount(<Card onClick={mockCallBack} title="Awesome Character" />);
});

it("Renders without crashing", () => {
  expect(wrapper).toBeDefined();
  expect(wrapper).toHaveLength(1);
});

it("Its able to callback on click", () => {
  wrapper
    .find("[data-test-id='card']")
    .last()
    .simulate("click");
  expect(mockCallBack).toHaveBeenCalled();
});

it("Its able to render children", () => {
  expect(
    wrapper
      .find("[data-test-id='card-title']")
      .last()
      .text()
  ).toEqual("Awesome Character");
});
