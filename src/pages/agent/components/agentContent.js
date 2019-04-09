/**
 * @Name:
 * @Description:
 * @author RiSusss
 * @date 2019-04-09
 */
import React, { Component } from "react";
import Filter from "./contentFilter";
import List from "./contentList"

// export default () => (
//     <div className="content">
//         content
//     </div>
// )
export default class extends Component {
  render() {
    return (
      <div className="content">
        <Filter />
          <List/>
      </div>
    );
  }
}
