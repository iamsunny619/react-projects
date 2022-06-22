import React, { useState } from "react";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const autoslide = () => {};
  autoslide();
  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100vw",
      }}
    >
      <GrFormPrevious className="arrow arrow-left" onClick={prevSlide} />
      <section className="slider">
        {slides.map((slide, index) => {
          return (
            <div
              className={index === current ? "slide active" : "slide"}
              key={slide.id}
            >
              {index === current && (
                <div className="imgaeSlider-conatinerdiv">
                  <img src={slide.img} alt="travel image" className="image" />
                  <div className="slider-rightContent">
                    <h1>{slide.title}</h1>
                    <div>{slide.info}</div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </section>
      <GrFormNext className="arrow arrow-right" onClick={nextSlide} />
    </div>
  );
};

export default ImageSlider;
