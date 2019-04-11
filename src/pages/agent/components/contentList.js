/**
 * @Name:
 * @Description:
 * @author RiSusss
 * @date 2019-04-09
 */
import React, { memo } from "react";
import ListCard from "./listCard";

const ContentList = memo(({ list, changeOneAgent }) => {
  return (
    <div className="agent-content-list">
      <div className="agent-content-list-container">
        {list.map(item => (
          <ListCard {...{ changeOneAgent, item }} key={item.id} />
        ))}
      </div>
    </div>
  );
});

export default ContentList;
