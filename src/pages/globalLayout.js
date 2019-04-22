/**
 * @Name: global layout
 * @Description:
 * @author RiSusss
 * @date 2019-04-09
 */

import React, { Component, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./layout/globalHeader";
import Sider from "./layout/globalSider";
import routes from "../routes";

class GlobalLayout extends Component {
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

export default GlobalLayout;
