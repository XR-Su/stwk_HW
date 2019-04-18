/**
 * @Name: cruise Menu
 * @Description:
 * @author RiSusss
 * @date 2019/4/11
 */

import React, { PureComponent } from "react";
import cs from "classnames";
import MenuItem from "./menuItem";

class Menu extends PureComponent {
  state = {
    cur: "agent"
  };
  onChangeCur = val => {
    this.setState(preState => ({ cur: val }));
  };
  renderChildren = () => {
    return React.Children.map(this.props.children, (child, index) => {
      const itemKey = child.key;
      return React.cloneElement(child, {
        cur: this.state.cur,
        onChangeCur: this.onChangeCur,
        itemKey: itemKey
      });
    });
  };
  render() {
    const theme = this.props.theme || "normal";
    return (
      <ul className={cs("cruise-menu", "cruise-menu__" + theme)}>
        {this.renderChildren()}
      </ul>
    );
  }
}

Menu.Item = MenuItem;

export default Menu;
