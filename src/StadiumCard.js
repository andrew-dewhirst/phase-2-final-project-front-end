import React, { useState } from "react";

function StadiumCard({ stadium, handleAttendanceClick }) {

  function handleButtonClick() {
    fetch(`http://localhost:3000/stadiums/${stadium.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        attended: !stadium.attended,
      }),
   })
      .then((r) => r.json())
      .then((updatedItem) => handleAttendanceClick(updatedItem));
}

  return (
    <ul className="card">
      <h4>{stadium.stadium_name}</h4>
      <img src={stadium.image} alt={stadium.stadium_name} />
            <p>Team: {stadium.team_name}</p>
      <p>Location: {stadium.city}, {stadium.state}</p>
      {stadium.attended ? (
        <button onClick={handleButtonClick}>Crossed off the List</button>
      ) : (
        <button onClick={handleButtonClick}>I've Been There!</button>
      )}
    </ul>
  );
}

export default StadiumCard