import React, { useState } from "react";
import "./lobby.css";

const Lobby = ({ match_data }) => {
  return (
    <div className="lobbyBar_main_div">
      {match_data.map((data, index) => (
        <div className="main" key={index}>
          <div className="match_status">
            <p
              style={{
                background:
                  data.statusOfMatch === "live" ? "#ee0202" : "#5E5E5E",
              }}
            >
              {data.statusOfMatch}
            </p>
          </div>
          <div className="box1">
            <p className="p1">{data.FirstClubName}</p>
            <p className="p2">{data.FirstClubPredictionPoints}</p>
          </div>
          <div className="box2">
            <p className="p1">DRAW</p>
            <p className="p2">{data.drawPrediction}</p>
          </div>
          <div className="box3">
            <p className="p1">{data.SecondClubName}</p>
            <p className="p2">{data.SecondClubPredictionPoints}</p>
          </div>
          <p className="text1">{data.FirstClubName}</p>
          <p className="text2">
            {data.FirstClubScore} - {data.SecondClubScore}
          </p>
          <p className="text3">{data.SecondClubName}</p>
          <div className="downArrow_lobby">↓</div>
        </div>
      ))}
    </div>
  );
};

export default Lobby;
