import "./Create.css";
import React, { useEffect, useRef, useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import { useHistory } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState("");
  const [method, setMethod] = useState("");
  const [cookingTime, setCookingTime] = useState("");
  const [newIngredient, setnewIngredient] = useState("");
  const [ingredients, setIngredients] = useState([]);

  const ingredientInput = useRef(null);
  const history = useHistory();

  const { postData, data, error } = useFetch(
    "http://localhost:3000/recipes",
    "POST"
  );

  const handleAdd = (e) => {
    e.preventDefault();
    const ing = newIngredient.trim();

    if (ing && !ingredients.includes(ing)) {
      setIngredients((prevIngredients) => [...prevIngredients, ing]);
    }
    setnewIngredient("");
    ingredientInput.current.focus();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postData({
      title,
      ingredients,
      method,
      cookingTime: cookingTime + "minutes",
    });
    console.log(title, method, ingredients, cookingTime);
  };

  //redirect once data is posted
  useEffect(() => {
    if (data) {
      history.push("/");
    }
  }, [data]);
  return (
    <div className="create">
      <h2 className="page-title">
        <form onSubmit={handleSubmit}>
          <label>
            <span>Recipe Title : </span>
            <input
              type="text"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              required
            />
          </label>
          <label>
            <span>Recipe Ingredients:</span>
            <div className="ingredients">
              <input
                type="text"
                onChange={(e) => setnewIngredient(e.target.value)}
                value={newIngredient}
                ref={ingredientInput}
              />
              <butoon className="btn" onClick={handleAdd}>
                add
              </butoon>
            </div>
          </label>
          <p>
            {ingredients.map((i) => (
              <em key={i}>{i},</em>
            ))}
          </p>
          <label>
            <span>Recipe Method :</span>
            <textarea
              onChange={(e) => setMethod(e.target.value)}
              value={method}
              required
            />
          </label>
          <label>
            <span>Cooking Time(Mins):</span>
            <input
              type="number"
              onChange={(e) => setCookingTime(e.target.value)}
              value={cookingTime}
              required
            />
          </label>

          <button className="btn">Submit</button>
        </form>
      </h2>
    </div>
  );
};

export default Create;
