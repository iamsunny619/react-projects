import React, { useContext } from "react";
import appContext from "../app-Context";
const SecondChild = () => {
  const { msg } = useContext(appContext);
  return <div>SecondChild and msg i got is {msg}</div>;
};

export default SecondChild;
