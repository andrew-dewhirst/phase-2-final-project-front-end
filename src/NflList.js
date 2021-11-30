import React from "react";
import NflCard from "./NflCard";

function NflList({ nflStadiums, setNflStadiums }) {

  function handleAttendanceClick(updatedItem) {
    const updatedStadiums = nflStadiums.map((stadium) => {
      if (stadium.id === updatedItem.id) {
        return updatedItem;
      } else {
        return stadium;
      }
    });
    setNflStadiums(updatedStadiums);
  }

  return (
    <ul className="cards">
      {nflStadiums.map((stadium) =>
      <NflCard
        key={stadium.id}
        stadium={stadium}
        handleAttendanceClick={handleAttendanceClick}
      />
      )}
    </ul>
  );
}

export default NflList