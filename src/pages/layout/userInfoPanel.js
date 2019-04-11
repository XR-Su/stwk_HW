/**
 * @Name:
 * @Description:
 * @author RiSusss
 * @date 2019/4/11
 */

import React, { Component } from "react";
import { Menu } from "Components";

class UserInfoPanel extends Component {
  render() {
    return (
      <div className="user-info-panel">
        <Menu>
          <Menu.Item key="profile" title={<i className="icon-id-card" />}>
            <span>Profile</span>
          </Menu.Item>
          <Menu.Item itemKey="signout" title={<i className="icon-sign-in" />}>
            <span>Sign Out</span>
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}

export default UserInfoPanel;
