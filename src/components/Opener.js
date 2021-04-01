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

      <NavLink to="/Portfolio" className="nav-btn">
        Portfolio
      </NavLink>

      <NavLink to="/Contact" className="nav-btn">
        Contact Me
      </NavLink>

      <div className="socials">
        <a href="https://twitter.com/primathedev" className="socialLink">
          <i class="fab fa-twitter"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/tara-russell-200/</div>"
          className="socialLink"
        >
          <i class="fab fa-linkedin"></i>
        </a>
        <a href="https://github.com/PrimulaRussell" className="socialLink">
          <i class="fab fa-github"></i>
        </a>
      </div>
    </div>
  );
};

export default Opener;
