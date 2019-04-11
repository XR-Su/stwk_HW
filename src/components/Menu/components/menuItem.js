/**
 * @Name:
 * @Description:
 * @author RiSusss
 * @date 2019/4/11
 */

import React from "react";

const MenuItem = ({
  title = "",
  children = "",
  itemKey = "",
  cur,
  onChangeCur
}) => {
    console.log(itemKey===cur)
  const className =
    itemKey === cur ? "cruise-menu-item item-active" : "cruise-menu-item";
  return (
    <li className={className} onClick={() => onChangeCur(itemKey)}>
      <span className="title">{title}</span>
      {children}
    </li>
  );
};

export default MenuItem;
