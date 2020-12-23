import React from "react";
import { shallow } from "enzyme";
import Friend from "./Friend";

describe("Friend", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Friend />);
    expect(wrapper).toMatchSnapshot();
  });
});
