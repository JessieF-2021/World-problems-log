import React, { useEffect, useState } from "react";
import BurdensCard from "../components/BurdensCard";
import Button from "../components/Button";
import { Link } from "react-router-dom";

function BurdensLog() {
  const [burdens, setBurdens] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    setIsLoading(true);
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
      setBurdens((prevBurdens) => [...prevBurdens, ...data]);
    } catch (error) {
      console.error("Error fetching burdens:", error);
    } finally {
      setIsLoading(false);
    }
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
          throw new Error("Error fetching burdens");
        }

        const data = await response.json();
        setBurdens(data);
      } catch (error) {
        console.error("Error fetching burdens:", error);
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
          {burdens.slice(0, 8).map((item, index) => (
            <BurdensCard key={index} burdenText={item} />
          ))}
          {burdens.length > 8 && (
            <div className="load">
              <Button onClick={handleClick} className="load-btn">
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
