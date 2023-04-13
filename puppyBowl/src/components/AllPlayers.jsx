import { useEffect, useState } from "react";
import { fetchPlayers } from "../api";
import React from "react";
const APIURL = "https://fsa-puppy-bowl.herokuapp.com/api/2301-ftb-et-web-am";

export default function AllPlayers() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    async function getPlayers() {
      const playerList = await fetchPlayers();
      setPlayers(playerList.data.players);
      console.log(playerList);
    }
    getPlayers();
  }, []);

  const handleDeletePlayer = async (playerId) => {
    console.log(playerId);
    try {
      const response = await fetch(`${APIURL}/players/${playerId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ id: playerId }),
      });
      const deletedPlayer = await response.json();
      if (deletedPlayer.error) throw deletedPlayer.error;
      const APIdata = await fetchPlayers();
      setPlayers(APIdata.data.players)
      return;
    } catch (error) {
      console.error(
        `Oops, an error deleting a player #${playerId} from the roster! `,
        error
      );
    }
  };

  return (
    <div>
      {players.length > 0 &&
        players.map((player) => {
          return (
            <div key={player.id}>
              <div className="header">
                <h1>{player.name}</h1>
                <h3>#{player.id}</h3>
              </div>
              {/* <img src={player.imageUrl} alt="playerphoto" className="img" /> */}
              <div className="footer">
                <button>see details</button>
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
