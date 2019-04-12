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
import { Menu } from "../index";
configure({ adapter: new Adapter() });

describe("menu test", () => {
  it("basic use", () => {
    const wrapper = render(<Menu />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
