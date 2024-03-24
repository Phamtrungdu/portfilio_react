import React from "react";
import "./Skillinfocard.css";

const Skillinfocard = ({ heading, skills }) => {
  return (
    <div className="skills-info-card">
      <h5>{heading}</h5>
      <div className="skills-info-content">
        {skills.map((item, index) => (
          <React.Fragment key={`skill_${index}`}>
            <div className="skill-info">
              <p>{item.skills}</p>
              <p className="percentage">{item.percentage}</p>
            </div>
            <div className="skills-progress-bg">
              <div
                className="skills-progress"
                style={{ width: item.percentage }}
              ></div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Skillinfocard;
