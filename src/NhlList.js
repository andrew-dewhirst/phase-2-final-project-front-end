import React from "react";
import NhlCard from "./NhlCard";

function NhlList({ nhlStadiums }) {
  return (
    <ul>
      {nhlStadiums.map((stadium) =>
      <NhlCard
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

export default NhlList