import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/content.css";

const About = () => {
  return (
    <div className="background">
      <NavLink to="/" className="back-button">
        ⬅ Back
      </NavLink>
      <h1 className="underlineH1">About</h1>
      <p>
        Hello, my name is Tara. I am a web developer who loves spending her time{" "}
      </p>
    </div>
  );
};

export default About;
