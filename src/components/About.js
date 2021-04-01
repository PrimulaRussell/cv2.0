import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/content.css";

const About = () => {
  return (
    <div className="background">
      <NavLink to="/" className="back-button">
        ⬅ Back
      </NavLink>
      <h1 className="underlineH1">About</h1>
      <p>
        Hello 👋 my name is Tara. I'm a self-taught web developer who loves
        spending her time building new projects 🔨 I started programming
        mid-2020 after I lost my job. I decided I wanted to paint a better
        future for myself 🎨 and I wanted to do something I loved. 💘 My first
        time touching code is when I was 13, I would mess with pre-made Tumblr
        templates to try and make my profile look as cute as possible(I love
        girly pink stuff!) 🌸 <br />
        These days, I am coding up full-stack websites and building for a
        purpose!
        <br />
        Aside from coding, I love playing video games 🎮 , watching anime 📺 ,
        playing with my dog🐶 (see pics below), drawing ✏️, and learning about
        gardening 🌻
      </p>
    </div>
  );
};

export default About;
