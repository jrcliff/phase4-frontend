import React from "react";
import { shallow } from "enzyme";
import Timeline from "./Timeline";

describe("Timeline", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Timeline />);
    expect(wrapper).toMatchSnapshot();
  });
});
