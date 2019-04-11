/**
 * @Name:
 * @Description:
 * @author RiSusss
 * @date 2019-04-09
 */
import React, { Component } from "react";
import UserInfoPanel from './userInfoPanel'

class GlobalHeader extends Component {
  render() {
    console.log(this)
    return (
      <div className="global-header">
        <div className="container">
          <div className="left">left</div>
          <div className="center">
            <div className="logo" />
          </div>
          <div className="right">
            <div className="user-info"><UserInfoPanel/></div>
          </div>
        </div>
      </div>
    );
  }
}

export default GlobalHeader;
