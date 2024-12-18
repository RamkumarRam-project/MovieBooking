import React, { useState } from "react";


const TamilMoviesSearch = ({ searchTerm, handleSearch }) => {
  const [showSearch, setShowSearch] = useState(false); // Toggle search container visibility

  // Toggle the visibility of the search container
  const toggleSearch = () => {
    setShowSearch((prev) => !prev);
  };

  return (
    <div className="tamil-movies-search">
      {/* Round Search Icon */}
      <button 
        className={`search-icon ${showSearch ? "active" : ""}`} 
        onClick={toggleSearch}
      >
        <i className={`fas ${showSearch ? "fa-times" : "fa-search"}`}></i>
      </button>

      {/* Search Container */}
      <div className={`search-container ${showSearch ? "show" : "hide"}`}>
        <input
          type="text"
          className="tamil-search "
          placeholder="Search Movies..."
          value={searchTerm}
          onChange={handleSearch} // Update search results on input change
        />
      </div>
    </div>
  );
};

export default TamilMoviesSearch;
