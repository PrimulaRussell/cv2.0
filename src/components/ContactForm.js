import React, { useState } from "react";
import "../styles/contactForm.css";
import { db } from "./firebase.js";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [formHidden, setFormHidden] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    db.collection("contacts")
      .add({
        name: name,
        email: email,
        message: message,
      })
      .then(() => {
        setFormHidden(true);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div>
      <h1
        className="alert"
        style={{
          display: formHidden ? "flex" : "none",
        }}
      >
        Message Sent!
      </h1>

      <form
        className="form"
        onSubmit={handleSubmit}
        style={{ display: formHidden ? "none" : "flex" }}
      >
        <label>Name</label>
        <input
          placeholder="name"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Email</label>
        <input
          type="email"
          required
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Message</label>
        <textarea
          placeholder="message"
          type="text"
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
