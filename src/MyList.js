import React from "react";
import MyStadiumList from "./MyStadiumList";

function MyList({ stadiumsToDisplay, setStadiums }) {
  return (
    <div>
      <MyStadiumList stadiumsToDisplay={stadiumsToDisplay} setStadiums={setStadiums}/>
    </div>
  )
}

export default MyList