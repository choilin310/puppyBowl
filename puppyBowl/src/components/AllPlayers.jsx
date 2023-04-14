import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchPlayers } from "../api";
import handleDeletePlayer from "./DeletePlayer";
import React from "react";
const APIURL = "https://fsa-puppy-bowl.herokuapp.com/api/2301-ftb-et-web-am";

export default function AllPlayers() {
  const navigate = useNavigate();
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    async function getPlayers() {
      const playerList = await fetchPlayers();
      setPlayers(playerList.data.players);
      console.log(playerList);
    }
    getPlayers();
  }, []);

  return (
    <div className="player-info">
      {players.length > 0 &&
        players.map((player) => {
          return (
            <div key={player.id}>
              <div className="header">
                <h1>{player.name}</h1>
                <h3>#{player.id}</h3>
              </div>
              <img src={player.imageUrl} alt="playerphoto" className="img" />
              <div className="footer">
                <button
                  onClick={() => {
                    navigate(`/${player.id}`);
                  }}
                >
                  see details
                </button>
                <button onClick={() => handleDeletePlayer(player.id)}>
                  remove player
                </button>
              </div>
            </div>
          );
        })}
    </div>
  );
}
