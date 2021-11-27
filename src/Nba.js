import React, { useState, useEffect } from "react";
import NbaSearch from "./NbaSearch";
import NbaList from "./NbaList";

function Nba() {
  const [nbaStadiums, setNbaStadiums] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch('http://localhost:3000/nba')
      .then((r) => r.json())
      .then((nba) => {
        setNbaStadiums(nba)
      });
  }, []);

  const stadiumsToDisplay = nbaStadiums.filter((stadium) => stadium.team_name.toUpperCase().includes(searchTerm.toUpperCase()));

  return (
    <div>
      <NbaSearch searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
      <NbaList nbaStadiums = {stadiumsToDisplay} />
    </div>
  )
}

export default Nba