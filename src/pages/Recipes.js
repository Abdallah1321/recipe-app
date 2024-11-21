import SearchBar from "../components/SearchBar";
import RecipeCard from "../components/RecipeCard";
import recipeData from "../assets/data.js";
import { useState } from "react";

export default function Recipes() {
  const [filteredData, setFilteredData] = useState(recipeData); // All recipes or filtered results

  const handleSearch = (searchTerm) => {
    if (Array.isArray(searchTerm)) {
      // This is a filter search, update the filtered data with the filtered recipes
      setFilteredData(searchTerm);
    } else {
      // This is a text search, filter recipes by name
      const filtered = recipeData.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredData(filtered);
    }
  };


  return (
    <div>
      <SearchBar onSearch={handleSearch} recipeData={recipeData} />
      <div className="recipes-container">
        {filteredData.map((recipe, index) => (
          <RecipeCard key={index} recipe={recipe} />
        ))}
      </div>
      
    </div>
  );
}