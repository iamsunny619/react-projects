//this file contains only use reducer stuff realted program, to lear and under stand as a furture refrences or to revice or to learn,
//Hi sunny belive me it is easy to learn, it state only, but with a single state u can hold multpple state just go through it u will get all
// if u want to under stand this in a video tutrial go the the fullstack junki usereduce and usecontec video a 50 min but good to understand easy.

import React, { useReducer } from "react";

//u can create below function anywhere u want
const intialStateInReducer = {
  name: "ankit",
  age: 25,
};

const reducerFunAction = (state, action) => {
  switch (action.type) {
    case "AGE":
      return { ...state, age: state.age + 10 };
    case "NAME":
      return { ...state, name: action.payload };
    case "RESET":
      return { intialStateInReducer }; // this line is setting to "" can cause an issue.
    default:
      return "how default came?? some error had happened seems";
  }
};

const UseReducer = () => {
  const [state, reducerDispatchFun] = useReducer(
    reducerFunAction,
    intialStateInReducer
  );

  return (
    <>
      <p>
        Name is = {state.name} and Age is = {state.age}
      </p>
      <div>
        <button
          onClick={() =>
            reducerDispatchFun({ type: "NAME", payload: "iamsunny619" })
          }
        >
          Change Name
        </button>
        <button onClick={() => reducerDispatchFun({ type: "AGE" })}>
          Update Age
        </button>
        <button onClick={() => reducerDispatchFun({ type: "RESET" })}>
          RESET
        </button>
      </div>
    </>
  );
};

export default UseReducer;
