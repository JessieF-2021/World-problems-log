import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

function Log() {
  return (
    <div className="log-container">
      <h2>Why World Problem Log</h2>
      <p>
        AnonHelp understands that not everyone feels comfortable sharing their
        struggles openly. Whether it's personal issues, relationship <br />{" "}
        dilemmas or professional concerns, our platform offers a judgement-free
        zone where you can speak your mind without fear of <br /> repercussions.
      </p>
      <Link to="/share-burden">
      <Button className="primary-btn" style={{marginBottom: "20px"}}>
        Share your burden
      </Button>
      </Link>
    </div>
  );
}

export default Log;
