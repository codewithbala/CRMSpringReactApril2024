import { useState } from "react";
import "./header.css";
import { Link, useNavigate } from "react-router-dom";
import EmployeeHomepage from "../user/employee/EmployeeHomepage";

const Header = (props) => {

  const navigate = useNavigate();
  let link;
  switch(props.department){
    case "hr":
      link = "/hr-manager-page";
      break;
      case "business":
        link = "/business-manager-page";
      break;
      case "training":
        link = "/training-admin-page";
      break;
      case "training-employee":
        link = "/training-employee-page";
      break;
      case "business-employee":
        link = "/business-employee-page";
      break;
      case "hr-employee":
        link = "/hr-employee-page";
      break;
  }

  function logout() {
    localStorage.setItem("loggedIn", false);
    localStorage.setItem("department", "");
    localStorage.removeItem("user")
    navigate("/");
  }

  return (
    <header>
      {/* <nav className="navbar nav_color navbar-expand-lg navbar-dark">
        <div className="container-fluid">
          <img src="../img/header_logo.svg" className="logo_img" />
          <Link to= "/"><span className="navbar-brand m-2" href="#">
            CRMSystem
          </span></Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to={link}>
                  <span className="nav-link active" aria-current="page" href="#">
                    Profile
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav> */}


      <nav className="nav">
        <ul>
          <li>
            <Link className="header-link" to={link}><p>Homepage</p></Link>
          </li>
          <li>
            <p>Profile &nbsp; &nbsp; &nbsp; &nbsp;</p>
          </li>
          <li>
            <p>Settings &nbsp; &nbsp;&nbsp;</p>
          </li>

          <li style={{marginTop: "30vh"}} onClick={() => logout()} className="logout">
            Logout &nbsp; &nbsp; &nbsp;
          </li>
          
        </ul>
      </nav>
    </header>
  );
};

export default Header;
