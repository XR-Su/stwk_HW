/**
 * @Name: cruise Menu Item
 * @Description:
 * @author RiSusss
 * @date 2019/4/11
 */

import React, { memo } from "react";

const MenuItem = memo(
  ({ title = "", children = "", itemKey = "", cur, onChangeCur }) => {
    const className =
      itemKey === cur ? "cruise-menu-item item-active" : "cruise-menu-item";
    return (
      <li className={className} onClick={() => onChangeCur(itemKey)}>
        <span className="title">{title}</span>
        {children}
      </li>
    );
  }
);

export default MenuItem;
