/**
 * @Name:
 * @Description:
 * @author RiSusss
 * @date 2019-04-09
 */
import React, { Component } from "react";
import Input from "Components/Input/index";

export default class extends Component {
  state = {
    cur: "All",
    filterOptions: ["All", "Physical", "Virtual"]
  };
  handleChangeFilter = op => {
    const { onFilter } = this.props;
    this.setState(preState => ({ cur: op }));
    onFilter({ type: op });
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
    const { onFilter } = this.props;
    return (
      <div className="filter">
        <div className="left">
          <div>{this.getFilterOptions()}</div>
          <div className="search-filter">
            <Input
              onSearch={val => onFilter({ id: val })}
              prefix={<i className="icon-search" />}
            />
          </div>
        </div>
        <div className="right" />
      </div>
    );
  }
}
