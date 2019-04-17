/**
 * @Name: agent content list
 * @Description:
 * @author RiSusss
 * @date 2019-04-09
 */
import React, { memo, Fragment } from "react";
import ListCard from "./listCard";
import GridCard from "./gridCard";

const ContentList = memo(({ list, changeOneAgent, layoutType }) => {
  const containerClassName =
    layoutType === "list"
      ? "agent-content-list-container"
      : "agent-content-grid-container";
  return (
    <div className="agent-content-list">
      <div className={containerClassName}>
        {list.map(item => {
          return layoutType === "list" ? (
            <ListCard {...{ changeOneAgent, item }} key={item.id} />
          ) : (
            <GridCard {...{ changeOneAgent, item }} key={item.id} />
          );
        })}
        {layoutType === "grid" ? (
          <Fragment>
            <span className="grid-card" style={{opacity: 0}}/>
            <span className="grid-card" style={{opacity: 0}}/>
          </Fragment>
        ) : null}
      </div>
    </div>
  );
});

export default ContentList;
