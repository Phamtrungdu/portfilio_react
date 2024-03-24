import React from "react";
import "./About.css";

const About = () => {
  return (
    <section id="about" className="about-container">
      <div className="about-img">
        <img src="./assets/images/about.png"></img>
      </div>
      <div className="about-content">
        <h5>About Me</h5>
        <div className="content">
          <p>
            I am a new graduate. I wish to work in a professional programming
            environment, where I can develop my professional skills and learn
            new programming knowledge to excellent completion of assigned work
          </p>
        </div>

        <div className="content">
          <h6>THU DUC COLLEGE TECHNOLOGY</h6>
          <p>Information technology industry.</p>
          <p>Specialization in website programming</p>
        </div>
      </div>
    </section>
  );
};

export default About;
