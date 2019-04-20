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
import routes from "../routes";

export default class extends Component {
  render() {
    return (
      <div className="global-layout">
        <Header />
        <div className="global-main">
          <Sider />
          <div className="global-content">
            <Suspense fallback={<div>loading...</div>}>
              <Switch>
                {routes.map(route => {
                  const Component = route.component;
                  return (
                    <Route
                      path={route.path}
                      component={props => <Component {...props} />}
                      key={route.key}
                    />
                  );
                })}
              </Switch>
            </Suspense>
          </div>
        </div>
      </div>
    );
  }
}
