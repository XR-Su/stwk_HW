/**
 * @Name: 弹出对话框
 * @Description: 这里原本是作为弹出框的基础组件，待改善
 * @author RiSusss
 * @date 2019-04-10
 */
import React, { Component, Fragment } from "react";
import { createPortal } from "react-dom";
import { Button } from "Components";

export default class Popover extends Component {
  state = {
    visible: false,
    popupX: 0,
    popupY: 0
  };

  static getDerivedStateFromProps(nextProps, preState) {
    if (nextProps.visible !== undefined) {
      return { visible: nextProps.visible };
    }
    return null;
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.hidePopup);
  }

  handleClickPopup = e => {
    e.nativeEvent.stopImmediatePropagation();
  };
  showPopup = e => {
    const rect = e.getBoundingClientRect();
    this.setState(preState => ({
      visible: true,
      popupX: rect.x + -14 + "px",
      popupY: rect.y + rect.height + 16 + "px"
    }));
    document.addEventListener("click", this.hidePopup);
  };
  hidePopup = () => {
    this.setState(preState => ({ visible: false }));
    document.removeEventListener("click", this.hidePopup);
  };
  renderChild = () => {
    const child = this.props.children;
    const res = React.cloneElement(child, {
      onClick: () => this.showPopup(this.childNode),
      ref: node => {
        this.childNode = node;
      }
    });
    return res;
  };
  renderPopover = () => {
    const { visible, popupX, popupY } = this.state;
    const { onOk, onCancel } = this.props;
    const display = visible ? "block" : "none";
    const arraw = <span className="arrow"/>
    const header = (
      <div className="header">
        <i className="icon-close" onClick={this.hidePopup} />
      </div>
    );
    const footer = (
      <div>
        <Button type="primary" onClick={onOk}>
          {this.props.okText || "Ok"}
        </Button>
        <Button type="cancel" onClick={onCancel || this.hidePopup}>
          {this.props.cancelText || "Cancel"}
        </Button>
      </div>
    );
    const content = this.props.content;
    return (
      <div className="cruise-popover-wrapper">
        <div
          className="cruise-popover"
          onClick={this.handleClickPopup}
          style={{
            display: display,
            left: popupX,
            top: popupY
          }}
        >
          {arraw}
          {header}
          {content}
          {footer}
        </div>
      </div>
    );
  };
  render() {
    return (
      <Fragment>
        {this.renderChild()}
        {createPortal(this.renderPopover(), document.getElementById("root"))}
      </Fragment>
    );
  }
}

Popover.defaultProps = {
  onOk: () => {}
};
