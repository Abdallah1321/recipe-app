import CustomImage from "./CustomImage";

export default function RecipeCard({recipe}) {
  return (
    <div className="recipe-card">
      <CustomImage imgSrc={recipe.img} pt="65%" />
      <div className="recipe-card-info">
        <p className="recipe-title">{recipe.name}</p>
        <p className="recipe-desc">{recipe.desc}</p>
        <a className="view-btn" href="#!">VIEW RECIPE</a>
      </div>
    </div>
  );
}
