import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchBar({onSearch, recipeData} ) {
  const [randomRecipes, setRandomRecipes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Select 6 random recipes from recipeData
    const shuffledRecipes = [...recipeData].sort(() => 0.5 - Math.random());
    setRandomRecipes(shuffledRecipes.slice(0, 6));
  }, [recipeData]);

  const handleSearchClick = (slug) => {
    // Navigate to the corresponding recipe page
    navigate(`/recipes/${slug}`);
  };
  
  return (
    <div className="featured-searches section">
      <h2>Suggested Searches</h2>
      <div className="featured-searches-container">
        {randomRecipes.map((recipe, index) => (
          <div
            key={index}
            style={{ animationDelay: index * 0.1 + "s" }}
            className="search-item"
            onClick={() => handleSearchClick(recipe.slug)}
          >
            {recipe.name}
          </div>
        ))}
      </div>
      <div className="search-box">
        <input type="text" placeholder="Search... " onChange={(e) => onSearch(e.target.value)} />
        <button className="btn">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
    </div>
  );
}
