import React, { useState } from "react";
import "./Skills.css";
import { SKILLS } from "../../utils/data";
import Skillcard from "./Skillcard/Skillcard";
import Skillinfocard from "./Skillinfocard/Skillinfocard";

const Skills = () => {
  const [seclectedSkill, setSeclectedSkill] = useState(SKILLS[0]);
  const handleSeclectSkill = (data) => {
    setSeclectedSkill(data);
  };
  return (
    <section id="skills" className="skills-container">
      <h5 className="skills-title">Technical Proficiency</h5>
      <div className="skills-content ">
        <div className="skills">
          {SKILLS.map((item) => (
            <Skillcard
              key={item.title}
              iconUrl={item.icon}
              title={item.title}
              isActive={seclectedSkill.title === item.title}
              onClick={() => {
                handleSeclectSkill(item);
              }}
            />
          ))}
        </div>
        <div className="skills-info">
          <Skillinfocard
            heading={seclectedSkill.title}
            skills={seclectedSkill.skils}
          ></Skillinfocard>
        </div>
      </div>
    </section>
  );
};

export default Skills;
