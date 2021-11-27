import React, { useState, useEffect } from "react";
import NhlSearch from "./NhlSearch";
import NhlList from "./NhlList";

function Nhl() {
  const [nhlStadiums, setNhlStadiums] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch('http://localhost:3000/nhl')
      .then((r) => r.json())
      .then((nhl) => {
        setNhlStadiums(nhl)
      });
  }, []);

  const stadiumsToDisplay = nhlStadiums.filter((stadium) => stadium.team_name.toUpperCase().includes(searchTerm.toUpperCase()));

  return (
    <div>
      <NhlSearch searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
      <NhlList nhlStadiums = {stadiumsToDisplay} />
    </div>
  )
}

export default Nhl