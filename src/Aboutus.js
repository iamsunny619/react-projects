import React, { useState, useEffect } from "react";
import howToUseApp from "./API/howToUse.js";
// import Carousel from "react-img-carousel";
// import "react-img-carousel/lib/carousel.css";
import { useHistory } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import { useLocation } from "react-router-dom";

const Aboutus = () => {
  const navigate = useHistory();
  const [aboutData, setAboutData] = useState(howToUseApp);
  const handleRouteServices = () => {
    navigate.push("/contact");
  };

  const currentPath = "/service";
  const location = useLocation();
  const showButton = currentPath === location.pathname;

  useEffect(() => {
    Aos.init({ duration: 2000 });
  });

  return (
    <>
      <section className="common-section our-services our-services-rightside">
        <div className="container mb-5">
          <div className="row">
            {/* 1section right side data  */}
            <div className="col-12 col-lg-7 our-services-rightside-content d-flex justify-content-center align-items-start flex-column">
              <h3 className="mini-title">
                Thinking about support?? No Problem
              </h3>
              <h1 className="main-heading">
                Best Level support is <br /> available 24/7
              </h1>

              {aboutData.map((curElem) => {
                const { id, title, info } = curElem;
                return (
                  <>
                    <div className="row our-services-info" key={id}>
                      <div className="col-1 our-services-number">{id}</div>
                      <div className="col-10 our-services-data">
                        <h2>{title}</h2>
                        <p data-aos="zoom-in" className="main-hero-para">
                          {info}
                        </p>
                      </div>
                    </div>
                  </>
                );
              })}

              <br />
              {!showButton && (
                <button
                  className="btn-style btn-style-border"
                  onClick={handleRouteServices}
                >
                  Contact Us
                </button>
              )}
            </div>

            {/* images section  */}
            <div
              data-aos="flip-down"
              className="col-12 col-lg-5  our-service-rightside-img"
            >
              <img
                style={{
                  width: "40em",
                }}
                src="./images/contactus1.svg"
                alt="aboutusIMg"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Aboutus;
