import React, { useState, useEffect } from "react";
import NflList from "./NflList";

function Nfl() {

  const [nflStadiums, setNflStadiums] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/nfl')
      .then((r) => r.json())
      .then((nfl) => {
        setNflStadiums(nfl)
      });
  }, []);

  return (
    <div>
      <NflList nflStadiums = {nflStadiums} />
    </div>
  )
}

export default Nfl