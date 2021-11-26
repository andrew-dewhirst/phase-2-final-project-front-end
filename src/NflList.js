import React from "react";
import NflCard from "./NflCard";

function NflList({ nflStadiums }) {
  console.log(nflStadiums)
  return (
    <ul>
      {nflStadiums.map((stadium) =>
      <NflCard
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

export default NflList