import React from "react";
import NbaCard from "./NbaCard";

function NbaList({ nbaStadiums }) {
  return (
    <ul>
      {nbaStadiums.map((stadium) =>
      <NbaCard
        key={stadium.id}
        stadiumName={stadium.stadium_name}
        teamName={stadium.team_name}
        city={stadium.city}
        state={stadium.state}
        image={stadium.image}
      />
      )}
    </ul>
  );
}

export default NbaList