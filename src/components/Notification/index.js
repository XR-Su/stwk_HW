/**
 * @Name: notification
 * @Description:
 * @author RiSusss
 * @date 2019-04-20
 */
import React, { Component } from "react";
import { connect } from "react-redux";

class Notification extends Component {
  render() {
      console.log(this.props.notification.title)
    return <div style={{display: 'none'}} />;
  }
}

const mapStateToProps = state => {
  return {
    notification: state.app.notification
  };
};

export default connect(mapStateToProps)(Notification);
