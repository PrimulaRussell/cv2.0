import React from "react";
import { Route, HashRouter } from "react-router-dom";
import "./App.css";
import Opener from "./components/Opener";
import Profile from "./components/Profile";
import About from "./components/About";

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Route exact path="/" component={Profile} />
        <Route exact path="/About" component={Profile} />

        {/*Container*/}
        <div className="container">
          <Route exact path="/" component={Opener} />
          <Route exact path="/About" component={About} />
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
