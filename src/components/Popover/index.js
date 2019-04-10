/**
 * @Name:
 * @Description:
 * @author RiSusss
 * @date 2019-04-10
 */
import React, { Component, Fragment } from "react";
import { createPortal } from "react-dom";

export default class extends Component {
  state = {
    visible: false
  };

  componentWillMount() {
    document.removeEventListener("click", this.hidePopip);
  }

  handleClickPopup = e => {
    e.nativeEvent.stopImmediatePropagation();
  };
  showPopup = () => {
    this.setState(preState => ({ visible: !preState.visible }));
    document.addEventListener("click", this.hidePopip);
  };
  hidePopip = () => {
    this.setState(preState => ({ visible: false }));
    document.removeEventListener("click", this.hidePopip);
  };

  renderPopover() {
    const { visible } = this.state;
    const display = visible ? "block" : "none";

    return (
      <div className="popover-wrapper">
        <div
          className="popover"
          onClick={this.handleClickPopup}
          style={{ width: "100px", height: "100px", display: display }}
        />
      </div>
    );
  }
  render() {
    const child = this.props.children;
    return (
      <Fragment>
        {React.cloneElement(child, {
          onClick: this.showPopup
        })}
        {createPortal(this.renderPopover(), document.getElementById("root"))}
      </Fragment>
    );
  }
}
