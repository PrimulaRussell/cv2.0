import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/content.css";
import About from "./About";
import Portfolio from "./Portfolio";
import Skills from "./Skills";
import Contact from "./Contact";
import Profile from "./Profile";

const Opener = () => {
  return (
    <div className="background opener">
      <h1>Hello, my name is Tara. I'm a full-stack web developer. 💻 </h1>
      <div className="navbar">
        <NavLink to="/About" className="nav-btn">
          About Me
        </NavLink>

        <NavLink to="/Portfolio" className="nav-btn">
          Portfolio
        </NavLink>

        <NavLink to="/Skills" className="nav-btn">
          Skills
        </NavLink>

        <NavLink to="/Contact" className="nav-btn">
          Contact Me
        </NavLink>
      </div>

      <div className="mobileview">
        <Profile></Profile>
        <About></About>
        <Portfolio></Portfolio>
        <Skills></Skills>
        <Contact></Contact>
      </div>

      <div className="socials">
        <a href="https://twitter.com/primathedev" className="socialLink">
          <i className="fab fa-twitter"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/tara-russell-200/"
          className="socialLink"
        >
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://github.com/PrimulaRussell" className="socialLink">
          <i className="fab fa-github"></i>
        </a>
      </div>
    </div>
  );
};

export default Opener;
