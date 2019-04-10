/**
 * @Name:
 * @Description:
 * @author RiSusss
 * @date 2019-04-09
 */
import React, { Component } from "react";
import ListCard from "./listCard";

export default ({ list }) => {
  return (
    <div className="list">
      {list.map(item => (
        <ListCard {...item} key={item.id}/>
      ))}
    </div>
  );
};
