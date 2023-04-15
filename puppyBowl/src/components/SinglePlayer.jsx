import React, { useEffect, useState } from "react";
import { fetchSinglePlayer } from "../api";
import { useParams } from "react-router-dom";

export default function SinglePlayer() {
  console.log("useParams", useParams())
  const { id } = useParams();
  const [players, setPlayers] = useState(null);

  useEffect (() => {
    async function getPlayers(){
      console.log(id)
      const playerFromApi = await fetchSinglePlayer(id);
      console.log(playerFromApi);
      setPlayers(playerFromApi.data.player)
    }
    getPlayers();
  }, [])



  return <div className="single-player">
    {
      players && (
        <ul>
          <li>
            Name: {players.name}
          </li>
          <li>
            Breed: {players.breed}
          </li>
        </ul>
      )
    }
  </div>;
}
