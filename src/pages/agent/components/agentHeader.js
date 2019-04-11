/**
 * @Name:
 * @Description:
 * @author RiSusss
 * @date 2019-04-09
 */
import React, { Component } from "react";
import ViewCard from "./headerViewCard";
import CountCard from "./headerCountCard";
import withStore from "../hoc/withStore";

class AgentHeader extends Component {
  getCardData = () => {
    const { agentList } = this.props.store;
    let buildingCount = 0,
      idleCount = 0,
      allCount = 0,
      physicalCount = 0,
      virtualCount = 0;
    agentList.forEach(item => {
      switch (item.status) {
        case "building":
          buildingCount++;
          break;
        case "idle":
          idleCount++;
          break;
        default:
      }
      switch (item.type) {
        case "physical":
          physicalCount++;
          break;
        case "virtual":
          virtualCount++;
          break;
        default:
      }
      allCount++;
    });
    return {
      ...{ buildingCount, idleCount, allCount, physicalCount, virtualCount }
    };
  };
  render() {
    const {
      buildingCount,
      idleCount,
      allCount,
      physicalCount,
      virtualCount
    } = this.getCardData();
    return (
      <div className="header">
        <ViewCard
          bgColor="#FF9A2A"
          title="Building"
          count={buildingCount}
          icon="icon-cog"
        />
        <ViewCard
          bgColor="#7FBC39"
          title="Idle"
          count={idleCount}
          icon="icon-coffee"
        />
        <CountCard
          all={allCount}
          physical={physicalCount}
          virtual={virtualCount}
        />
      </div>
    );
  }
}

export default withStore(AgentHeader);
