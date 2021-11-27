import React from "react";

function NhlSearch({ searchTerm, setSearchTerm }) {

  function handleSearch(event) {
    setSearchTerm(event.target.value)
  }

  return (
    <div>
      <label htmlFor="search">Search Stadiums:</label>
      <input
        value={searchTerm}
        type="text"
        id="search"
        placeholder="Type a team to search..."
        onChange={handleSearch}
      />
    </div>
  );
}

export default NhlSearch