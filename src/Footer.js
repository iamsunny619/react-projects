import React from "react";
import { useLocation, useHistory } from "react-router-dom";
const Footer = () => {
  const currentPath = "/about";
  const location = useLocation();
  const showButton = currentPath === location.pathname;
  return (
    <div>
      {!showButton && (
        <footer>
          <div className="footer-conatiner">
            <div className="social-section">
              <h2>Follow Us On</h2>
              <div>
                <div className=" icon-footer">
                  <div className="col-3 mx-auto">
                    <i className="fab fa-facebook-f fontawesome-style"></i>
                  </div>
                  <div className="col-3 mx-auto">
                    <i className="fab fa-instagram fontawesome-style"></i>
                  </div>
                  <div className="col-3 mx-auto">
                    <a
                      style={{ textDecoration: "none" }}
                      href="https://twitter.com/iamsunny619"
                      target="_blank"
                    >
                      <i className="fab fa-twitter fontawesome-style"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <hr style={{ width: "60%" }} />
            <div className="copyright-tagline">
              Copyright @ 2022 iamsunny619. All rights reserved.{" "}
            </div>
          </div>
        </footer>
      )}
    </div>
  );
};

export default Footer;

/* import React from "react";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-conatiner">
          <div className="social-section">
            <h2>Follow Us On</h2>
            <div>
              <div className=" icon-footer">
                <div className="col-3 mx-auto">
                  <i class="fab fa-facebook-f fontawesome-style"></i>
                </div>
                <div className="col-3 mx-auto">
                  <i class="fab fa-instagram fontawesome-style"></i>
                </div>
                <div className="col-3 mx-auto">
                  <a href="https://twitter.com/iamsunny619" target="_blank">
                    <i class="fab fa-twitter fontawesome-style"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <hr style={{ width: "60%" }} />
          <div className="copyright-tagline">
            Copyright @ 2022 iamsunny619. All rights reserved.{" "}
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

/* import React from "react";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-10 mx-auto">
              <div className="row">
                <div className="col-6 col-lg-3">
                  <h2>Company</h2>
                  <ul>
                    <li>
                      <a href="#">About</a>
                    </li>
                    <li>
                      <a href="#">About</a>
                    </li>
                    <li>
                      <a href="#">About</a>
                    </li>
                    <li>
                      <a href="#">About</a>
                    </li>
                  </ul>
                </div>

                <div className="col-6 col-lg-3">
                  <h2>Support</h2>
                  <ul>
                    <li>
                      <a href="#">About</a>
                    </li>
                    <li>
                      <a href="#">About</a>
                    </li>
                    <li>
                      <a href="#">About</a>
                    </li>
                    <li>
                      <a href="#">About</a>
                    </li>
                  </ul>
                </div>

                <div className="col-6 col-lg-3">
                  <h2>Services</h2>
                  <ul>
                    <li>
                      <a href="#">About</a>
                    </li>
                    <li>
                      <a href="#">About</a>
                    </li>
                    <li>
                      <a href="#">About</a>
                    </li>
                    <li>
                      <a href="#">About</a>
                    </li>
                  </ul>
                </div>

                <div className="col-6 col-lg-3">
                  <h2>Follow Us</h2>
                  <div className="row">
                    <div className="col-3 mx-auto">
                      <i class="fab fa-facebook-f fontawesome-style"></i>
                    </div>
                    <div className="col-3 mx-auto">
                      <i class="fab fa-instagram fontawesome-style"></i>
                    </div>
                    <div className="col-3 mx-auto">
                      <i class="fab fa-youtube fontawesome-style"></i>
                    </div>
                    <div className="col-3 mx-auto">
                      <i class="fab fa-twitter fontawesome-style"></i>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <div className="mt-5">
                <p className="main-hero-para text-center w-100">
                  Copyright @ 2022 iamsunny619. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
 */
