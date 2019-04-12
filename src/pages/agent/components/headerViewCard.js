/**
 * @Name: agent header view card
 * @Description:
 * @author RiSusss
 * @date 2019-04-09
 */
import React, { memo } from "react";

const HeaderViewCard = memo(
  ({ bgImg = "", bgColor = "white", title = "", count = 0, icon = "" }) => {
    return (
      <div className="view-card" style={{ backgroundColor: bgColor }}>
        <span className="title">{title}</span>
        <span className="icon">
          <i className={icon} />
        </span>
        <span className="count">{count}</span>
      </div>
    );
  }
);

export default HeaderViewCard;
