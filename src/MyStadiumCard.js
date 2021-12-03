import React from "react";

function MyStadiumCard({ stadium, handleRemovalClick }) {

  function handleRemove() {
    fetch(`http://localhost:3000/stadiums/${stadium.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        attended: false,
      }),
   })
      .then((r) => r.json())
      .then((updatedItem) => handleRemovalClick(updatedItem));
}

  return (
    <ul className="card">
      <h4>{stadium.stadium_name}</h4>
      <img src={stadium.image} alt={stadium.stadium_name} />
            <p>Team: {stadium.team_name}</p>
      <p>Location: {stadium.city}, {stadium.state}</p>
      <button onClick={handleRemove}>Remove from My List</button>
    </ul>
  );
}

export default MyStadiumCard