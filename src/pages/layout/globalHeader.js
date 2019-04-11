/**
 * @Name:
 * @Description:
 * @author RiSusss
 * @date 2019-04-09
 */
import React, { Component } from "react";
import UserInfoPanel from "./userInfoPanel";

class GlobalHeader extends Component {
  render() {
    console.log(this);
    return (
      <div className="global-header">
        <div className="container">
          <div className="other" />
          <div className="global-header-title">
            <div className="logo" />
          </div>
          <div className="global-header-user">
            <div className="user-info">
              <img
                className="user-icon"
                src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1554976808959&di=ed628fa6300649b1a3d677a280abf362&imgtype=0&src=http%3A%2F%2Fimg3.duitang.com%2Fuploads%2Fitem%2F201309%2F26%2F20130926095200_zFdvE.thumb.700_0.jpeg"
                alt=""
              />
              <i className="icon-angle-down" />
              <UserInfoPanel />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GlobalHeader;
