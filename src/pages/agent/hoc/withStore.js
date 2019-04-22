/**
 * @Name: agent store hoc
 * @Description:
 * @author RiSusss
 * @date 2019-04-10
 */

import React from "react";
import { StoreConsumer } from "../context/storeContext";

export default Component => props => (
  <StoreConsumer>
    {store => <Component store={store} {...props} />}
  </StoreConsumer>
);
