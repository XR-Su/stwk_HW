/**
 * @Name: global sider
 * @Description:
 * @author RiSusss
 * @date 2019-04-09
 */
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Menu } from "Components";
import routes from "../../routes";

export default class extends Component {
  render() {
    return (
      <div className="global-sider">
        <Menu theme="dark">
          {routes.map(route => (
            <Menu.Item key={route.key} title={<i className={route.icon} />}>
              <Link to={route.path}>{route.title}</Link>
            </Menu.Item>
          ))}
        </Menu>
        <div className="history-info">
          <p className="title">History</p>
        </div>
      </div>
    );
  }
}
