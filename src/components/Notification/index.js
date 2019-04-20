/**
 * @Name: notification
 * @Description:
 * @author RiSusss
 * @date 2019-04-20
 */
import React, { Component } from "react";

export default class Notification extends Component {
  render() {
    console.log(this.props.title);
    return <div style={{ display: "none" }} />;
  }
}
