import React from "react";
import { NavLink } from "react-router-dom";
import ContactForm from "./ContactForm";

import "../styles/content.css";
const Contact = () => {
  return (
    <div className="background contact">
      <NavLink to="/" className="back-button">
        ⬅ Back
      </NavLink>
      <h1 className="underlineH1">Contact Me</h1>
      <ContactForm></ContactForm>
      <div className="socials contact-socials">
        <a href="https://twitter.com/primathedev" className="socialLink">
          <i className="fab fa-twitter"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/tara-russell-200/</div>"
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

export default Contact;
