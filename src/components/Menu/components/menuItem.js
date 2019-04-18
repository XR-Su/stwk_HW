/**
 * @Name: cruise Menu Item
 * @Description:
 * @author RiSusss
 * @date 2019/4/11
 */

import React, { memo } from "react";
import cs from "classnames";

const MenuItem = memo(
  ({ title = "", children = "", itemKey = "", cur, onChangeCur }) => {
    return (
      <li
        className={cs("cruise-menu-item", {
          "cruise-menu-item__active": itemKey === cur
        })}
        onClick={() => onChangeCur(itemKey)}
      >
        <span className="cruise-menu-item-title">{title}</span>
        {children}
      </li>
    );
  }
);

export default MenuItem;
