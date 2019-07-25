import React from "react";
import { mount } from "enzyme";
import Viewer from "../Viewer";

let wrapper;

beforeEach(() => {
  wrapper = mount(
    <Viewer>
      <div>Eyooo hi</div>
    </Viewer>
  );
});

it("Renders without crashing", () => {
  expect(wrapper).toBeDefined();
  expect(wrapper).toHaveLength(1);
});

it("Its able to render children", () => {
  expect(
    wrapper
      .find("[data-test-id='card-viewer']")
      .last()
      .childAt(0)
      .text()
  ).toEqual("Eyooo hi");
});
