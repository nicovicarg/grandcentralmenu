import React from "react"
import "../estilos/searchbar.css"

function SearchBar(){
  return (
    <div id="whole-searchbar">
    	<input type="search" id="search-bar"></input>
    	<button id="search-button">Go</button>
    </div>
  );
}

export default SearchBar;