const APIURL = "https://fsa-puppy-bowl.herokuapp.com/api/2301-ftb-et-web-am";

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

  export default handleDeletePlayer;