import React from "react";
import "../styles/contactForm.css";
const ContactForm = () => {
  return (
    <form className="form">
      <label>Name</label>
      <input placeholder="name" />

      <label>Email</label>
      <input placeholder="email" />

      <label>Message</label>
      <textarea placeholder="message"></textarea>

      <button type="submit">Submit</button>
    </form>
  );
};

export default ContactForm;
