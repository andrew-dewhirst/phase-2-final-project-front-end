import React, { useState, useEffect } from "react";
import MlbSearch from "./MlbSearch";
import MlbList from "./MlbList";

function Mlb() {
  const [mlbStadiums, setMlbStadiums] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch('http://localhost:3000/mlb')
      .then((r) => r.json())
      .then((mlb) => {
        setMlbStadiums(mlb)
      });
  }, []);

  const stadiumsToDisplay = mlbStadiums.filter((stadium) => stadium.team_name.toUpperCase().includes(searchTerm.toUpperCase()));

  return (
    <div>
      <MlbSearch searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
      <MlbList mlbStadiums = {stadiumsToDisplay} />
    </div>
  )
}

export default Mlb