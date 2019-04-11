/**
 * @Name:
 * @Description:
 * @author RiSusss
 * @date 2019-04-09
 */

import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./layout/globalHeader";
import Sider from "./layout/globalSider";
import Agent from "./agent";

export default class extends Component {
  render() {
    return (
      <div className="global-layout">
        <Header />
        <div className="global-main">
          <Sider />
          <div className="global-content">
            <Switch>
              <Route path="/app/agent" component={Agent} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}
