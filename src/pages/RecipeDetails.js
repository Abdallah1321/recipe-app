import { useParams } from "react-router-dom";
import recipeData from "../assets/data";

export default function RecipeDetails() {
  const { slug } = useParams();
  const recipe = recipeData.find((item) => item.slug === slug);

  if (!recipe) {
    return <p>Recipe Not Found...</p>;
  }

  return (
    <div className="recipe-details">
      <h1>{recipe.name}</h1>
      <img src={recipe.img} alt={recipe.name} />
      <p>{recipe.desc}</p>
      <p>
        <strong>Prep Time:</strong> {recipe.prepTime}
      </p>
      <p>
        <strong>Cook Time:</strong> {recipe.cookTime}
      </p>
      <p>
        <strong>Servings:</strong> {recipe.servings}
      </p>
      <h3>Ingredients</h3>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h3>Steps</h3>
      <ol>
        {recipe.steps.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>
      <p>
        <strong>Notes:</strong> {recipe.notes}
      </p>
    </div>
  );
}
