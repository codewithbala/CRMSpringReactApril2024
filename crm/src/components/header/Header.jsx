import { useState } from "react";
import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="nav_container">
      <div className="logo">
        <img
          src="../img/header_logo.svg"
          className="logo_graphic"
          height="50"
          width="50"
        />
        <Link to="/"><span className="logo_text">CRMSystem</span></Link>
      </div>

      <nav>
        <ul className={showMenu ? "open_menu" : "nav_link_container"}>
          <li className="nav_item">
            <a href="#" className="nav_link">
              Link One
            </a>
          </li>
          <li className="nav_item">
            <a href="#" className="nav_link">
              Link Two
            </a>
          </li>
          <li className="nav_item">
            <a href="#" className="nav_link">
              Link Three
            </a>
          </li>
          <li className="nav_item">
            <a href="#" className="nav_link">
              Link Four
            </a>
          </li>
        </ul>
      </nav>
      <div className="nav_toggler">
        <a
          href="#"
          className="menu_collapse"
          onClick={() => setShowMenu(!showMenu)}
        >
          {showMenu ? "X" : <>&#8801;</>}
        </a>
      </div>
    </header>
  );
};

export default Header;
