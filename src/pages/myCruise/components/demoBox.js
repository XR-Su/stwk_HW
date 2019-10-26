/**
 * @Name:
 * @Description:
 * @author RiSusss
 * @date 2019-06-20
 */
import React, { Component } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

export default class DemoBox extends Component {
  render() {
    const { boxSize } = this.props;
    boxSize.border = "1px solid #ccc";
    // const classes = classnames(boxSize);
    return <div style={boxSize}>demoBox</div>;
  }
}

DemoBox.propTypes = {
  boxSize: PropTypes.object
};
