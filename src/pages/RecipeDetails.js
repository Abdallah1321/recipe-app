import { useParams } from "react-router-dom";
import recipeData from "../assets/data";

export default function RecipeDetails() {
  const { slug } = useParams();
  const recipe = recipeData.find((item) => item.slug === slug);

  if (!recipe) {
    return <p className="not-found">Recipe Not Found...</p>;
  }

  return (
    <div className="recipe-details">
      <h1 className="recipe-title">{recipe.name}</h1>
      <img className="recipe-img" src={recipe.img} alt={recipe.name} />
      <p className="recipe-desc">{recipe.desc}</p>
      {recipe.video && (
        <div className="recipe-video">
          <h3>Video Tutorial</h3>
          <iframe
            src={recipe.video}
            title={`${recipe.name} Video`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )}
      <div className="recipe-extra-details">
        <p>
          <strong>Prep Time:</strong> {recipe.prepTime}
        </p>
        <p>
          <strong>Cook Time:</strong> {recipe.cookTime}
        </p>
        <p>
          <strong>Servings:</strong> {recipe.servings}
        </p>
      </div>
      <h3 className="recipe-ingredients">Ingredients</h3>
      <ul>
        {recipe.ingredients.map((section, index) => (
          <div key={index}>
            {section.title && <h3>{section.title}</h3>}
            <ul>
              {section.items.map((ingredient, idx) => (
                <li key={idx}>{ingredient}</li>
              ))}
            </ul>
          </div>
        ))}
      </ul>
      <h3 className="recipe-steps">Steps</h3>
      <ol>
        {recipe.steps.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>
      {recipe.notes && (
        <p className="recipe-notes">
          <strong>Notes:</strong> {recipe.notes}
        </p>
      )}
    </div>
  );
}
