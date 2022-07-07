// import useEffect
import React, { useEffect, useState } from "react";
import TeamForm from "./TeamForm"

;
// ...rest of imports

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [teams, setTeams] = useState([]);

  // Add useEffect hook
  useEffect(() => {
    fetch("http://localhost:3000/favorite")
      .then((r) => r.json())
      .then((teams) => setTeams(teams));
  }, []);

  // add this function to update state to display the new item 
  //in the list alongside the other items!
  function handleAddTeam(newTeam) {
  setTeams([...teams, newTeam]);
  }

  return (
    <div>
      
      <h1>My NBA Favorite Teams</h1>
<div classname = "TeamList"></div>
<TeamForm onAddTeam={handleAddTeam}/>
         <ul className="Items">
          {teams.map((list) => (
          <li key={list.id}>
            {list.team}
          </li>
        ))}
      </ul>
      
     
  </div>
  )
}
