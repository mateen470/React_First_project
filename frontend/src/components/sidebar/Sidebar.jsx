import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./sidebar.css";
import menuIcon from "./assets/menu.png";
import userProfilePicture from "./assets/user_profile.jpg";
import dashboardIcon from "./assets/dashboard.png";
import myBetsIcon from "./assets/user_group.png";
import liveEvents from "./assets/live-events.png";
import calendarIcon from "./assets/calendar.png";
import sportListrIcon from "./assets/settings.png";
const Sidebar = (props) => {
  const [user, setUser] = useState({
    // name:props.name,
    // status:props.status,
    // picture:props.picture,
    name: "User One",
    status: "new user",
    picture: userProfilePicture,
  });

  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState("offline");

  const toggle = () => setOpen(!open);

  const menuItems = [
    { path: "/dashboard", name: "Dashboard", icon: dashboardIcon },
    { path: "/bets", name: "My Bets", icon: myBetsIcon },
    { path: "/events", name: "Live Events", icon: liveEvents },
    { path: "/startsoon", name: "Starting Soon", icon: calendarIcon },
    { path: "/sportslist", name: "Sports List", icon: sportListrIcon },
  ];

  return (
    <div className="container">
      <div style={{ width: open ? "270px" : "65px" }} className="SideBar">
        <img
          src={menuIcon}
          alt="#"
          style={{ marginLeft: open ? "180px" : "0px" }}
          className="burgerIcon"
          onClick={toggle}
        />
        <div
          className="alternate_profile_picture_small_sideBar"
          style={{ display: open ? "none" : "block" }}
        ></div>
        <div
          className="status_light"
          style={{
            display: open ? "none" : "block",
            background: status === "offline" ? "red" : "green",
          }}
        ></div>
        <div
          style={{ display: open ? "block" : "none" }}
          className="user_profile"
        >
          <img src={user.picture} alt="#" className="user_profile_picture" />
          <span className="user_name">{user.name}</span>
          <span className="user_status">{user.status}</span>
        </div>
        <div
          className="functions_of_sidebar"
          style={{ marginTop: open ? "0px" : "-40px" }}
        >
          {menuItems.map((item, index) => (
            <div className="side_bar_elments_list"  key={index}>
              <NavLink to={item.path} className="NavLink_SideBar">
                <div
                  className="element"
                  style={{
                    display: open ? "flex" : "block",
                    justifyContent: open ? "center" : "normal",
                    marginTop: open ? "0px" : "10px",
                  }}
                >
                  <img
                    src={item.icon}
                    alt="#"
                    style={{
                      marginLeft: open ? "8px" : "-22px",
                      height: open ? "20px" : "30px",
                      width: open ? "20px" : "30px",
                      transition: open ? "0.5s ease-in" : "none",
                      marginTop: open ? "0" : "-15px",
                    }}
                    className="icons_sideBar"
                  />
                  {open && <div className="item_name">{item.name}</div>}
                </div>
              </NavLink>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
