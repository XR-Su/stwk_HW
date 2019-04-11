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
    popoverX: 0,
    popoverY: 0
  };

  static getDerivedStateFromProps(nextProps, preState) {
    if (nextProps.visible !== undefined) {
      return { visible: nextProps.visible };
    }
    return null;
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.hidePopover);
  }

  handleClickPopover = e => {
    e.nativeEvent.stopImmediatePropagation();
  };
  showPopover = e => {
    const rect = e.getBoundingClientRect();
    this.setState(preState => ({
      visible: true,
      popoverX: rect.x + -14 + "px",
      popoverY: rect.y + rect.height + 16 + "px"
    }));
    document.addEventListener("click", this.hidePopover);
  };
  hidePopover = () => {
    this.setState(preState => ({ visible: false }));
    document.removeEventListener("click", this.hidePopover);
  };
  renderChild = () => {
    const child = this.props.children;
    const res = React.cloneElement(child, {
      onClick: () => this.showPopover(this.childNode),
      ref: node => {
        this.childNode = node;
      }
    });
    return res;
  };
  renderPopoverHeader = () => (
    <div className="header">
      <i className="icon-close" onClick={this.hidePopover} />
    </div>
  );
  renderPopoverFooter = () => {
    const { onOk, onCancel, okText, cancelText } = this.props;
    return (
      <div>
        <Button type="primary" onClick={onOk}>
          {okText || "Ok"}
        </Button>
        <Button type="cancel" onClick={onCancel || this.hidePopover}>
          {cancelText || "Cancel"}
        </Button>
      </div>
    );
  };
  renderPopover = () => {
    const { visible, popoverX, popoverY } = this.state,
      { content } = this.props,
      display = visible ? "block" : "none",
      arrow = <span className="arrow" />;
    return (
      <div className="cruise-popover-wrapper">
        <div
          className="cruise-popover"
          onClick={this.handleClickPopover}
          style={{
            display: display,
            left: popoverX,
            top: popoverY
          }}
        >
          {arrow}
          {this.renderPopoverHeader()}
          {content}
          {this.renderPopoverFooter()}
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
