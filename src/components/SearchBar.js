import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";

export default function SearchBar({
  onSearch,
  recipeData,
  activeFilters,
  onClearFilters,
}) {
  const [filters, setFilters] = useState([]);

  // Extract all filters from recipeData when the component mounts
  useEffect(() => {
    const allFilters = new Set();
    recipeData.forEach((recipe) => {
      recipe.filters.forEach((filter) => allFilters.add(filter));
    });
    setFilters([...allFilters]);
  }, [recipeData]);

  const handleFilterClick = (filter) => {
    // Toggle filter selection
    const updatedFilters = activeFilters.includes(filter)
      ? activeFilters.filter((f) => f !== filter) // Remove filter if already active
      : [...activeFilters, filter]; // Add filter if not active
    onSearch(updatedFilters); // Pass updated filters to parent component
  };

  const handleTextSearch = (e) => {
    onSearch(e.target.value); // Pass text search term to parent component
  };

  return (
    <div className="featured-searches section">
      <h2>Suggested Searches</h2>
      <div className="featured-searches-container">
        {filters.map((filter, index) => (
          <div
            key={index}
            style={{
              animationDelay: index * 0.1 + "s",
              backgroundColor: activeFilters.includes(filter)
                ? "#f294dd"
                : "#c042a3", // Highlight active filters
            }}
            className="search-item"
            onClick={() => handleFilterClick(filter)}
          >
            {filter}
          </div>
        ))}
      </div>

      {/* Active Filters */}
      {activeFilters.length > 0 && (
        <div className="active-filters">
          <button className="btn clear-filters" onClick={onClearFilters}>
            Clear Filters
          </button>
        </div>
      )}

      {/* Search input field */}
      <div className="search-box">
        <input
          type="text"
          placeholder="Search... "
          onChange={handleTextSearch}
        />
        <button className="btn">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
    </div>
  );
}
