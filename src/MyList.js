import React from "react";
import MyStadiumCard from "./MyStadiumCard";

function MyList({ stadiumsToDisplay, setStadiums }) {

  function handleRemovalClick(updatedItem) {
    const myUpdatedStadiums = stadiumsToDisplay.map((stadium) => {
      if (stadium.id === updatedItem.id) {
        return updatedItem;
      } else {
        return stadium;
      }
    });
    setStadiums(myUpdatedStadiums);
  }

  const attendedStadiums = stadiumsToDisplay.filter(stadium => stadium.attended === true)

  return (
    <ul className="cards">
      {attendedStadiums.map((stadium) =>
      <MyStadiumCard
        key={stadium.id}
        stadium={stadium}
        handleRemovalClick={handleRemovalClick}
      />
      )}
    </ul>
  );
}

export default MyList