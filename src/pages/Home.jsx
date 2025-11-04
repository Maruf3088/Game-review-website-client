import React from "react";
import Hero from "../components/Hero";
import Gamelogos from "../components/Gamelogos";

import AllReviews from "../components/AllReviews";
import Faq from "../components/Faq";
import Players from "../components/players";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <Gamelogos></Gamelogos>
      <Players></Players>
      <Faq></Faq>
      <AllReviews></AllReviews>
    </div>
  );
};

export default Home;
