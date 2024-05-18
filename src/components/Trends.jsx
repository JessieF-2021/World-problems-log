import React, { useEffect, useState } from "react";
import BurdensCard from "../components/BurdensCard";
import Button from "./Button";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

function Trends() {
  const [burdens, setBurdens] = useState([]);

const handleClick = () => {
  console.log("Button clicked");
}

  useEffect(() => {
    const handleGetBurdens = async () => {
      try {
        const response = await fetch(
          "https://us-central1-wpl-jessie.cloudfunctions.net/getData",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error("Error fetching burdens");
        }

        const data = await response.json();
        setBurdens(data.slice(0, 2)); // Fetch and set only the first 2 items
      } catch (error) {
        console.error("Error fetching burdens:", error);
      }
    };

    handleGetBurdens();
  }, []);

  return (
    <div className="trends-container">
      <div className="trends-head" style={{ paddingTop: "48px", paddingBottom: "2.5rem" }}>
        <h2>Trending burdens</h2>
        <p>Discover what's weighing on the minds worldwide. <br /> Explore our trending burdens.</p>
      </div>

      <div className="burdens">
        {burdens.map((item, index) => (
          <BurdensCard key={index} burdenText={item} />
        ))}
      </div>
      <div className="trends-btn">
      <Link to="/burdens-log">
      <Button className="secondary-btn" onClick={handleClick}>See all burdens <FaArrowRight className="sec-icon" /></Button>
      </Link>
      </div>
    </div>
  );
}

export default Trends;
