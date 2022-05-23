import React, { useContext } from "react";
import appContext from "../app-Context";
import SecondChild from "./SecondChild";

const FirstChild = () => {
  const { msg, isAuth, setIsAuth } = useContext(appContext);
  return (
    <div>
      FirstChild and value i got is {msg}
      <div>my child comp is below</div>
      <button onClick={() => setIsAuth(true)}>show child of first</button>
      <div>
        {isAuth ? (
          <SecondChild />
        ) : (
          "isAuth is false hence child child is not visible"
        )}
      </div>
      <button
        onClick={() => {
          setIsAuth(false);
        }}
      >
        hide
      </button>
    </div>
  );
};

export default FirstChild;
