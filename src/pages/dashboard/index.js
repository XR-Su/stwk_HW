/**
 * @Name:
 * @Description:
 * @author RiSusss
 * @date 2019/4/11
 */

import React, { Component } from "react";
import { connect } from "react-redux";
import { getDashboardList } from "./actions";
class Dashboard extends Component {
  componentDidMount() {
    console.log(this.props);
  }

  render() {
    return (
      <div>
        dashboard
        {this.props.list.map(item => (
          <span key={item.name}>{item.name}</span>
        ))}
        <button onClick={this.props.getList}>change</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    list: state.dashboard.list
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getList: () => {
      dispatch(getDashboardList());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
