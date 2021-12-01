import React from "react";
import StadiumCard from "./StadiumCard";

function StadiumList({ filteredStadiums, setStadiums }) {

  function handleAttendanceClick(updatedItem) {
    const updatedStadiums = filteredStadiums.map((stadium) => {
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