import CustomImage from "./CustomImage";

export default function Hero() {
  const images = [
    "/img/foodPics/brookies.jpg",
    "/img/foodPics/brownies.jpg",
    "/img/foodPics/burger.jpg",
    "/img/foodPics/burritobowl.jpg",
    "/img/foodPics/caremelisedonionpasta.jpg",
    "/img/foodPics/cheesecake.jpg",
    "/img/foodPics/chiliconcarne.jpg",
    "/img/foodPics/cookies.jpg",
    "/img/foodPics/cremebrulee.jpg",
    "/img/foodPics/cremecaramel.jpg",
    "/img/foodPics/dumpling.jpg",
    "/img/foodPics/eclairs.jpg",
    "/img/foodPics/friedchicken.jpg",
    "/img/foodPics/grilledcheese.jpg",
    "/img/foodPics/hashbrown.jpg",
    "/img/foodPics/moltencake.jpg",
    "/img/foodPics/mozzarellasticks.jpg",
    "/img/foodPics/muffins.jpg",
    "/img/foodPics/pizza.jpg",
    "/img/foodPics/redvelvet.jpg",
    "/img/foodPics/salmonpokebowl.jpg",
    "/img/foodPics/shrimpfriedrice.jpg",
    "/img/foodPics/tiramisu.jpg",
    "/img/foodPics/yellowricechicken.jpg",
  ];

  const randomImages = images.sort(() => 0.5 - Math.random()).slice(0, 9);

  return (
    <div className="section hero">
      <div className="col typography">
        <h1 className="title">Hey! I'm Abdallah</h1>
        <p className="info">
          This is where you can find all my favourite recipes which are all
          simple to make and very approachable. So check them out and try making
          them yourself!
        </p>
        <button className="btn">Explore Recipes</button>
      </div>
      <div className="col gallery">
        {randomImages.map((src, index) => (
          <CustomImage key ={index} imgSrc={src} pt={"90%"} />
        ))}
      </div>
    </div>
  );
}
