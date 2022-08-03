import React from "react";
import "./lobby.css";
const Lobby = () => {
  return (
    <div className="main">
      <div className="live">
        <p>LIVE</p>
      </div>
      <div className="box1">
        <p className="p1">smouha sc</p>
        <p className="p2">1.08</p>
      </div>
      <div className="box2">
        <p className="p1">draw</p>
        <p className="p2">8.25</p>
      </div>
      <div className="box3">
        <p className="p1">al ahly</p>
        <p className="p2">20.0</p>
      </div>
      <p className="text1">smouha sc</p>
      <p className="text2">2-0</p>
      <p className="text3">al ahly</p>
    </div>
  );
};

export default Lobby;
