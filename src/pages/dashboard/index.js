/**
 * @Name:
 * @Description:
 * @author RiSusss
 * @date 2019/4/11
 */

import React, { Component } from "react";
import { connect } from "react-redux";
import { getDashboardList } from "./actions";
import { updateNewsboard } from "App/actions";
class Dashboard extends Component {
  componentDidMount() {
    // console.log(this.props);
  }
  jump = () => {
    console.log(this.props);
  };
  render() {
    return (
      <div>
        dashboard
        {this.props.list.map(item => (
          <p key={item.name}>{item.name}</p>
        ))}
        <button onClick={this.props.getList}>getList</button>
        <button
          onClick={() =>
            this.props.updateNewsboard({
              title: "notify",
              content: "dashBoard get list"
            })
          }
        >
          setNews
        </button>
        <button onClick={this.jump}>jump</button>
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
    },
    updateNewsboard: news => {
      dispatch(updateNewsboard(news));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
