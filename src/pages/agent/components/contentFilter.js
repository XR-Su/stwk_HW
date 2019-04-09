/**
 * @Name:
 * @Description:
 * @author RiSusss
 * @date 2019-04-09
 */
import React, { Component } from "react";

export default class extends Component {
  state = {
    cur: "All",
    filterOptions: ["All", "Physical", "Virtual"]
  };
  handleChangeFilter = op => {
    this.setState(preState => ({ cur: op }));
  };
  getFilterOptions = () => {
    const { cur, filterOptions } = this.state;
    return filterOptions.map(item => {
      let className = item === cur ? "item-active" : "item";
      return (
        <div
          className={className}
          key={item}
          onClick={() => this.handleChangeFilter(item)}
        >
          {item}
        </div>
      );
    });
  };
  render() {
    return (
      <div className="filter">
          <div className="left">
              <div>{this.getFilterOptions()}</div>
              <div><input type="text"/></div>
          </div>
          <div className="right"></div>
      </div>
    );
  }
}
