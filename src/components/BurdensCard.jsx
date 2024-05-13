import React from "react";
import Button from "./Button";

function BurdensCard({ burdenText, onclick }) {
  return (
    <div className="burdens-list">
      <div className="list">
        <Button className="primary-btn2">S01</Button>
        <h4>Sender 001</h4>
      </div>
      <div className="list-content">
      <p>{burdenText?.burden}</p>
        <Button onClick={onclick} className="primary-btn3">
          View
        </Button>
      </div>
    </div>
  );
}

export default BurdensCard;
