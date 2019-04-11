/**
 * @Name: 弹出对话框
 * @Description: 这里原本是作为弹出框的基础组件，待改善
 * @author RiSusss
 * @date 2019-04-10
 */
import React, { PureComponent, Fragment } from "react";
import { createPortal } from "react-dom";
import { Button } from "Components";

export default class Popover extends PureComponent {
  state = {
    visible: false,
    popoverX: 0,
    popoverY: 0
  };

  componentWillUnmount() {
    document.removeEventListener("click", this.hidePopover);
  }

  handleClickPopover = e => {
    e.nativeEvent.stopImmediatePropagation();
  };
  showPopover = e => {
    let rect = e.getBoundingClientRect(),
      orient = document.body.clientHeight - rect.top > 120 ? "top" : "bottom",
      popoverX = rect.left + -14 + "px",
      popoverY =
        orient === "top"
          ? rect.top + rect.height + 16 + "px"
          : rect.top - rect.height - 130 + "px";
    this.orient = orient;
    this.setState(preState => ({
      visible: true,
      popoverX: popoverX,
      popoverY: popoverY
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
    const { onOk, onCancel, okText, cancelText, footer } = this.props;
    return Array.isArray(footer) ? (
      <div>{footer.map(item => item)}</div>
    ) : (
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
      arrow = (
        <span
          className={this.orient === "top" ? "arrow-top" : "arrow-bottom"}
        />
      );

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
