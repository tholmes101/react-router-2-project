import React, {useState} from 'react';

export default function TeamForm({onAddTeam}) {

    const [teamName, setTeamName] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        const itemData = {
            team: teamName}         
    
    
    fetch("http://localhost:3000/favorite", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(itemData),
  })
    .then((r) => r.json())
    .then((newTeam) => onAddTeam(newTeam));
    }
  return (
    
    // Set up the form to call handleSubmit when the form is submitted
    <form className="NewItem" onSubmit={handleSubmit}>
      {/** ...form inputs here */}
      <label>
        Enter Team Name:
        <input
          type="text"
          team="name"
          value={teamName}
          onChange={(e) => setTeamName(e.target.value)}
        />
      </label>
      <button type="submit">Add to Favorites</button>
    </form>

  )
}
