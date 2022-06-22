import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { cardServicesData } from "./API/cardServicesData";

const ServiceDetails = () => {
  const params = useParams();
  let t = cardServicesData.filter((current) => {
    if (current.id == params.id) {
      return current;
    }
  });
  const data = t[0];

  return (
    <div className="deatilContainer">
      <div className="deatailServiceTitle">{data.title}</div>
      <div className="imgConatinerDetail">
        <img src={"." + data.img} alt={data.title} />
      </div>
    </div>
  );
};

export default ServiceDetails;
