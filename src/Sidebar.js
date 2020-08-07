import React from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import HomeIcon from "@material-ui/icons/Home";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import HistoryIcon from "@material-ui/icons/History";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <SidebarRow selected Icon={HomeIcon} title="Home" />
      <SidebarRow Icon={WhatshotIcon} title="Trending" />
      <SidebarRow Icon={SubscriptionsIcon} title="Subscription" />
      <hr />
      <SidebarRow Icon={VideoLibraryIcon} title="Trending" />
      <SidebarRow Icon={HistoryIcon} title="Trending" />
      <SidebarRow Icon={OndemandVideoIcon} title="Trending" />
      <SidebarRow Icon={WatchLaterIcon} title="Trending" />

      <SidebarRow Icon={WhatshotIcon} title="Trending" />
      <SidebarRow Icon={WhatshotIcon} title="Trending" />
      <SidebarRow Icon={WhatshotIcon} title="Trending" />
    </div>
  );
};

export default Sidebar;
