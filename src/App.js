import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Home from "./pages/home/Home.js";
import Login from "./pages/login/Login.js";
import Signup from "./pages/signup/Signup.js";
import Navbar from "./components/navbar/Navbar.js";
import { useAuthContext } from "./hooks/useAuthContext";

const App = () => {
  const { authIsReady, user } = useAuthContext();

  return (
    <div className="App">
      {authIsReady && (
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route path="/" exact>
              {!user && <Redirect to="/login" />}
              {user && <Home />}
            </Route>
            <Route path="/login">
              {!user && <Login />}
              {user && <Redirect to="/" />}
            </Route>
            <Route path="/signup">
              {!user && <Signup />}
              {user && <Redirect to="/" />}
            </Route>
          </Switch>
        </BrowserRouter>
      )}
    </div>
  );
};

export default App;
