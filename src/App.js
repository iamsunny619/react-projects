import React, { useContext } from "react";
import Testing from "./components/Testing";
import "./App.css";
import UseReducer from "./components/Reducer/UseReducer";
import UseReducerPlus from "./components/Reducer/LearnUsereducer/UseReducerPlus";
import FirstChild from "./components/Context/somecompo/FirstChild";
import appContext from "./components/Context/app-Context";
const App = () => {
  const { setIsAuth, isAuth } = useContext(appContext);
  return (
    <div>
      {/* <Testing /> */}
      {/* <UseReducer /> */}
      {/* <UseReducerPlus /> */}
      <p>toggle the child visibilty</p>
      <button onClick={() => setIsAuth(!isAuth)}>toggle</button>
      <FirstChild />
    </div>
  );
};

export default App;
