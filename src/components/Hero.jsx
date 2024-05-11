import React from "react";
import Button from "./Button";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import hero from "../assets/hero.png";

function Hero() {
  const handleClick = () => {
    console.log("Button clicked");
  };
  return (
    <>
      <div className="hero">
        <div className="hero-head">
          <h2>
            Welcome to <br /> World <span>Problems</span> Log
          </h2>
          <p>
            Struggling to share openly? WPL offers a safe anonymous space to{" "}
            <br />
            express your challenges and find global support. Is this
            conversation <br />
            helpful so far?
          </p>
          <div className="btns">
            <Link to="/share-burden">
              <Button className="primary-btn" onClick={handleClick}>
                Share your burden
              </Button>
            </Link>
            <Link to="/burdens-log">
              <Button className="btn2">
                See all burdens <FaArrowRight className="arrow-icon" />
              </Button>
            </Link>
          </div>
        </div>
        <div className="hero-image">
          <img src={hero} alt="hero" />
        </div>
      </div>
    </>
  );
}

export default Hero;
