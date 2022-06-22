import React from "react";
import { useLocation, useHistory } from "react-router-dom";
const FooterCopy = () => {
  //   const currentPath = "/about";
  //   const location = useLocation();
  //   const showButton = currentPath === location.pathname;
  return (
    <div>
      <footer>
        <div className="footer-conatiner">
          <div className="social-section">
            <h2>Follow Us On</h2>
            <div>
              <div className=" icon-footer">
                <div className="col-3 mx-auto">
                  <i classNmae="fab fa-facebook-f fontawesome-style"></i>
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
    </div>
  );
};

export default FooterCopy;
