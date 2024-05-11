import React from "react";
import Button from "./Button";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

function Trends() {
  return (
    <>
      <div className="trends-container">
        <div className="trends-head">
          <h2>Trending Burdens</h2>
          <p>
            Discover what's weighing on minds worldwide. <br /> Explore our
            trending burdens.
          </p>
        </div>

        <div className="burdens">
          <div className="burdens-list">
            <div className="list">
              <Button className="primary-btn2">S01</Button>
              <h4>Sender 001</h4>
            </div>
            <p>
              How do I navigate a toxic friendship without hurting anyone?"
              <br /> "I feel suffocated ny societal expectations. How do I break
              free and live authentically?"
            </p>
            <div className="list">
              <Button className="primary-btn3">View</Button>
            </div>
          </div>

          <div className="burdens-list">
            <div className="list">
              <Button className="primary-btn2">S01</Button>
              <h4>Sender 001</h4>
            </div>
            <p>
              How do I navigate a toxic friendship without hurting anyone?"
              <br /> "I feel suffocated ny societal expectations. How do I break
              free and live authentically?"
            </p>
            <div className="list-btn">
              <Button className="primary-btn3">View</Button>
            </div>
          </div>
        </div>
        <div className="trends-btn">
          <Link to="/burdens-log">
          <Button className="secondary-btn" >
            See all burdens <FaArrowRight className="sec-icon" />
          </Button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Trends;
