import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <section className="navbar-bg">
        <nav className="navbar navbar-expand-lg navbar-light ">
          <div className="container">
            <a className="navbar-brand" href="/">
              <img
                className="logo"
                src="./images/weltechlogo.jpeg"
                alt="Wletech.logo"
              />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              aria-label="Toggle navigation"
              onClick={() => setShow(!show)}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`collapse navbar-collapse ${show ? "show" : ""}`}>
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink exact className="nav-link " to="/">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink exact className="nav-link" to="/service">
                    Services
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink exact className="nav-link" to="/about">
                    About
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink exact className="nav-link" to="/contact">
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
};

export default Navbar;
