/**
 * @Name:
 * @Description:
 * @author RiSusss
 * @date 2019-04-10
 */
import React, { Component } from "react";
import Popover from 'Components/Popover'
import windows from "Assets/os_icons/windows.png";
import centos from "Assets/os_icons/cent_os.png";
import debian from "Assets/os_icons/debin.png";
import suse from "Assets/os_icons/suse.png";
import ubuntu from "Assets/os_icons/ubuntu.png";

const icons = { ...{ windows, centos, debian, suse, ubuntu } };

export default props => {
  const { name, location, ip, os, status, resources } = props;
  return (
    <div className="list-card">
      <div className="left">
        <img className="image" src={icons[os]} alt="" />
      </div>
      <div className="right">
        <div className="top">
          <span className="item item-name">
            <i className="icon icon-desktop" />
            {name}
          </span>
          <span className={`item item-tag item-${status}`}>{status}</span>
          <span className="item">
            <i className="icon icon-info" />
            {ip}
          </span>
          <span className="item">
            <i className="icon icon-folder" />
            {location}
          </span>
        </div>
        <div className="bottom">
          <div className="left">
            <span className="add-button">
              <Popover>
                <i className="icon-plus" />
              </Popover>
            </span>
            {resources.map(item => (
              <span className="resource-button" key={item}>
                {item}
                <i className="icon-trash" />
              </span>
            ))}
          </div>
            <div className="right">
                <span className="deny-button"><i className="icon-deny"/>Deny</span>
            </div>
        </div>
      </div>
    </div>
  );
};
