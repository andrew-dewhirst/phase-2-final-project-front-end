import React from "react";

function Search({ searchTerm, setSearchTerm }) {

  function handleSearch(event) {
    setSearchTerm(event.target.value)
  }

  return (
    <div className="searchbar">
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

export default Search