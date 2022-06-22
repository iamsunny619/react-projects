import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import workapi from "./API/workApi.js";
import Aos from "aos";
import "aos/dist/aos.css";
import Aboutus from "./Aboutus.js";

const HowItWorks = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });

  const navigate = useHistory();
  const [workData, setWorkData] = useState(workapi);
  const handleRouteService = () => {
    navigate.push("/service");
  };

  const slides = [
    <image src="./images.c-1" alt="dasfcdi" />,
    <image src="./images/c-2" />,
    <image src="./images/c-3" />,
    <image src="./images/c-4" />,
    <image src="./images/c-5" />,
  ];
  return (
    <>
      <section>
        <div className="work-container container">
          <h1 className="main-heading text-center">Our services</h1>
        </div>
      </section>
      <div style={{ marginBottom: "10px", marginTop: "10px" }}></div>
      <Aboutus />
    </>
  );
};

export default HowItWorks;
