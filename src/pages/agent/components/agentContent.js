/**
 * @Name: agent content
 * @Description:
 * @author RiSusss
 * @date 2019-04-09
 */
import React, { Component } from "react";
import Filter from "./contentFilter";
import List from "./contentList";
import withStore from "../hoc/withStore";

class AgentContent extends Component {
  state = {
    type: "all",
    id: "",
    layoutType: "list"
  };

  /**
   * get list data
   * @returns {*}
   */
  getList = () => {
    const { type, id } = this.state;
    const { agentList } = this.props.store;
    let res;
    res = id === "" ? agentList : agentList.filter(item => item.id == id);
    res =
      type.toLowerCase() === "all"
        ? res
        : res.filter(item => item.type === type.toLowerCase());
    return res;
  };

  /**
   * filter type change
   * @param val
   */
  onFilter = val => {
    this.setState(preState => val);
  };

  /**
   * layout change
   * @param layoutType
   */
  onChangeLayout = layoutType => {
    this.setState(preState => ({ layoutType }));
  };

  /**
   * render
   * @returns {*}
   */
  render() {
    const { getList, onFilter, onChangeLayout } = this;
    const { changeOneAgent } = this.props.store;
    const { layoutType } = this.state;
    return (
      <div className="agent-content">
        <Filter {...{ onFilter, onChangeLayout }} />
        <List list={getList()} {...{ changeOneAgent, layoutType }} />
      </div>
    );
  }
}

export default withStore(AgentContent);
