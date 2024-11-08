import { useState } from "react";

export default function Navbar() {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <div className="navbar container">
      <a href="#!" className="logo">
        Abdallah's Recipes
      </a>
      <div className="nav-links">
        <a href="#!">Home</a>
        <a href="#!">Recipes</a>
        <a href="#!">About</a>
      </div>
      <div onClick={ () => setShowSidebar(!showSidebar)} className={showSidebar ? "sidebar-btn active" : "sidebar-btn"}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </div>
  );
}
