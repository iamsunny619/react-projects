import React from "react";

const CardServices = ({ data }) => {
  return (
    <>
      <div className="card-container">
        <div class="card">
          <img className="img-container" src={data.img} alt={data.title} />
          <div className="card-desc">
            <h3>{data.title}</h3>
            <div>{data.info}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardServices;
