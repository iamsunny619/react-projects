import React, { useEffect } from "react";

import CardServices from "./CardServices.js";
import { cardServicesData } from "../API/cardServicesData.js";
import ImageSlider from "./ImageSlider.js";
const ServiceSliderSec = () => {
  return (
    <>
      <div className="service-header">
        <h3 style={{ marginBottom: "50px" }}>THE GAME WE PLAY</h3>
        <span className="line" />
        <h1>OUR SERVICES OFFERS</h1>
        <span className="line" style={{ marginBottom: "50px" }} />
        <h3> THE RIGHT STRATEGY FOR THE RIGHT GAME</h3>
      </div>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <ImageSlider slides={cardServicesData} />
      </div>
      <div>
        <div className="service-desc">
          You have your area of expertise and strategies in place that will help
          you grow your business. However, your infrastructure dependencies are
          critical to providing the return you are expecting. This is where we
          come into play. This has helped us develop a format of working
          together with you. We become an integral part of your organization
          from the moment you are associated with us. We know the art of
          blending in with both large and small organizations.
        </div>

        <div className="service-desc">
          We have experience getting involved with the infrastructure team of
          large organizations to playing the catalyst of success and growth for
          the smaller organizations. Our expertise has helped many companies
          build and grow from 1 to 300 servers or go from 1 to a million
          transactions in a day. These growth-stories of our customers make us
          feel that we do make a difference.
        </div>
      </div>

      <div className="dddddd">
        <div className="cardService-container">
          {cardServicesData.map((data) => {
            return <CardServices data={data} />;
          })}
        </div>
      </div>
    </>
  );
};

export default ServiceSliderSec;
