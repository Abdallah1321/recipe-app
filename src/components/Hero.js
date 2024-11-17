import CustomImage from "./CustomImage";
import { Link } from "react-router-dom";
import recipeData from "../assets/data";

export default function Hero() {
  const images = recipeData.map((recipe) => recipe.img);
  const randomImages = images.sort(() => 0.5 - Math.random()).slice(0, 9);

  return (
    <div className="section hero">
      <div className="col typography">
        <h1 className="title">Hey! I'm Abdallah</h1>
        <p className="info">
          Welcome to my page, where I share all my favorite
          recipes. They're simple, approachable, and perfect for anyone looking
          to explore the joy of cooking or baking. Dive in and try them out yourself—you
          might discover your next go-to dish!
        </p>
        <Link to="/recipes" className="btn">
          Explore Recipes
        </Link>
      </div>
      <div className="col gallery">
        {randomImages.map((src, index) => (
          <CustomImage key={index} imgSrc={src} pt={"90%"} />
        ))}
      </div>
    </div>
  );
}
