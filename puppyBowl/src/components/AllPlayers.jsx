import { useEffect, useState } from "react";
import { fetchPlayers } from "../api";
import React from "react";

export default function AllPlayers() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    async function getPlayers(){
        const playerList = await fetchPlayers();
        setPlayers(playerList);
    }
    getPlayers();
  }, [players])

  return (
    <div>
      {players.length > 0 && players.map((player) => {
        return <p>{player.name}</p>;
      })}
    </div>
  );
}
