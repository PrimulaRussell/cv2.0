import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/content.css";
import Weather from "../images/weather.png";
import CvMaker from "../images/cv-maker.png";
import Etch from "../images/etch-a-sketch.png";

const Portfolio = () => {
  return (
    <div className="background portfolio">
      <NavLink to="/" className="back-button">
        ⬅ Back
      </NavLink>
      <h1 className="underlineH1">Portfolio</h1>

      <div className="proj-list">
        <div className="proj">
          <h3>Weather App</h3>
          <img src={Weather} alt="Weather App" />
          <div className="proj-links">
            <a href="https://simple-weatherapplication.netlify.app/">
              View Live
            </a>
            <a href="https://github.com/PrimulaRussell/Weather-App">
              View on Github
            </a>
          </div>
        </div>

        <div className="proj">
          <h3>CV Maker</h3>
          <img src={CvMaker} alt="CV Maker" />
          <div className="proj-links">
            <a href="https://resumeandcvbuilder.netlify.app/">View Live</a>
            <a href="https://github.com/PrimulaRussell/react-cv-application">
              View on Github
            </a>
          </div>
        </div>

        <div className="proj">
          <h3>Etch-a-Sketch</h3>
          <img src={Etch} alt="Etch-a-Sketch" />
          <div className="proj-links">
            <a href="https://my-etch-a-sketch-project.netlify.app/">
              View Live
            </a>
            <a href="https://github.com/PrimulaRussell/Etch-a-Sketch">
              View on Github
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
