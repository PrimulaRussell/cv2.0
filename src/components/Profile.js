import React from "react";
import Image from "../images/portfolio-pic.jpg";
import "../styles/image.css";

function Profile() {
  return (
    <div>
      <img src={Image} alt="Tara" className="image" />
    </div>
  );
}

export default Profile;
