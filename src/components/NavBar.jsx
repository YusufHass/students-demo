import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const NavBar = () => {
  return (
    // <div>
    // hello
    // </div>
    <nav className="navbar navbar-light container">
  
          <h4>
            <Link className="link"to="/">
              Home
            </Link>
          </h4>
          <h4>
            <Link className="link" to="/students-list">
              Students List
            </Link>
          </h4>
          <h4>
            <Link className="link" to="/add-student">
              Add New Student
            </Link>
          </h4>
      </nav>
    
  )
}
export default NavBar