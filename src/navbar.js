import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <section className="navbar-bg">
        <nav class="navbar navbar-expand-lg navbar-light ">
          <div class="container">
            <a class="navbar-brand" href="#">
              <img
                className="logo"
                src="./images/weltechLogo.jpg"
                alt="Wletech.logo"
              />
            </a>
            <button
              class="navbar-toggler"
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
                {/* <li class="nav-item">
                  <NavLink class="nav-link" to="/contact">
                    Contact
                  </NavLink>
                </li> */}
              </ul>
              {/* <form class="d-flex">
                <button class="btn  btn-style" type="submit">
                  Sign Up
                </button>
                <button class="btn  btn-style btn-style-border" type="submit">
                  Log in
                </button>
              </form> */}
            </div>
          </div>
        </nav>
      </section>
    </>
  );
};

export default Navbar;
