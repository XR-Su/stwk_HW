/**
 * @Name:
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
    id: ""
  };
  getList = () => {
    console.log(this.props)
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
  onFilter = val => {
    this.setState(preState => val);
  };
  render() {
    const { getList, onFilter } = this;
    const {changeOneAgent} = this.props.store
    return (
      <div className="content">
        <Filter {...{ onFilter }} />
        <List list={getList()} {...{changeOneAgent}} />
      </div>
    );
  }
}

export default withStore(AgentContent);
