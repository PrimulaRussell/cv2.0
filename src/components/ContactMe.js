import React from "react";
import Image from "../images/contact.gif";
import "../styles/image.css";

const ContactMe = () => {
  return (
    <div>
      <img src={Image} alt="Phone Call" className="image" />
    </div>
  );
};

export default ContactMe;
