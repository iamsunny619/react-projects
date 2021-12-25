import "./Navbar.css";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Searchbar from "../searchbar/Searchbar";
import { useTheme } from "../../hooks/useTheme";

const Navbar = () => {
  const { color, changeColor } = useTheme();
  return (
    <div className="navbar" style={{ background: color }}>
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
