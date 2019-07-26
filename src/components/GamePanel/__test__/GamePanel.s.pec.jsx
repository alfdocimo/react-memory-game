import React from "react";
import { mount } from "enzyme";
import GamePanel from "../GamePanel";

let wrapper;
const mockCallBack = jest.fn();

beforeEach(() => {
  wrapper = mount(
    <GamePanel currentRound={3} resetSelected={mockCallBack} leftToSelect={4} />
  );
});

it("Renders without crashing", () => {
  expect(wrapper).toBeDefined();
  expect(wrapper).toHaveLength(1);
});

it("Its able to set currentRound prop", () => {
  expect(wrapper.props().currentRound).toEqual(3);
});

it("Its able to set leftToSelect prop", () => {
  expect(wrapper.props().leftToSelect).toEqual(4);
});

it("Its able to callback onClick", () => {
  wrapper
    .find("[data-test-id='button-reselect']")
    .last()
    .simulate("click");
  expect(mockCallBack).toHaveBeenCalled();
});
