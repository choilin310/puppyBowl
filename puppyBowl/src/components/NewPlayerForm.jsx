import React from "react";
const cohort = "2301-ftb-et-web-am";
const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohort}/`;

function NewPlayerForm(props) {

  const addNewPlayer = async (playerObj) => {
    try {
      const response = await fetch(`${APIURL}/players`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(playerObj),
      });
      const NewPlayer = response.json();
      if (NewPlayer.error) throw NewPlayer.error;
      props.setPlayers([...players, newPlayer]);
    } catch (error) {
      console.error("Oops there was error creating new player", error);
    }
  };

  function submitForm(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const values = Object.fromEntries(formData.entries());
    console.log("Form Values", values);
    addNewPlayer(values);
    document.getElementById("newPlayerForm").reset();
  }

  return (
    <form onSubmit={submitForm} id="newPlayerForm">
      <div className="form-row">
        <label htmlFor="name">Name: </label>
        <input type="text" id="name" name="name" />
        <label htmlFor="breed">Breed: </label>
        <input type="text" id="breed" name="breed" />
        <button className="btn" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
}

export default NewPlayerForm;
