/**
 * @Name: agent content filter
 * @Description:
 * @author RiSusss
 * @date 2019-04-09
 */
import React, { PureComponent } from "react";
import { Input } from "Components";

class ContentFilter extends PureComponent {
  state = {
    cur: "All",
    filterOptions: ["All", "Physical", "Virtual"],
    searchText: ""
  };
  handleChangeFilter = op => {
    const { onFilter } = this.props;
    this.setState(preState => ({ cur: op }));
    onFilter({ type: op });
  };
  onChangeSearch = val => {
    this.setState(preState => ({ searchText: val }));
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
    const { onFilter } = this.props,
      { searchText } = this.state;
    return (
      <div className="agent-content-filter">
        <div className="filters">
          <div>{this.getFilterOptions()}</div>
          <div className="search-filter">
            <Input
              value={searchText}
              onChange={this.onChangeSearch}
              onSearch={val => onFilter({ id: val })}
              prefix={<i className="icon-search" />}
            />
          </div>
        </div>
        <div className="layouts">
          <i className="icon icon-th-card" />
          <i className="icon icon-th-list layout-active" />
        </div>
      </div>
    );
  }
}

export default ContentFilter;
