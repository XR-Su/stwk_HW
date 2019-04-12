/**
 * @Name:
 * @Description:
 * @author RiSusss
 * @date 2019-04-12
 */

import React from "react";
import { render, configure } from "enzyme";
import toJson from "enzyme-to-json";
import Adapter from "enzyme-adapter-react-16";
import Input from "../index";
configure({ adapter: new Adapter() });

describe("input test", () => {
    const handleChange = jest.fn();
  it("basic use", () => {
    const wrapper = render(<Input />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
