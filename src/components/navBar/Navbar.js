import "./Navbar.css";
import React from "react";
import { Link } from "react-router-dom";
import Searchbar from "../searchbar/Searchbar";

const Navbar = () => {
  return (
    <div className="navbar">
      <nav>
        <Link to="/" className="brand">
          <h1>anny</h1>
        </Link>
        <Searchbar />
        <Link to="/create">Create Recipe</Link>
      </nav>
    </div>
  );
};

export default Navbar;
