/**
 * @Name:
 * @Description:
 * @author RiSusss
 * @date 2019-04-09
 */
import React, { Component } from "react";
import ListCard from "./listCard";

export default ({ list, changeOneAgent }) => {
  return (
    <div className="agent-content-list">
      {list.map(item => (
        <ListCard {...{changeOneAgent,item}} key={item.id}/>
      ))}
    </div>
  );
};
