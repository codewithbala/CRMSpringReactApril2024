import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer_link_container">
        <ul className="footer_links">
          <li className="footer_links_li">
            <a href="#" className="footer_link">
              Link One
            </a>
          </li>
          <li className="footer_links_li">
            <a href="#" className="footer_link">
              Link Two
            </a>
          </li>
          <li className="footer_links_li">
            <a href="#" className="footer_link">
              Link Three
            </a>
          </li>
          <li className="footer_links_li">
            <a href="#" className="footer_link">
              Link Four
            </a>
          </li>
        </ul>
      </div>
      <p className="footer_caption">
        {<>&copy;</>} 2024, CRMSystem Solutions. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
