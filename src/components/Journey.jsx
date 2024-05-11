import React from "react";
// import { PiGogglesBold } from "react-icons/pi";
// import { TbWorldSearch } from "react-icons/tb";
// import { GrDirections } from "react-icons/gr";
import anonymous from '../assets/anonymous.png';
import global from '../assets/global.png';
import guidance from '../assets/guidance.png'

function Journey() {
  return (
    <>
      <div className="start-journey">
        <div className="journey-head">
        <h2>Start your journey</h2>
        <p>
          WPL understands that not everyone feels comfortable sharing their <br />
          struggles openly. Our platform offers a judgement-free zone.
        </p>
        </div>

        <div className="journey-perks">

            <div className="anon">
              <img src={anonymous} alt="anonymous" />
          {/* <PiGogglesBold /> */}
          <h4>Anonymous Posting</h4>
          <p>
            Share your problems without revealing <br /> your identity. Your privacy is
            our top <br /> priority.
          </p>
          </div>
          <div className="global">
          {/* <TbWorldSearch /> */}
          <img src={global} alt="global" />
          <h4>Global Community Support</h4>
          <p>
            Connect with people from all walks of <br /> life who understand and
            empathize <br /> with your situation.
          </p>
          </div>
          <div className="guidance">
          {/* <GrDirections /> */}
          <img src={guidance} alt="guidance" />
          <h4>Receive Guidance</h4>
          <p>Receive advice, support, and <br /> encouragement from those who have <br /> experienced similar challenges.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Journey;
