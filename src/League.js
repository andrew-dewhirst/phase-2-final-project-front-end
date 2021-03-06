import React from "react";
import { useParams } from 'react-router-dom';
import Search from "./Search";
import StadiumList from "./StadiumList";

function League({ stadiumsToDisplay, setStadiums, searchTerm, setSearchTerm }) {
  const params = useParams()
 
  const filteredStadiums = stadiumsToDisplay.filter((stadium) => stadium.league.toLowerCase() === params.league.toLowerCase())

  return (
    <div>
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
      <StadiumList filteredStadiums = {filteredStadiums} stadiumsToDisplay={stadiumsToDisplay} setStadiums={setStadiums} />
    </div>
  )
}

export default League