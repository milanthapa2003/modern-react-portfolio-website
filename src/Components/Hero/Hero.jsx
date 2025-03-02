import React from "react";
import "./Hero.css";
import profile from "../../assets/milanthapa.png";
import resume from "../../assets/milanthapacv.pdf";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-container">
        <div className="profile-image">
          <img src={profile} alt="Milan Thapa" />
        </div>
        <div className="profile-info">
          <h1>
            <span>I'm Milan Thapa,</span> Full-Stack Developer
          </h1>
          <div className="profile-btn">
            <button className="hire-btn mybtn" ><a href="https://www.facebook.com/profile.php?id=100089225822333">Hire Me</a></button>
            <a href={resume} download="MilanThapa_Resume.pdf" className="resume-btn mybtn">
              Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
