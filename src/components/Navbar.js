import { useState } from "react";
import { faHome, faList, faInfo } from "@fortawesome/free-solid-svg-icons";
import Sidebar from "./Sidebar";

export default function Navbar() {
  const [showSidebar, setShowSidebar] = useState(false);
  const links = [
    {
      name: "Home",
      path: "/",
      icon: faHome,
    },
    {
      name: "Recipes",
      path: "/recipes",
      icon: faList,
    },
    {
      name: "About",
      path: "/about",
      icon: faInfo,
    },
  ];

  function closeSidebar() {
    setShowSidebar(false);
  }

  return (
    <>
      <div className="navbar container">
        <a href="#!" className="logo">
          Abdallah's Recipes
        </a>
        <div className="nav-links">
          {links.map((link) => (
            <a href="#!" key={link.name}>
              {link.name}
            </a>
          ))}
          {/* <a href="#!">Home</a>
          <a href="#!">Recipes</a>
          <a href="#!">About</a> */}
        </div>
        <div
          onClick={() => setShowSidebar(!showSidebar)}
          className={showSidebar ? "sidebar-btn active" : "sidebar-btn"}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
      {showSidebar && <Sidebar close={closeSidebar} links={links} />}
    </>
  );
}
