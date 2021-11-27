import React from "react";
import MlbCard from "./MlbCard";

function MlbList({ mlbStadiums }) {
  return (
    <ul>
      {mlbStadiums.map((stadium) =>
      <MlbCard
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

export default MlbList