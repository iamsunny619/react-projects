// hi anny check the UseReduceJS example first and come here later once complete that

import React, { useReducer, useState } from "react";

const intialState = {
  name: "",
  age: 0,
  number: 0,
};

const reducerFun = (state, action) => {
  switch (action.type) {
    case "NAME":
      return { ...state, name: action.payload };
    case "AGE":
      return { ...state, age: action.payload };
    case "INC":
      return { ...state, number: state.number + 1 };
    case "DEC":
      return { ...state, number: state.number - 1 };
    case "RESET":
      return { name: "", number: 0, age: 0 };
  }
};

const UseReducerPlus = () => {
  const [state, dispatch] = useReducer(reducerFun, intialState);
  const [name, setName] = useState("");
  return (
    <>
      <p>name</p>{" "}
      <input
        text="text"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <button onClick={() => dispatch({ type: "NAME", payload: name })}>
        {" "}
        name
      </button>
      <div>
        <p>age</p>
        <input
          onChange={(e) => dispatch({ type: "AGE", payload: e.target.value })}
          value={state.age}
          type="number"
        />
      </div>
      <div>
        <button onClick={() => dispatch({ type: "INC" })}>INC</button>
        <button onClick={() => dispatch({ type: "DEC" })}>DEC</button>
      </div>
      <div></div>
      <div>
        {state.name}
        {state.age}
        {state.number}

        <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
      </div>
    </>
  );
};

export default UseReducerPlus;
