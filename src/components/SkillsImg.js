import React from "react";
import Image from "../images/skills.jpg";
import "../styles/image.css";

const SkillsImg = () => {
  return (
    <div>
      <img src={Image} alt="code" className="image" />
    </div>
  );
};

export default SkillsImg;
