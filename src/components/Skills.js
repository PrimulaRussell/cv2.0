import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/content.css";

const Skills = () => {
  return (
    <div className="background skills">
      <NavLink to="/" className="back-button">
        ⬅ Back
      </NavLink>
      <h1 className="underlineH1">Skills</h1>
      <p>
        Below is the list of technologies that I am capable of using. I am
        always learning and building upon my skills, and am enthusiastic about
        learning the best practices of each language and tool I use.
      </p>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>Javascript</li>
        <li>Firebase</li>
        <li>React</li>
        <li>Node</li>
        <li>Express</li>
        <li>MongoDB</li>
        <li>Git</li>
        <li>Github</li>
        <li>NPM</li>
        <li>Responsive Design</li>
        <li>Asychronous Javascript</li>
        <li>Webpack</li>
        <li>3rd Party API integration</li>
      </ul>
    </div>
  );
};

export default Skills;
