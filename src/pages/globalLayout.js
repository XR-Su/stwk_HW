/**
 * @Name:
 * @Description:
 * @author RiSusss
 * @date 2019-04-09
 */

import React, { Component, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import _isEmpty from "lodash/isEmpty";
import Header from "./layout/globalHeader";
import Sider from "./layout/globalSider";
import { Notification } from "Components";
import routes from "../routes";

class GlobalLayout extends Component {
  renderNotification = () => {
    const { title, content, type } = this.props.notification;
    if (_isEmpty(title) && _isEmpty(content)) return null;
    return <Notification {...{ title, content, type }} />;
  };
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
        {this.renderNotification()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    notification: state.app.notification
  };
};

export default connect(mapStateToProps)(GlobalLayout);
