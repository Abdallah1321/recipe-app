import SearchBar from "../components/SearchBar";
import RecipeCard from "../components/RecipeCard";
import recipeData from "../assets/data.js";

export default function Recipes() {
  return (
    <div>
      <SearchBar />
      <div className="recipes-container">
        {recipeData.map((recipe, index) => (
          <RecipeCard key={index} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}
