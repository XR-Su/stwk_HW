/**
 * @Name:
 * @Description:
 * @author RiSusss
 * @date 2019-04-10
 */
import React, { Component } from "react";

export default ({ onSearch = () => {}, onChange=()=>{}, prefix = "", suffix = "", placeholder='' }) => {
  let inputNode;
  const onKeydown = e => {
    if (e.keyCode === 13) {
      onSearch(inputNode.value);
    }
  };
  const onInputChange =()=>{
      onChange(inputNode.value)
  }
  return (
    <span className="cruise-input-wrapper">
      <span className='prefix'>
        {prefix}
      </span>
      <input
        className="cruise-input"
        type="text"
        placeholder={placeholder}
        onKeyDown={onKeydown}
        onChange={onInputChange}
        ref={node => (inputNode = node)}
      />
      <span className="suffix">
        {suffix}
      </span>
    </span>
  );
};
