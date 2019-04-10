/**
 * @Name:
 * @Description:
 * @author RiSusss
 * @date 2019-04-10
 */
import React, { Component } from "react";

export default ({ onSearch = () => {}, prefix = "", suffix = "" }) => {
  let inputNode;
  const onKeydown = e => {
    if (e.keyCode === 13) {
      onSearch(inputNode.value);
    }
  };
  return (
    <span className="cruise-input-wrapper">
      <span className='prefix'>
        {prefix}
      </span>
      <input
        className="cruise-input"
        type="text"
        onKeyDown={onKeydown}
        ref={node => (inputNode = node)}
      />
      <span className="suffix">
        {suffix}
      </span>
    </span>
  );
};
