import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import workapi from "./API/workApi.js";
import Aos from "aos";
import "aos/dist/aos.css";

const HowItWorks = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });

  const navigate = useHistory();
  const [workData, setWorkData] = useState(workapi);
  const handleRouteService = () => {
    navigate.push("/service");
  };
  return (
    <>
      <section>
        <div className="work-container container">
          <h1 className="main-heading text-center">Our services</h1>
          <div className="row">
            {workData.map((curElem) => {
              const { id, logo, title, info } = curElem;
              return (
                <>
                  <div
                    data-aos="flip-left"
                    key={id}
                    className="col-12 col-lg-4 text-center work-container-subdiv"
                  >
                    <i class={`fontawesome-style ${logo}`}></i>
                    <h2 className="sub-heading">{title}</h2>
                    <p className="main-hero-para w-100">{info}</p>
                  </div>
                </>
              );
            })}
          </div>
          <div className="input-group-button-service-conatiner">
            <button
              className="input-group-button-service"
              onClick={handleRouteService}
            >
              more..
            </button>
          </div>
        </div>
      </section>
      <div style={{ marginBottom: "20px" }}></div>
    </>
  );
};

export default HowItWorks;
