/**
 * @Name: agent list card
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

  /**
   * add new resources
   */
  handleAddResources = () => {
    const { agentData, inputResources } = this.state;
    let resources = inputResources.split(","),
      body;

    // filter null character or existed item
    resources = resources.filter(
      item =>
        /\S/.test(item) &&
        agentData.resources.every(existItem => !(item == existItem))
    );
    body = {
      ...agentData,
      resources: [...agentData.resources, ...resources]
    };

    ChangeOneAgent(body.id, body).then(() => {
      this.setState({ agentData: body, inputResources: "" });
    });
  };

  /**
   * delete resource
   * @param resource
   */
  handleDeleteResources = resource => {
    const { agentData } = this.state,
      body = {
        ...agentData
      };

    body.resources.splice(body.resources.indexOf(resource), 1);

    ChangeOneAgent(body.id, body).then(() => {
      this.setState({ agentData: body });
    });
  };

  /**
   * change resource input
   * @param val
   */
  onChangeInput = val => {
    this.setState(preState => ({ inputResources: val }));
  };

  /**
   * hide popover before
   */
  onPopoverHide = () => {
    this.setState(preState => ({ inputResources: "" }));
  };

  /**
   * get resources display dom
   * @returns {*}
   */
  renderResourceContent = () => {
    const { resources } = this.state.agentData;

    if (resources.length > 6) {
      return (
        <div>
          {this.renderResourceTags(0, 6)}
          <Popover
            content={
              <div className="agent-content-os-panel">
                {this.renderResourceTags(6, resources.length)}
              </div>
            }
            footer={[]}
          >
            <span className="resources-more-button">MORE</span>
          </Popover>
        </div>
      );
    } else {
      return this.renderResourceTags(0, resources.length);
    }
  };

  /**
   * render resource dom
   * @param start
   * @param end
   * @returns {any[]}
   */
  renderResourceTags = (start, end) => {
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

  /**
   * render add-dialog content dom
   * @returns {*}
   */
  renderAddDialogContent = () => {
    const { inputResources } = this.state;

    return (
      <div className="agent-content-add-dialog">
        <p className="title">Separate multiple resource name with commas</p>
        <Input
          value={inputResources}
          placeholder="Input value"
          onChange={val => this.onChangeInput(val)}
        />
      </div>
    );
  };

  /**
   * render
   * @returns {*}
   */
  render() {
    const { agentData } = this.state;
    const { name, location, ip, os, status } = agentData;

    return (
      <div className="agent-content-list-listCard">
        <div className="listCard-osIcon">
          <img className="listCard-osIcon-image" src={icons[os]} alt="" />
        </div>
        <div className="listCard-detail">
          <div className="listCard-detail-info">
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
          <div className="listCard-detail-operation">
            <div className="listCard-detail-operation-osTags">
              <Popover
                content={this.renderAddDialogContent()}
                okText="Add Resources"
                onOk={this.handleAddResources}
                onHide={this.onPopoverHide}
              >
                <span className="add-button">
                  <i className="icon-plus" />
                </span>
              </Popover>
              <div>{this.renderResourceContent()}</div>
            </div>
            <div className="listCard-detail-operation-deny">
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
