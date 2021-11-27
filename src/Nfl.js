import React, { useState, useEffect } from "react";
// import Button from '@mui/material/Button';
import NflSearch from "./NflSearch";
import NflList from "./NflList";

function Nfl() {
  const [nflStadiums, setNflStadiums] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch('http://localhost:3000/nfl')
      .then((r) => r.json())
      .then((nfl) => {
        setNflStadiums(nfl)
      });
  }, []);

  const stadiumsToDisplay = nflStadiums.filter((stadium) => stadium.team_name.toUpperCase().includes(searchTerm.toUpperCase()));

  return (
    <div>
      {/* <Button variant="contained">Hello World</Button> */}
      <NflSearch searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
      <NflList nflStadiums = {stadiumsToDisplay} />
    </div>
  )
}

export default Nfl