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
                Weltech Solutions is an IT services company that provides IT
                solutions in and across INDIA. Weltech is all about what strong
                vision, integrity, expertise and customer service that we create
                in the market, maintaining high quality and excellent Service
                Delivery. We deliver highly responsive and innovative solutions
                that help clients to align their information technology strategy
                with their business goals, ideas, and address the most important
                IT needs today through a combination of consultancy, strategic
                methodologies and Collaborative Engagement Model. That's why our
                goal is to provide an experience that is tailored to your
                company's needs. No matter the budget, we pride ourselves on
                providing professional customer service. We know the art of
                blending in with both large and small organizations.
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
                src="./images/server_tech1.svg"
                alt="Services"
                className="img-fluid"
              />
              <img
                src="./images/delivery_shopping1.svg"
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
