import React from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import { greeting } from "../../portfolio";
import { Fade } from "react-reveal";
import { useHistory } from "react-router-dom";
import FeelingProud from "./FeelingProud";
import { style } from "glamor";
import { useState, useEffect } from 'react';

export default function Greeting(props) {
  const theme = props.theme;
  const history = useHistory();

  const styles = style({
    backgroundColor: `${theme.accentBright}`,
    ":hover": {
      boxShadow: `0 5px 15px ${theme.accentBright}`,
    },
  });
  const [textIndex, setTextIndex] = useState(0);
  const [typedText, setTypedText] = useState('');

  useEffect(() => {
    const texts = [
      "Full Stack Developer, Passionate ML engineer.",
      "Passionate about ML, SW Development and leveraging cutting edge technologies to develop innovative solutions.",
      "Always learning and exploring the intersections of technology and creativity."
    ];

    let currentIndex = 0;
    let intervalId;

    const startTyping = () => {
      const currentText = texts[textIndex];
      intervalId = setInterval(() => {
        if (currentIndex < currentText.length) {
          setTypedText((prevText) => prevText + currentText[currentIndex]);
          currentIndex++;
        } else {
          clearInterval(intervalId);
          setTimeout(() => {
            setTypedText('');
            currentIndex = 0;
            setTextIndex((prevIndex) => (prevIndex + 1) % texts.length); // Rotate to the next text
            startTyping();
          }, 2000); // Reset typing after 2 seconds
        }
      }, 100);
    };

    startTyping();

    return () => clearInterval(intervalId);
  }, [textIndex]);


  return (
    <Fade bottom duration={2000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1 className="greeting-text">{greeting.title}</h1>
              <p
                className="greeting-text-p subTitle"
                style={{ color: theme.secondaryText }}
              >
                <span>I'm </span>
                <span style={{ color: theme.accentColor }}>
                  {greeting.full_name}.{" "}
                </span>
                {typedText}
              </p>
              <SocialMedia />
              <div className="portfolio-repo-btn-div">
                <button
                  {...styles}
                  className="button"
                  onClick={() => {
                    history.push("/contact");
                  }}
                >
                  Contact Me
                </button>
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
            <FeelingProud theme={theme} />
          </div>
        </div>
      </div>
    </Fade>
  );
}
