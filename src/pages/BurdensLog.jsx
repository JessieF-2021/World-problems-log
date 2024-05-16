import React, { useEffect, useState } from "react";
import BurdensCard from "../components/BurdensCard";
import Button from "../components/Button";
import { Link } from "react-router-dom";

function BurdensLog() {
  const [burdens, setBurdens] = useState([]);
  const [isLoading, setIsLoading] = useState(4);

  const loadMoreBurdens = () => {
    setIsLoading((prevValue) => prevValue + 4);
  };

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
          throw new Error("Cannot display burdens");
        }

        const data = await response.json();
        setBurdens(data);
      } catch (error) {
        console.error("Cannot fetch burdens:", error);
      }
    };

    handleGetBurdens();
  }, []);

  return (
    <>
      <div className="trends-container">
        <div
          className="trends-head"
          style={{ paddingTop: "48px", paddingBottom: "2.5rem" }}
        >
          <h2>Shared Burdens</h2>
        </div>

        <div className="burdens">
          {burdens.slice(0, isLoading).map((item, index) => (
            <BurdensCard key={item.id} burdenText={item} index = {index}/>
          ))}
          {burdens.length > 4 && (
            <div className="load">
              <Button onClick={loadMoreBurdens} className="load-btn">
                {isLoading ? "Loading..." : "Load more"}
              </Button>
            </div>
          )}
        </div>

        <div className="log-head">
          <h2>What is your burden?</h2>

          <p>
            WPL understands that not everyone feels comfortable sharing their
            struggles openly. Whether it's personal issues, relationship <br />{" "}
            dilemmas, or professional concerns, our platform offers a
            judgement-free zone where you can speak your mind without fear of{" "}
            <br /> repercussions.
          </p>

          <Link to="/share-burden">
            <Button className="primary-btn">Share your burden</Button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default BurdensLog;
