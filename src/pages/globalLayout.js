/**
 * @Name:
 * @Description:
 * @author RiSusss
 * @date 2019-04-09
 */

import React, { Component, lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./layout/globalHeader";
import Sider from "./layout/globalSider";
const Agent = lazy(() => import("./agent"));
const Dashboard = lazy(() => import('./dashboard'));
const MyCruise = lazy(() => import('./myCruise'));
const Help = lazy(() => import('./help'));

export default class extends Component {
  render() {
    return (
      <div className="global-layout">
        <Header />
        <div className="global-main">
          <Sider />
          <div className="global-content">
            <Suspense fallback={<div>loading</div>}>
              <Switch>
                <Route path="/app/agent" component={props => <Agent {...props} />} />
                <Route path="/app/dashboard" component={props => <Dashboard {...props} />} />
                <Route path="/app/myCruise" component={props => <MyCruise {...props} />} />
                <Route path="/app/help" component={props => <Help {...props} />} />
              </Switch>
            </Suspense>
          </div>
        </div>
      </div>
    );
  }
}
