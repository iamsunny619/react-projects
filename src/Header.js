import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

const Header = () => {
  const navigate = useHistory();
  const handleRouteAbout = () => {
    navigate.push("/about");
  };

  useEffect(() => {
    Aos.init({ duration: 2000 });
  });
  return (
    <>
      <header>
        <section className="container main-hero-container">
          <div className="row">
            <div
              data-aos="slide-right"
              className="col-12 col-lg-6 header-left-side d-flex justify-content-center flex-column align-items-start "
            >
              <h1 className="display-2">
                Your Technology Partners <br />
              </h1>
              <p className="main-hero-para">
                Our company is dedicated to providing our customers with total
                computer solutions for business, industry, and individuals. We
                Weltech Computers are one of the leading traders of assembled
                computers which are available in different configurations. Other
                than this, we also offer our services as distributors of
                components from leading brands like HP, Acer, Lenevo, Dell,
                Apple, Compaq, etc.
              </p>
              {/* <h3>Get early access for you</h3> */}
              <div className="input-group mt-3">
                {/* <input
                  type="text"
                  className="rounded-pill w-50  w-lg-75 me-3 p-2 form-control-text"
                  placeholder="Enter Your Email"
                /> */}
                <div className="input-group-button" onClick={handleRouteAbout}>
                  Learn More
                </div>
              </div>
            </div>
            {/*  --------------- main header right side--------------  */}
            <div
              data-aos="slide-left"
              className="col-12 col-lg-6 header-right-side d-flex justify-content-center align-items-center main-herosection-images"
            >
              <img
                src="./images/server_tech.svg"
                alt="Services"
                className="img-fluid"
              />
              <img
                src="./images/delivery_shopping.svg"
                alt="Services"
                className="img-fluid main-hero-img2"
              />
            </div>
          </div>
        </section>
      </header>
    </>
  );
};

export default Header;
