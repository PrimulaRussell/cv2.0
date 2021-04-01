import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/content.css";

const Opener = () => {
  return (
    <div className="background">
      <h1>Hello, my name is Tara. I'm a full-stack web developer. 💻 </h1>

      <NavLink to="/About" className="nav-btn">
        About Me
      </NavLink>
      {/* <NavLink to '/Portfolio'> Portfolio </NavLink>
            <NavLink to '/Contact'> Contact Me </NavLink>
            */}
    </div>
  );
};

export default Opener;
