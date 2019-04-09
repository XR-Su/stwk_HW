/**
 * @Name:
 * @Description:
 * @author RiSusss
 * @date 2019-04-09
 */
import React, { Component } from "react";

export default ({ bgImg = "", bgColor = "white", title = "", count = 0 }) => {
    return <div className="view-card" style={{ backgroundColor: bgColor }}>
        <p className="title">{title}</p>
        <p className="count">{count}</p>
    </div>;
};
