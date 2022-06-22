import React from "react";
import { useHistory } from "react-router-dom";

const CardServices = ({ data }) => {
  const navigate = useHistory();
  const serviceLoadhandle = () => {
    navigate.push("/servicedetails/" + data.id);
  };

  return (
    <>
      <div className="card-container">
        <div className="card" onClick={serviceLoadhandle}>
          <img className="img-container" src={data.img} alt={data.title} />
          <div className="card-desc">
            <h3>{data.title}</h3>
            <div style={{ margin: "5px" }}>{data.info}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardServices;
