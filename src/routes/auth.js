/**
 * @Name: Auth
 * @Description:
 * @author RiSusss
 * @date 2019-04-09
 */
import React, { Component, Fragment } from "react";
import { Redirect } from "react-router-dom";

export default class extends Component {
  state = {
    logged: true
  };
  render() {
    const { logged } = this.state,
      { children } = this.props;
    return <Fragment>{logged ? children : <Redirect to="/login" />}</Fragment>;
  }
}
