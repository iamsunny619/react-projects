import React from "react";
import "./SingleCard.css";
const SingleCards = ({ card, handleChoice, flipped, disabled }) => {
  const handleClick = () => {
    if (!disabled) {
      handleChoice(card);
    }
  };
  return (
    <div className="card">
      <div className={flipped ? "flipped" : ""}>
        <img className="front" src={card.src} alt="cardfront" />
        <img
          className="back"
          src="/img/cover.png"
          alt="cardfront"
          onClick={handleClick}
        />
      </div>
    </div>
  );
};

export default SingleCards;
