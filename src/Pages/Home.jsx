import React from "react";
import Header from "../components/Header";
import Section from "../components/Section";
import Rules from "../components/Rules";
import Key from "../components/Key";
import Question from "../components/Question";
import Timelime from "../components/Timelime";
import Rewards from "../components/Rewards";
import Sponsors from "../components/Sponsors";
import Privacy from "../components/Privacy";
import Footer from "../components/Footer";

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
      <Sponsors />
      <Privacy />
      <Footer />
    </div>
  );
};

export default Home;
