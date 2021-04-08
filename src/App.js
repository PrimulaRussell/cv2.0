import React from "react";
import { Route, HashRouter } from "react-router-dom";
import "./App.css";
import Opener from "./components/Opener";
import Profile from "./components/Profile";
import About from "./components/About";
import Coding from "./components/Coding";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import SkillsImg from "./components/SkillsImg";
import Contact from "./components/Contact";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";
import DarkMode from "./components/DarkMode";

function App() {
  return (
    <HashRouter>
      <DarkMode />
      <div className="App">
        <Route exact path="/" component={Profile} />
        <Route exact path="/About" component={Profile} />
        <Route exact path="/Portfolio" component={Coding} />
        <Route exact path="/Skills" component={SkillsImg} />
        <Route exact path="/Contact" component={ContactMe} />

        {/*Container*/}
        <div className="container">
          <Route exact path="/" component={Opener} />
          <Route exact path="/About" component={About} />
          <Route exact path="/Portfolio" component={Portfolio} />
          <Route exact path="/Skills" component={Skills} />
          <Route exact path="/Contact" component={Contact} />
        </div>
      </div>
      <Footer></Footer>
    </HashRouter>
  );
}

export default App;
