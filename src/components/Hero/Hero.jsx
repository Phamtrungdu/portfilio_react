import React, { useEffect, useState } from "react";
import "./Hero.css";

const Hero = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Web Developer ", "Web Designer", "UI/UX Designer"];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
    return () => {
      clearInterval(ticker);
    };
  }, [text]);
  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);
    setText(updatedText);
    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }
    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <section id="hero" className="hero-container">
      <div className="hero-content">
        <h3>Welcome I`m to my Portfolio</h3>
        <h2>
          {` Hi I'm | `}
          <span>{text}</span>
        </h2>
        <p>
          Passionate FrontEnd Developer | Transforming Ideas into Seamless and
          Visually Stunning Wed Solutions
        </p>
      </div>
      <div className="hero-img">
        <div>
          <div className="tech-icon">
            <img src="./assets/images/react.png"></img>
          </div>
          <img className="img-back" src="./assets/images/cdv.jpg"></img>
        </div>
        <div>
          <div className="tech-icon">
            <img src="./assets/images/html.png"></img>
          </div>
          <div className="tech-icon">
            <img src="./assets/images/css3.png"></img>
          </div>
          <div className="tech-icon">
            <img src="./assets/images/js.png"></img>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
