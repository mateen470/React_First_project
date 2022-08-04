import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import "./Main_page.css";
import logo from "./assets/logo.png";
import soccerBall from "./assets/soccerBall.png";

import SlideShowComponent from "../components/slideshow/Crousal";
import LobbySection from "../sections/Lobby/MainLobby";
import MyBets from "../sections/MyBets/MyBets";
import LiveEvents from "../sections/LiveEvents/LiveEvents";
import StartSoon from "../sections/StartingSoon/StartSoon";

const Main_page = () => {
  return (
    <div className="Main_Page">
      {/* TOP BAR SECTION-STARTS */}
      <div className="top_bar">
        <div className="logo_topBar">
          <img src={logo} alt="#" />
        </div>
        <div className="btn_topBar">
          <NavLink to={"/"}>
            <span className="topBar_signIn">Sign in</span>
          </NavLink>
          <NavLink to={"/"}>
            <span className="topBar_register">Register</span>
          </NavLink>
          <NavLink to={"/"}>
            <span className="topBar_wallet_btn">Connect Wallet</span>
          </NavLink>
        </div>
      </div>
      {/* TOP BAR SECTION-ENDS*/}

      {/*  CROUSAL SECTION-STARTS */}
      <div className="crousal_div_main">
        <SlideShowComponent />
      </div>
      {/*  CROUSAL SECTION-ENDS */}

      {/* NAVBAR-STARTS */}
      <div className="navbar_main_div">
        <div className="navbar_elements_main">
          <ul className="navbar_ul">
            <li className="navbar_list_elements">
              <NavLink
                className={(navData) =>
                  navData.isActive ? "active-style" : "none"
                }
                to={""}
              >
                LOBBY
              </NavLink>
            </li>
            <li className="navbar_list_elements">
              <NavLink
                className={(navData) =>
                  navData.isActive ? "active-style" : "none"
                }
                to={""}
              >
                MY BETS
              </NavLink>
            </li>
            <li className="navbar_list_elements">
              <NavLink
                className={(navData) =>
                  navData.isActive ? "active-style" : "none"
                }
                to={""}
              >
                LIVE EVENTS
              </NavLink>
            </li>
            <li className="navbar_list_elements">
              <NavLink
                className={(navData) =>
                  navData.isActive ? "active-style" : "none"
                }
                to={""}
              >
                FAVOURITES
              </NavLink>
            </li>
            <li className="navbar_list_elements">
              <NavLink
                className={(navData) =>
                  navData.isActive ? "active-style" : "none"
                }
                to={""}
              >
                STARTING SOON
              </NavLink>
            </li>
          </ul>
          <div className="select_sports_btn">
            <NavLink to={"/"}>
              <img src={soccerBall} alt="" />
            </NavLink>
          </div>
        </div>
      </div>
      {/* NAVBAR-ENDS */}
      {/* LOBBY SECTION-STARTS */}
      <div className="lobbyBar_main">
        <LobbySection />
      </div>
      {/* LOBBY SECTION-ENDS */}
    </div>
  );
};

export default Main_page;

{
  /* <Routes>
  <Route path="/" element={<LobbySection />} />
  <Route path="/my_bets" element={<MyBets />} />
  <Route path="/live_events" element={<LiveEvents />} />
  <Route path="/starting_soon" element={<StartSoon />} />
</Routes> */
}
