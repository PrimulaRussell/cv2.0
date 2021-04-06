import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/content.css";
import Weather from "../images/weather.png";
import CvMaker from "../images/cv-maker.png";
import Etch from "../images/etch-a-sketch.png";

const Portfolio = () => {
  return (
    <div className="background">
      <NavLink to="/" className="back-button">
        ⬅ Back
      </NavLink>
      <h1 className="underlineH1">Portfolio</h1>

      <div className="proj-link">
        <div className="proj">
          <h4>Weather App</h4>
          <a href="https://simple-weatherapplication.netlify.app/">
            <img src={Weather} alt="Weather App" />
          </a>
        </div>

        <div className="proj">
          <h4>CV Maker</h4>
          <a href="https://app.netlify.com/sites/resumeandcvbuilder/overview">
            <img src={CvMaker} alt="CV Maker" />
          </a>
        </div>

        <div className="proj">
          <h4>Etch-a-Sketch</h4>
          <a href="https://my-etch-a-sketch-project.netlify.app/">
            <img src={Etch} alt="Etch-a-Sketch" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
