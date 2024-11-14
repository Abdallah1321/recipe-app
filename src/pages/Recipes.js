import SearchBar from "../components/SearchBar";
import RecipeCard from "../components/RecipeCard";
import recipeData from "../assets/data.js";
import { useState } from "react";

export default function Recipes() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = recipeData.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );


  return (
    <div>
      <SearchBar onSearch={setSearchTerm} />
      <div className="recipes-container">
        {filteredData.map((recipe, index) => (
          <RecipeCard key={index} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}
