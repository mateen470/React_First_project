import React, { useState } from "react";
import LobbyBar from "./Lobby";
import "./lobby.css";

const MainLobby = (props) => {
  /* const matchStats=[
    {
        leagueName:props.leagueName,
        matchData:[props.matchdata]
    }
]*/

  //   BELOW IS THE DUMMY VALUE
  const matchStats = [
    {
      leagueName: "EGYPTIAN PREMIERE LEAGUE",
      matchData: [
        {
          statusOfMatch: "live",
          FirstClubName: "REAL MADRID",
          FirstClubScore: "2",
          FirstClubPredictionPoints: "68",
          SecondClubName: "BARCELONA",
          SecondClubScore: "0",
          SecondClubPredictionPoints: "30",
          drawPrediction: "2",
        },
        {
          statusOfMatch: "ft",
          FirstClubName: "ATLETICO MADRID",
          FirstClubScore: "1",
          FirstClubPredictionPoints: "48",
          SecondClubName: "CHELSEA",
          SecondClubScore: "1",
          SecondClubPredictionPoints: "20",
          drawPrediction: "32",
        },
        {
          statusOfMatch: "live",
          FirstClubName: "MANCHESTER UNITED",
          FirstClubScore: "3",
          FirstClubPredictionPoints: "70",
          SecondClubName: "LIVERPOOL",
          SecondClubScore: "2",
          SecondClubPredictionPoints: "20",
          drawPrediction: "10",
        },
      ],
    },
    {
      leagueName: "ENGLISH PREMIERE LEAGUE",
      matchData: [
        {
          statusOfMatch: "live",
          FirstClubName: " MADRID",
          FirstClubScore: "2",
          FirstClubPredictionPoints: "68",
          SecondClubName: "CELONA",
          SecondClubScore: "0",
          SecondClubPredictionPoints: "30",
          drawPrediction: "2",
        },
        {
          statusOfMatch: "ft",
          FirstClubName: "ETICO MADRID",
          FirstClubScore: "1",
          FirstClubPredictionPoints: "48",
          SecondClubName: "CHELSEA",
          SecondClubScore: "1",
          SecondClubPredictionPoints: "20",
          drawPrediction: "32",
        },
        {
          statusOfMatch: "live",
          FirstClubName: " UITED",
          FirstClubScore: "3",
          FirstClubPredictionPoints: "70",
          SecondClubName: "LIRPOOL",
          SecondClubScore: "2",
          SecondClubPredictionPoints: "20",
          drawPrediction: "10",
        },
      ],
    },
    {
      leagueName: "LA LIGA",
      matchData: [
        {
          statusOfMatch: "live",
          FirstClubName: " SEVILLA",
          FirstClubScore: "2",
          FirstClubPredictionPoints: "68",
          SecondClubName: "CELONA",
          SecondClubScore: "0",
          SecondClubPredictionPoints: "30",
          drawPrediction: "2",
        },
        {
          statusOfMatch: "ft",
          FirstClubName: "HULL CITY",
          FirstClubScore: "1",
          FirstClubPredictionPoints: "48",
          SecondClubName: "CHELSEA",
          SecondClubScore: "1",
          SecondClubPredictionPoints: "20",
          drawPrediction: "32",
        },
        {
          statusOfMatch: "ft",
          FirstClubName: " UIED",
          FirstClubScore: "3",
          FirstClubPredictionPoints: "70",
          SecondClubName: "LRPOOL",
          SecondClubScore: "2",
          SecondClubPredictionPoints: "20",
          drawPrediction: "10",
        },
        {
          statusOfMatch: "ft",
          FirstClubName: " UIED",
          FirstClubScore: "3",
          FirstClubPredictionPoints: "70",
          SecondClubName: "LRPOOL",
          SecondClubScore: "2",
          SecondClubPredictionPoints: "20",
          drawPrediction: "10",
        },
      ],
    },
  ];

  return (
    <div>
      {matchStats.map((match_data, index) => (
        <div className="main_lobbyBar" key={index}>
          <div className="league_Name_main_div">
            <span className="league_Name">{match_data.leagueName}</span>
          </div>

          <hr className="hr_lobbyBar" />

          <div className="lobbyBar_div">
            <LobbyBar match_data={match_data.matchData} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default MainLobby;
