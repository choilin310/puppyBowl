import React, { useEffect, useState } from "react";
import { fetchSinglePlayer } from "../api";
import { useParams } from "react-router-dom";

export default function SinglePlayer() {
  const { playerId } = useParams();
  const [players, setPlayers] = useState(null);

  useEffect (() => {
    async function getPlayers(){
      const playerFromApi = await fetchSinglePlayer(playerId);
      setPlayers(playerFromApi.data.id)
    }
    setPlayers();
  }, [])

  return <div className="single-player">
    {
      players && (
        <ul>
          <li>
            Name: {players.name}
          </li>
        </ul>
      )
    }
  </div>;
}
