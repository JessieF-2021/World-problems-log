import React, { useState } from "react";
import Button from "../components/Button";
import { IoClose } from 'react-icons/io5';
import "../components/Modal.css";

function ShareBurden() {
  const [show, setShow] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [burdenSent, setBurdenSent] = useState(false);

  const toggleModal = () => {
    setOpenModal(!openModal);
  };

  const handleSendBurden = () => {
    
    setBurdenSent(true);
  };

  return (
    <div className="share-container">
      <div className="share-head">
        <h2>What is your burden?</h2>
        <p>
          Send us an anonymous message and get solutions to your <br />{" "}
          problems.
        </p>
      </div>

      <form action="">
        <textarea name="" id="" placeholder="Enter burden here..."></textarea>
        <br />
        <label>
          <input
            type="checkbox"
            onChange={() => setShow(!show)}
            checked={show}
          />
          I want a response
        </label>
        <br />
        {show && <input type="email" placeholder="Enter email here..." />}
      </form>

      <div className="share-btn">
        <Button onClick={() => { handleSendBurden(); toggleModal(); }} className="primary-btn">
          Send
        </Button>
      </div>
      {openModal && burdenSent && (
        <div className="modal-bg">
          <div className="modal-container">
            <IoClose className="close" onClick={toggleModal} />
            <div className="modal-text">
            <h4>Burden sent successfully!</h4>
            <p>We'll get back to you as soon as possible</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ShareBurden;
