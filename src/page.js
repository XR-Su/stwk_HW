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
import GlobalLayout from "./pages/globalLayout.js";

// export default () => (
//     <Router>
//         aaa
//         <Switch>
//             <Route exact path="/" render={() => <Redirect to="/app/dashboard/index" push />} />
//             <Route path="/app" component={GlobalLayout} />
//             {/*<Route exact path="/" render={() => <Redirect to="/app" push />} />*/}
//             {/*<Route path="/app" component={App} />*/}
//             {/*<Route path="/404" component={NotFound} />*/}
//             {/*<Route path="/login" component={Login} />*/}
//             {/*<Route path="/app" component={GlobalLayout}/>*/}
//         </Switch>
//     </Router>
// )

export default () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/app" push />} />
        <Route path="/app" component={GlobalLayout} />
      </Switch>
    </Router>
  );
};
