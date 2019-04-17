/**
 * @Name: agent content filter
 * @Description:
 * @author RiSusss
 * @date 2019-04-09
 */
import React, { PureComponent } from "react";
import cs from "classnames";
import { Input } from "Components";

class ContentFilter extends PureComponent {
  state = {
    cur: "All",
    filterOptions: ["All", "Physical", "Virtual"],
    searchText: "",
    layoutType: "list" // list grid
  };
  handleChangeFilter = type => {
    const { onFilter } = this.props;
    this.setState(preState => ({ cur: type }));
    onFilter({ type: type });
  };
  handleChangeLayout = type => {
    const { onChangeLayout } = this.props;
    this.setState(preState => ({ layoutType: type }));
    onChangeLayout(type);
  };
  onChangeSearch = val => {
    this.setState(preState => ({ searchText: val }));
  };
  renderFilterOptions = () => {
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
      { searchText, layoutType } = this.state;
    const isGrid = layoutType === "grid",
      isList = layoutType === "list";
    return (
      <div className="agent-content-filter">
        <div className="filters">
          <div>{this.renderFilterOptions()}</div>
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
          <i
            className={cs("icon", "icon-th-card", { "layout-active": isGrid })}
            onClick={() => this.handleChangeLayout("grid")}
          />
          <i
            className={cs("icon", "icon-th-list", { "layout-active": isList })}
            onClick={() => this.handleChangeLayout("list")}
          />
        </div>
      </div>
    );
  }
}

export default ContentFilter;
