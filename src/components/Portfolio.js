import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/content.css";

const Portfolio = () => {
  return (
    <div className="background">
      <NavLink to="/" className="back-button">
        ⬅ Back
      </NavLink>
      <h1>Hi</h1>
    </div>
  );
};

export default Portfolio;
