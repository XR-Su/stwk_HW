/**
 * @Name:
 * @Description:
 * @author RiSusss
 * @date 2019-04-12
 */

import React from "react";
import { mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Input from "../index";
configure({ adapter: new Adapter() });

describe("input test", () => {
  const handleSearch = jest.fn();
  const handleChange = jest.fn();
  it("basic use", () => {
    const wrapper = mount(<Input value="test" onSearch={handleSearch} onChange={handleChange} />);
    const input = wrapper.find(".cruise-input");

    input.simulate("keyDown", { keyCode: 13 });
    expect(handleSearch).toBeCalledWith('test');

    input.simulate("change");
    expect(handleChange).toBeCalledWith('test')
  });
});
