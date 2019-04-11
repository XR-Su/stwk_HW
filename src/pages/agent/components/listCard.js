/**
 * @Name:
 * @Description:
 * @author RiSusss
 * @date 2019-04-10
 */
import React, { PureComponent } from "react";
import { Popover, Input, Button } from "Components";
import windows from "Assets/os_icons/windows.png";
import centos from "Assets/os_icons/cent_os.png";
import debian from "Assets/os_icons/debin.png";
import suse from "Assets/os_icons/suse.png";
import ubuntu from "Assets/os_icons/ubuntu.png";
import { ChangeOneAgent } from "../api";

const icons = { ...{ windows, centos, debian, suse, ubuntu } };

export default class extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      agentData: { ...props.item },
      inputResources: ""
    };
  }
  handleAddResources = () => {
    const { agentData, inputResources } = this.state,
      resources = inputResources.split(","),
      body = {
        ...agentData,
        resources: [...agentData.resources, ...resources]
      };
    ChangeOneAgent(body.id, body).then(() => {
      this.setState({ agentData: body, inputResources: "" });
    });
  };
  handleDeleteResources = resource => {
    console.log(resource);
    const { agentData } = this.state,
      body = {
        ...agentData
      };
    body.resources.splice(body.resources.indexOf(resource), 1);
    ChangeOneAgent(body.id, body).then(() => {
      this.setState({ agentData: body });
    });
  };
  onChangeInput = val => {
    this.setState(preState => ({ inputResources: val }));
  };
  getResourceContent = () => {
    const { resources } = this.state.agentData;
    if (resources.length > 6) {
      return (
        <div>
          {this.getResourceTags(0, 6)}
          <Popover
            content={
              <div className="agent-content-os-panel">
                {this.getResourceTags(6, resources.length - 1)}
              </div>
            }
            footer={[]}
          >
            <span className="more-resources-button">MORE</span>
          </Popover>
        </div>
      );
    } else {
      return this.getResourceTags(0, resources.length - 1);
    }
  };
  getResourceTags = (start, end) => {
    const { resources } = this.state.agentData;
    return resources.map((item, index) => {
      if (!(index >= start && index < end)) return null;
      return (
        <Button
          className="resource-button"
          key={item}
          onClick={() => this.handleDeleteResources(item)}
        >
          {item}
          <i className="icon-trash" />
        </Button>
      );
    });
  };
  render() {
    const { agentData, inputResources } = this.state;
    const { name, location, ip, os, status } = agentData;
    const addDiaContent = (
      <div className="agent-content-add-dialog">
        <p className="title">Separate multiple resource name with commas</p>
        <Input
          value={inputResources}
          placeholder="Input value"
          onChange={val => this.onChangeInput(val)}
        />
      </div>
    );
    return (
      <div className="list-card">
        <div className="os-icon">
          <img className="image" src={icons[os]} alt="" />
        </div>
        <div className="detail">
          <div className="info">
            <span className="item item-name">
              <i className="icon icon-desktop" />
              {name}
            </span>
            <span className={`item item-tag item-${status}`}>{status}</span>
            <span className="item">
              <i className="icon icon-info" />
              {ip}
            </span>
            <span className="item">
              <i className="icon icon-folder" />
              {location}
            </span>
          </div>
          <div className="operation">
            <div className="operation-os">
              <Popover
                content={addDiaContent}
                okText="Add Resources"
                onOk={this.handleAddResources}
              >
                <span className="add-button">
                  <i className="icon-plus" />
                </span>
              </Popover>
              <div>{this.getResourceContent()}</div>
            </div>
            <div className="operation-deny">
              <Button className="deny-button" type="primary">
                <i className="icon-deny" />
                Deny
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
