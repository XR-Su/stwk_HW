/**
 * @Name: agent header view card
 * @Description:
 * @author RiSusss
 * @date 2019-04-09
 */
import React, { memo } from "react";

const ViewCard = memo(
  ({ bgImg = "", bgColor = "white", title = "", count = 0, icon = "" }) => {
    return (
      <div className="agent-header-viewCard" style={{ backgroundColor: bgColor }}>
        <span className="title">{title}</span>
        <span className="icon">
          <i className={icon} />
        </span>
        <span className="count">{count}</span>
      </div>
    );
  }
);

export default ViewCard;
