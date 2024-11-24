import SearchBar from "../components/SearchBar";
import RecipeCard from "../components/RecipeCard";
import recipeData from "../assets/data.js";
import { useState } from "react";

export default function Recipes() {
  const [filteredData, setFilteredData] = useState(recipeData); // Filtered recipes
  const [activeFilters, setActiveFilters] = useState([]); // List of active filters

  const handleSearch = (searchTerm) => {
    if (Array.isArray(searchTerm)) {
      // Update active filters and filter recipes
      setActiveFilters(searchTerm);
      const filtered = recipeData.filter((recipe) =>
        searchTerm.every((filter) => recipe.filters.includes(filter))
      );
      setFilteredData(filtered);
    } else {
      // Perform text-based search
      const filtered = recipeData.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredData(filtered);
    }
  };

  const handleClearFilters = () => {
    // Clear active filters and reset data
    setActiveFilters([]);
    setFilteredData(recipeData);
  };

  const sortedData = [...filteredData].sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  return (
    <div>
      <SearchBar
        onSearch={handleSearch}
        recipeData={recipeData}
        activeFilters={activeFilters}
        onClearFilters={handleClearFilters} // Pass clear filters handler
      />
      <div className="recipes-container">
        {sortedData.length > 0 ? (
          sortedData.map((recipe, index) => (
            <RecipeCard key={index} recipe={recipe} />
          ))
        ) : (
          <p className="no-results-message">
            No recipes match your search criteria or filters.
          </p>
        )}
      </div>
    </div>
  );
}
