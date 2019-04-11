/**
 * @Name:
 * @Description:
 * @author RiSusss
 * @date 2019-04-09
 */
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Menu } from "Components";

export default class extends Component {
  render() {
    return (
      <div className="global-sider">
        <Menu theme="dark">
          <Menu.Item key="dashboard" title={<i className="icon-dashboard" />}>
            <Link to="/dashbord">DASHBOARD</Link>
          </Menu.Item>
          <Menu.Item key="agent" title={<i className="icon-sitemap" />}>
            <Link to="/app/agent">AGENT</Link>
          </Menu.Item>
          <Menu.Item key="my_cruise" title={<i className="icon-boat" />}>
            <Link to="/app/agent">MY CRUISE</Link>
          </Menu.Item>
          <Menu.Item key="help" title={<i className="icon-life-bouy" />}>
            <Link to="/app/agent">HELP</Link>
          </Menu.Item>
        </Menu>
        <div className="history-info">
          <p className="title">History</p>
        </div>
      </div>
    );
  }
}
