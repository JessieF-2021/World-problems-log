import React, { useEffect, useState } from "react";
import BurdensCard from "../components/BurdensCard";

function Trends() {
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
        <h2>Shared Burdens</h2>
      </div>

      <div className="burdens">
        {burdens.map((item, index) => (
          <BurdensCard key={index} burdenText={item} />
        ))}
      </div>
    </div>
  );
}

export default Trends;
