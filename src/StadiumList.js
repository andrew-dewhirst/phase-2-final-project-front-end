import React from "react";
import StadiumCard from "./StadiumCard";

function StadiumList({ filteredStadiums, stadiumsToDisplay, setStadiums }) {

  function handleAttendanceClick(updatedItem) {
    const updatedStadiums = stadiumsToDisplay.map((stadium) => {
      if (stadium.id === updatedItem.id) {
        return updatedItem;
      } else {
        return stadium;
      }
    });
    setStadiums(updatedStadiums);
  }

  return (
    <ul className="cards">
      {filteredStadiums.map((stadium) =>
      <StadiumCard
        key={stadium.id}
        stadium={stadium}
        handleAttendanceClick={handleAttendanceClick}
      />
      )}
    </ul>
  );
}

export default StadiumList