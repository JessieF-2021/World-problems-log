import React from "react";
import Hero from "../components/Hero";
import Journey from "../components/Journey";
import Trends from "../components/Trends";
import Log from "../components/Log";

function Home() {
  return (
    <>
      <div>
        <Hero />
         <Journey />
        <Trends />
        <Log /> 
      </div>
    </>
  );
}

export default Home;
