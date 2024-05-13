import React, { useEffect, useState } from "react";
import BurdensCard from "../components/BurdensCard";

function BurdensLog() {
  const [burdens, setBurdens] = useState([]);

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
          throw new Error("Error sending burden");
        }

        const data = await response?.json();

        setBurdens(data);
        console.log(data);
      } catch (error) {
        console.error("Error sending burden:", error);
      }
    };

    handleGetBurdens();
  }, []);
  return (
    <>
      <div className="trends-container">
        <div className="trends-head" style={{ paddingTop: "48px" }}>
          <h2>Trending Burdens</h2>
          <p>
            Discover what's weighing on minds worldwide. <br /> Explore our
            trending burdens.
          </p>
        </div>

        <div className="burdens">
          {burdens?.map((item) => (
            <BurdensCard burdenText={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default BurdensLog;
