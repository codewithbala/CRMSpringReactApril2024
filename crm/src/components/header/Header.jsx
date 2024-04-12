/* Prototype of the Header component, which should only be visible when the user is logged in. Tomorrow I will finish the functionality and make the menu fully responsive. */

const Header = () => {
  return (
    <header className="nav_container">
      <div className="logo">
        <img
          src="../img/header_logo.svg"
          className="logo_graphic"
          height="50"
          width="50"
        />
        <span className="logo_text">CRMSystem</span>
      </div>

      <nav>
        <ul className="nav_link_container">
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
      <div className="nav_toggler">&#8801;</div>
    </header>
  );
};

export default Header;
