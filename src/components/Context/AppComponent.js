import React, { useState } from "react";
import appContext from "./app-Context";

const AppComponent = (props) => {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <appContext.Provider
      value={{
        msg: "a msg from global context",
        isAuth: isAuth,
        setIsAuth: setIsAuth,
      }}
    >
      {props.children}
    </appContext.Provider>
  );
};

export default AppComponent;
