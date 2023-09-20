import React, { useState } from "react";
import image from "../assets/Group 4.png";

import { quest } from "./faq";

const Question = () => {
  const [ask, setAsk] = useState(Array(quest.length).fill(false));
  const toggleAsk = (index) => {
    const newAsk = [...ask];
    newAsk[index] = !newAsk[index];
    setAsk(newAsk);
  };
  return (
    <div className="holding-third">
    <div className="container question-container">
      <div>
     <h2 className="heading">
          Frequently Ask
          <span className="span">Question</span>
        </h2>
        <p className="paragraph">
          We got answers to the questions that you might want to ask about
          getlinked Hackathon 1.0
        </p>
        
          {quest.map((asks, index) => (
            <div key={index}>
              <div className="faq-flex" onClick={() => toggleAsk(index)}>
                <h3>{asks.ques}</h3>
                <span className="span2">{ask[index] ? "-" : "+"}</span>
              
              </div>
              {ask[index] && <p className="para2">{asks.ans}</p>}
              <div className="line2"></div>
            </div>
          ))}
        

      </div>

      <div className="faq-img">
        <img src={image} alt="faq-image" />
      </div>

      </div>
      <div className="line"></div>
      </div>
  );
};

export default Question;
