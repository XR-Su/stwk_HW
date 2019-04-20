/**
 * @Name:
 * @Description:
 * @author RiSusss
 * @date 2019-04-09
 */

import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Login from "./pages/login";
import Auth from "./routes/auth";
import GlobalLayout from "./pages/globalLayout.js";

export default () => {
  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          render={() => <Redirect to="/app/agent" push />}
        />
        <Route path="/login" component={Login} />
        <Auth>
          <Switch>
            <Route
              path="/app"
              component={props => <GlobalLayout {...props} />}
            />
          </Switch>
        </Auth>
      </Switch>
    </Router>
  );
};
