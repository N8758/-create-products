import React from "react";

const SearchBar = ({ setSearchQuery }) => {
  return (
    <div style={{ marginBottom: "20px" }}>
      <h3>Search Products</h3>
      <input
        type="text"
        placeholder="Search by product name..."
        onChange={(e) => setSearchQuery(e.target.value)}
        style={{ width: "300px", padding: "5px" }}
      />
    </div>
  );
};

export default SearchBar;
