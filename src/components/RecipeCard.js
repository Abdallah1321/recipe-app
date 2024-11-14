import CustomImage from "./CustomImage";
import { Link } from "react-router-dom";

export default function RecipeCard({ recipe }) {
  return (
    <div className="recipe-card">
      <CustomImage imgSrc={recipe.img} pt="65%" />
      <div className="recipe-card-info">
        <p className="recipe-title">{recipe.name}</p>
        <p className="recipe-desc">{recipe.desc}</p>
        <Link className="view-btn" to={`/recipes/${recipe.slug}`}>
          VIEW RECIPE
        </Link>
      </div>
    </div>
  );
}
