import React, { useState, useEffect } from "react";
import howToUseApp from "./API/howToUse.js";
import Carousel from "react-img-carousel";
import "react-img-carousel/lib/carousel.css";
import { useHistory } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

const Aboutus = () => {
  const navigate = useHistory();
  const [aboutData, setAboutData] = useState(howToUseApp);
  const handleRouteContact = () => {
    navigate.push("/contact");
  };

  useEffect(() => {
    Aos.init({ duration: 2000 });
  });

  return (
    <>
      <Carousel
        cellPadding={3}
        dots={false}
        autoplay={true}
        autoplaySpeed={2000}
        draggable={true}
        easing="linear"
      >
        <img src="./images/c-1.jpg" />
        <img src="./images/c-2.jpg" />
        <img src="./images/c-3.jpg" />
        <img src="./images/c-4.jpg" />
        <img src="./images/c-5.jpg" />
        <img src="./images/c-6.jpg" />
        <img src="./images/c-7.jpg" />
        <img src="./images/c-8.jpg" />
      </Carousel>

      {/*   <section className="common-section our-services">
        <div className="container mb-5">
          <div className="row">
            <div className="col-12 col-lg-5 text-center our-service-leftside-img">
              <img src="./images/hero3.jpg" alt="aboutusIMg" />
            </div>

           
            <div className="col-12 col-lg-7 our-services-list">
              <h3 className="mini-title">
                -- AVAILABLE @ GOOGLE AND IOS APP STORE ONLY
              </h3>
              <h1 className="main-heading">How to use the App?</h1>

              {aboutData.map((curElem) => {
                const { id, title, info } = curElem;
                return (
                  <>
                    <div className="row our-services-info" key={id}>
                      <div className="col-1 our-services-number">{id}</div>
                      <div className="col-10 our-services-data">
                        <h2>{title}</h2>
                        <p className="main-hero-para">{info}</p>
                      </div>
                    </div>
                  </>
                );
              })}

              <br />
              <button className="btn-style btn-style-border">learn more</button>
            </div>
          </div>
        </div>
      </section> */}

      {/* 2nd part of bayt us section  */}

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
              <button
                className="btn-style btn-style-border"
                onClick={handleRouteContact}
              >
                learn more
              </button>
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
                src="./images/contactus.svg"
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
