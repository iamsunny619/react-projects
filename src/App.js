import React from "react";
import Home from "./Home";
import { Route, Switch } from "react-router";
import Contact from "./pages/Contact";
import Service from "./pages/Service";
import Error from "./pages/Error";
import ScrollToTop from "./Helper/ScrollToTop";
import Navbar from "./navbar";
import Footer from "./Footer";
import AboutMore from "./pages/AboutMore";

const App = () => {
  return (
    <>
      <ScrollToTop>
        <Navbar />

        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/about" component={AboutMore}></Route>
          <Route exact path="/contact" component={Contact}></Route>
          <Route exact path="/service" component={Service}></Route>
          <Route component={Error}></Route>
        </Switch>
        <Footer />
      </ScrollToTop>
    </>
  );
};

export default App;
