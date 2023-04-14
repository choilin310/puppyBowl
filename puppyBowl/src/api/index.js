const APIURL = "https://fsa-puppy-bowl.herokuapp.com/api/2301-ftb-et-web-am/players"

export async function fetchPlayers() {
  try {
    const response = await fetch(APIURL);
    const playerList = await response.json();
    return playerList;
  } catch (error) {
    console.log(error);
  }
}

export async function fetchSinglePlayer(id) {
  try{
    const response = await fetch(`${APIURL}/${id}`)
    const singlePlayer = await response.json();
    return singlePlayer;
  } catch (error){
    console.log(error)
  }
}