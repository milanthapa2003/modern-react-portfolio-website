import React from "react";
import './About.css';
import profile from "../../assets/milanprofile.png";
import { FaLinkedin, FaGithub, FaYoutube } from "react-icons/fa"; // Removed unused FaFacebook

const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={profile} alt="Milan Thapa" />
        <h2>Full-Stack Developer</h2>
      </div>

      <div className="about-right">
        <h1>ABOUT ME</h1>
        <p>
          I’m Milan Thapa, a full-stack developer from Kathmandu, Nepal, with a
          Bachelor’s in Computer Science and Information Technology from
          Tribhuvan University. I specialize in both front-end and back-end
          development and have a strong background in web and graphic design.
          Passionate about creating user-friendly experiences, I enjoy tackling
          complex challenges and continuously enhancing my skills.
        </p>

        {/* Social Media Links */}
        <div className="social-links">
          <ul>
            <li>
              <a href="https://www.linkedin.com/in/milanthapa2003" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a href="https://github.com/milanthapa2003" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/@MilanByte" target="_blank" rel="noopener noreferrer">
                <FaYoutube />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
