/**
 * @Name: routes info
 * @Description:
 * @author RiSusss
 * @date 2019/4/9
 */

import React, { lazy } from "react";

export default [
  {
    key: "dashboard",
    title: "DASHBOARD",
    icon: "icon-dashboard",
    path: "/app/dashboard",
    component: lazy(() => import("Pages/dashboard"))
  },
  {
    key: "agent",
    title: "AGENT",
    icon: "icon-sitemap",
    path: "/app/agent",
    component: lazy(() => import("Pages/agent"))
  },
  {
    key: "myCruise",
    title: "MY CRUISE",
    icon: "icon-boat",
    path: "/app/myCruise",
    component: lazy(() => import("Pages/myCruise"))
  },
  {
    key: "help",
    title: "HELP",
    icon: "icon-life-bouy",
    path: "/app/help",
    component: lazy(() => import("Pages/help"))
  }
];
