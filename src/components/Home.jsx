import React from "react";
import Header from "./Header";
import Section from "./Section";
import Rules from "./Rules";
import Key from "./Key";
import Question from "./Question";
import Timelime from "./Timelime";
import Rewards from "./Rewards";
import Sponsors from "./Sponsors";

const Home = () => {
  return (
    <div>
      <Header />
      <Section />
      <Rules />
      <Key />
      <Question />
      <Timelime />
      <Rewards /> 
      <Sponsors/>
    </div>
  );
};

export default Home;
