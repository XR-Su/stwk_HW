/**
 * @Name: agent store hoc
 * @Description:
 * @author RiSusss
 * @date 2019-04-10
 */

import React from "react";
import { StoreConsumer } from "../context/storeContext";

export default Component => () => (
  <StoreConsumer>{store => <Component store={store} />}</StoreConsumer>
);
