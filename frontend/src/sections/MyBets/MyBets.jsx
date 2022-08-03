import React from "react";
import "./mybets.css";
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";

const MyBets = (props) => {
  console.log(props.src);
  return (
    <div className="mainContainer">
      <nav>
        <img className="logo" src="" alt="logo" />
        <div className="navItems">
          <a className="signin" href="/">
            Register
          </a>
          <a className="reg" href="/">
            Sign in
          </a>
        </div>
        <button className="wallet">
          <p className="walletText">Connect Wallet</p>
        </button>
      </nav>
      <div className="menuBar">
        <div className="item1">
          <p>LOBBY</p>
        </div>
        <div className="item2">
          <p>MY BETS</p>
        </div>
        <div className="item3">
          <p>LIVE EVENTS</p>
        </div>
        <div className="item4">
          <p>FAVOURITES</p>
        </div>
        <div className="item5">
          <p>STARTING SOON</p>
        </div>
        <div className="gameLogo">
          <img src={props.src} alt="" />
        </div>
      </div>
      <div className="menuBar2">
        <div className="element1">
          <p>ALL BETS</p>
        </div>
        <div className="element2">
          <p>Latest</p>
        </div>
        <div className="element3">
          <p>History</p>
        </div>
      </div>
      <div className="allBets">
        <Table
          className="table table-striped"
          striped
          bordered
          hover
          variant="dark"
        >
          <thead>
            <tr>
              <th className="first">Event</th>
              <th>Sports</th>
              <th>Time</th>
              <th className="last">odds</th>
            </tr>
          </thead>
          <tbody>
            {props.allBets.map((bet, index) => (
              <tr key={index}>
                <td className="first">{bet.Event}</td>
                <td>{bet.Sports}</td>
                <td>{bet.Time}</td>
                <td className="last">{bet.Odds}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default MyBets;
