/**
 * @Name: notification
 * @Description:
 * @author RiSusss
 * @date 2019-04-20
 */
import React, { Component } from "react";

export default class Newsboard extends Component {
  render() {
    const { title, content } = this.props;
    return (
      <div className="cruise-newsboard">
        <span>{title}: </span>
        <span>{content}</span>
      </div>
    );
  }
}
