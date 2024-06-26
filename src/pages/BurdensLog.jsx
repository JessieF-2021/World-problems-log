import React, { useEffect, useState } from "react";
import BurdensCard from "../components/BurdensCard";
import Button from "../components/Button";
import { Link } from "react-router-dom";
// import ShareBurden from "./ShareBurden";

function BurdensLog() {
  const [burdens, setBurdens] = useState([]);
  const [itemsToShow, setItemsToShow] = useState(4); // Renamed from isLoading to be more descriptive
  const [isLoading, setIsLoading] = useState(false); // Separate state for loading status

  const loadMoreBurdens = () => {
    setIsLoading(true);
    setItemsToShow((prevValue) => prevValue + 4);
    setIsLoading(false);
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

  // const handleNewBurden = (newBurden) => {
  //   setBurdens((prevBurdens) => [newBurden, ...prevBurdens]);
  // };
  // const newBurden = await response.json();

  // if(onNewBurden) {
  //   onNewBurden(newBurden)
  // }
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
          {burdens.slice(0, itemsToShow).map((item, index) => (
            <BurdensCard key={item.id} burdenText={item.burden} index={index} />
          ))}
          {itemsToShow < burdens.length && (
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
            struggles openly. Whether it's personal issues, relationship dilemmas,
            or professional concerns, our platform offers a judgement-free zone
            where you can speak your mind without fear of repercussions.
          </p>

          <Link to="/share-burden">
            <Button className="primary-btn">Share your burden</Button>
          </Link>
        </div>
      </div>
      {/* <ShareBurden onNewBurden={handleNewBurden} /> */}
    </>
  );
}

export default BurdensLog;
