import React from "react";

function Search({ search, setSearch }) {

  function handleChange(e) {
    setSearch(e.target.value)
    console.log(search)
  }

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input onChange={handleChange} value={search} className="prompt" />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
