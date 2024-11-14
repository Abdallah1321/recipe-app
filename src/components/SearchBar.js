import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function SearchBar() {
  const searches = ["Brownies", "Burger", "Cookies", "Tiramisu", "Hash Browns"];

  return (
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
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
    </div>
  );
}
