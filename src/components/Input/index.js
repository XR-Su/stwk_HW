/**
 * @Name:
 * @Description:
 * @author RiSusss
 * @date 2019-04-10
 */
import React, { memo } from "react";

const Input = memo(
  ({
    onSearch = () => {},
    onChange = () => {},
    prefix = "",
    suffix = "",
    placeholder = "",
    value = ""
  }) => {
    let inputNode;
    const onKeydown = e => {
      if (e.keyCode === 13) {
        onSearch(inputNode.value);
      }
    };
    const onInputChange = () => {
      onChange(inputNode.value);
    };
    return (
      <span className="cruise-input-wrapper">
        <span className="prefix">{prefix}</span>
        <input
          className="cruise-input"
          type="text"
          value={value}
          placeholder={placeholder}
          onKeyDown={onKeydown}
          onChange={onInputChange}
          ref={node => (inputNode = node)}
        />
        <span className="suffix">{suffix}</span>
      </span>
    );
  }
);

export default Input;
