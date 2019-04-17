/**
 * @Name:
 * @Description:
 * @author RiSusss
 * @date 2019-04-17
 */
import React, { Component } from "react";

export default class GridCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      agentData: { ...props.item },
      inputResources: ""
    };
  }
  render() {
    const { agentData } = this.state;
    const { name, location, ip, os, status } = agentData;
    return <div className="grid-card">{name}</div>;
  }
}
