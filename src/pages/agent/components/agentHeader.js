/**
 * @Name:
 * @Description:
 * @author RiSusss
 * @date 2019-04-09
 */
import React, { Component } from "react";
import ViewCard from "./headerViewCard";
import CountCard from './headerCountCard'

export default class extends Component {
  render() {
    return (
      <div className="header">
        <ViewCard bgColor="#FF9A2A" title="Building" count="3" icon="icon-cog"/>
        <ViewCard bgColor="#7FBC39" title="Idle" count="5" icon="icon-coffee"/>
        <CountCard all={8} physical={4} virtual={4}/>
      </div>
    );
  }
}
