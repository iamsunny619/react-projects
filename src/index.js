import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import AppComponent from "./components/Context/AppComponent";

ReactDOM.render(
  <React.StrictMode>
    <AppComponent>
      <App />
    </AppComponent>
  </React.StrictMode>,
  document.getElementById("root")
);
