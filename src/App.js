import React, { useState, useEffect } from "react";

import "./App.css";
import SingleCard from "./components/singleCard/SingleCard";
const cardImages = [
  { src: "/img/helmet-1.png", matched: false },
  { src: "/img/potion-1.png", matched: false },
  { src: "/img/ring-1.png", matched: false },
  { src: "/img/scroll-1.png", matched: false },
  { src: "/img/shield-1.png", matched: false },
  { src: "/img/sword-1.png", matched: false },
];

const App = () => {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);

  //shuffle cards
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));
    setChoiceOne(null);
    setChoiceTwo(null);
    setCards(shuffledCards);
    setTurns(0);
  };

  //handling choices
  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);

    // if (choiceTwo && choiceOne) {
    // this herew wont work since state is taking time to load use useeffect
    //   compareCards();
    // }
  };

  // //comparing both cards, this method wont work bro, it has glitch, taking 3 card first  time so ignore this
  // const compareCards = () => {
  //   if (choiceOne.src === choiceTwo.src) {
  //     console.log("matching", choiceOne.src, choiceTwo.src);
  //   } else {
  //     console.log("not matching", choiceOne.src, choiceTwo.src);
  //   }
  // };

  //comparing choices
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);
      if (choiceOne.src === choiceTwo.src) {
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.src === choiceTwo.src) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
        resetTurn();
      } else {
        setTimeout(() => resetTurn(), 500);
      }
    }
  }, [choiceOne, choiceTwo]);

  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prev) => prev + 1);
    setDisabled(false);
  };

  return (
    <div className="App">
      <h1>Magic Match</h1>
      <button onClick={shuffleCards}>New Game</button>

      <div className="card-grid">
        {cards.map((card) => {
          return (
            <SingleCard
              card={card}
              key={card.id}
              className="card"
              handleChoice={handleChoice}
              disabled={disabled}
              flipped={card === choiceOne || card === choiceTwo || card.matched}
            />
          );
        })}
      </div>
      <p>No. of turns : {turns}</p>
    </div>
  );
};

export default App;
