import React, { useState } from "react";

function NflCard({ stadiumName, teamName, city, state, image }) {
  const [attended, setAttended] = useState(false)

  function handleAttendanceClick() {
    setAttended(!attended)
  }

  return (
    <ul>
      <h4>{stadiumName}</h4>
      <img src={image} alt={stadiumName} />
            <p>Team: {teamName}</p>
      <p>Location: {city}, {state}</p>
      {attended ? (
        <button onClick={handleAttendanceClick}>Crossed off the List</button>
      ) : (
        <button onClick={handleAttendanceClick}>I've Been There!</button>
      )}
    </ul>
  );
}

export default NflCard