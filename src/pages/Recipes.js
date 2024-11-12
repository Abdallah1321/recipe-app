import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faS, faSearch } from "@fortawesome/free-solid-svg-icons";

export default function Recipes() {
  const searches = ["Brownies", "Burger", "Cookies", "Tiramisu", "Hash Browns"];
  return (
    <div>
      <div className="featured-searches section">
        <h2>Featured Searches</h2>
        <div className="featured-searches-container">
          {searches.map((search, index) => (
            <div
              key={index}
              style={{ animationDelay: index * 0.1 + "s" }}
              className="search-item"
            >
              {search}
            </div>
          ))}
        </div>
        <div className="search-box">
          <input type="text" placeholder="Search... " />
          <button className="btn">
            <FontAwesomeIcon icon={faSearch}/>
          </button>
        </div>
      </div>
    </div>
  );
}
