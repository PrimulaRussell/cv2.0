import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/content.css";
import Img1 from "../images/doog1.jpg";
import Img2 from "../images/doog2.jpg";
import Img3 from "../images/doog3.jpg";

const About = () => {
  return (
    <div className="background about">
      <NavLink to="/" className="back-button">
        â¬ Back
      </NavLink>
      <h1 className="underlineH1">About</h1>
      <p>
        Hello ð my name is Tara. I'm a self-taught web developer who loves
        spending her time building new projects ð¨ I started programming
        mid-2020 after I lost my job. I decided I wanted to paint a better
        future for myself ð¨ and I wanted to do something I loved. ð My first
        time touching code is when I was 13, I would mess with pre-made Tumblr
        templates to try and make my profile look as cute as possible(I love
        girly pink stuff!) ð¸ <br />
        These days, I am coding up full-stack websites and building for a
        purpose!
        <br />
        Aside from coding, I love playing video games ð® , watching anime ðº ,
        playing with my dogð¶, drawing âï¸, and learning about gardening ð»
      </p>
      <div className="personal-images">
        <img src={Img1} alt="Picture1 of my dog" className="dog-img"></img>
        <img src={Img2} alt="Picture2 of my dog" className="dog-img"></img>
        <img src={Img3} alt="Picture3 of my dog" className="dog-img"></img>
      </div>
    </div>
  );
};

export default About;
