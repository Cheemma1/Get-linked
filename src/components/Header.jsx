import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import heroImg from "../assets/man-wearing-smart-glasses-touching-virtual-screen 1.png";
import vector from "../assets/Vector 4.svg";
import heroimg2 from "../assets/Image 1.png";
import light from "../assets/Creative.png"
import chain from "../assets/chain-9365116-7621444.png"
import fire from "../assets/fire.png"

const Header = () => {
  function formatTimeUnit(unit) {
    // Add a leading zero for single-digit units
    return unit < 10 ? `0${unit}` : unit;
  }

  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    // Sets the target time for the countdown
    const targetTime = new Date().getTime() + 3600 * 36000;

    const countdownInterval = setInterval(() => {
      const currentTime = new Date().getTime();
      const timeDifference = targetTime - currentTime;
      if (timeDifference <= 0) {
        clearInterval(countdownInterval);
      } else {
        const h = Math.floor(
          (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const m = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((timeDifference % (1000 * 60)) / 1000);
        setHours(formatTimeUnit(h));
        setMinutes(formatTimeUnit(m));
        setSeconds(formatTimeUnit(s));
      }
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, []);

  return (
    <header>
      <Nav />
      <div className='line'></div>
      <div className=" container hero">
        <div className="hero-text-right hero-mob">
          <h2>Igniting a Revolution in HR Innovation</h2>
          <img src={vector} alt="vector" className="image2" />
        </div>
        <div className="hero-txt">
          <div className="text-one">
            <div className="lil-img">
            <img src={light} alt="creative"  className="light"/>
            <img src={chain} alt="creative"  className="chain"/>
            <img src={fire} alt="creative"  className="fire"/></div>
            <h1>
              getlinked Tech Hackathon <span className="span">1.0</span>{" "}
            </h1>
          </div>
          <p className="hero-text1">
            Participate in getlinked tech Hackathon 2023 stand a chance to win a
            Big prize
          </p>
          <button className="nav-btn">Register</button>
          <div className="timer">
            <p>
              {hours}
              <span>H</span>{" "}
            </p>
            <p>
              {minutes}
              <span>M</span>{" "}
            </p>
            <p>
              {seconds}
              <span>S</span>{" "}
            </p>
          </div>
        </div>
        <div className="hero-right">
          <div className="hero-text-right ">
            <h2>Igniting a Revolution in HR Innovation</h2>
            <img src={vector} alt="vector" className="image2" />
          </div>
          <div className="hero-image-container">
            <div>
              <img src={heroImg} alt="hero-image" className="image1" />
              <img src={heroimg2} alt="" className="image3" />
            </div>
          </div>
        </div>
        </div>
      <div className="line"></div>
    </header>
  );
};

export default Header;
