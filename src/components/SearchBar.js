import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";

export default function SearchBar({ onSearch, recipeData }) {
  const [filters, setFilters] = useState([]);

  // Extract all filters from recipeData when the component mounts
  useEffect(() => {
    const allFilters = new Set();
    recipeData.forEach(recipe => {
      recipe.filters.forEach(filter => allFilters.add(filter)); // Add filters to a Set (no duplicates)
    });
    setFilters([...allFilters]); // Convert the Set to an array
  }, [recipeData]);

  const handleFilterClick = (filter) => {
    // Filter recipes based on the selected filter
    const filteredRecipes = recipeData.filter(recipe =>
      recipe.filters.includes(filter) // Check if the recipe includes the selected filter
    );
    onSearch(filteredRecipes); // Pass the filtered recipes to the parent component
  };

  const handleTextSearch = (e) => {
    onSearch(e.target.value); // Pass the text search term to parent component
  };

  return (
    <div className="featured-searches section">
      <h2>Suggested Searches</h2>
      <div className="featured-searches-container">
        {filters.map((filter, index) => (
          <div
            key={index}
            style={{ animationDelay: index * 0.1 + "s" }}
            className="search-item"
            onClick={() => handleFilterClick(filter)} // Trigger filtering when a filter is clicked
          >
            {filter}
          </div>
        ))}
      </div>

      {/* Search input field */}
      <div className="search-box">
        <input
          type="text"
          placeholder="Search... "
          onChange={handleTextSearch} // Trigger text-based search
        />
        <button className="btn">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
    </div>
  );
}