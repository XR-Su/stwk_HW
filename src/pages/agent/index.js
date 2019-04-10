/**
 * @Name:
 * @Description:
 * @author RiSusss
 * @date 2019/4/9
 */

import React, { Component } from "react";
import Header from "./components/agentHeader";
import Content from "./components/agentContent";
import { StoreProvider } from "./context/storeContext";
import { GetAgentList, GetAgentOne, ChangeOneAgent } from "./api";

export default class extends Component {
  state = {
    agentList: []
  };
  componentDidMount() {
    this.getAgentList();
  }
  getAgentList = () => {
    GetAgentList().then(res => this.setState(preState => ({ agentList: res })));
  };
  render() {
    const { agentList } = this.state;
    const { getAgentList } = this;
    return (
      <StoreProvider value={{ ...{ agentList, getAgentList } }}>
        <div className="agent">
          <Header />
          <Content />
        </div>
      </StoreProvider>
    );
  }
}
