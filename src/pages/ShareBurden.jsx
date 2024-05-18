import React, { useEffect, useState } from "react";
import Button from "../components/Button";
import { IoClose } from "react-icons/io5";
import "../components/Modal.css";
import modal from "../assets/modal.png";
import { Link } from "react-router-dom";

function ShareBurden() {
  const [show, setShow] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [burdenSent, setBurdenSent] = useState(false);
  const [burdenText, setBurdenText] = useState("");
  const [email, setEmail] = useState("");

  const toggleModal = () => {
    setOpenModal(!openModal);
  };

  const handleSendBurden = async () => {
    try {
      let requestBody = {
        burden: burdenText,
      };

      if (email) {
        requestBody.email = email;
      }

      const response = await fetch(
        "https://us-central1-wpl-jessie.cloudfunctions.net/addData",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
        }
      );

      if (!response.ok) {
        throw new Error("Error sending burden");
      }

      setBurdenSent(true);

      setBurdenText("");
      setEmail("");



    } catch (error) {
      console.error("Error sending burden:", error);
    }
  };

  const handleClick = () => {
    console.log("button clicked");
  };


// useEffect(() => {
//   const modalTimeout = setTimeout(() => {
//     if(!openModal && burdenSent) {
//       toggleModal();
//     }
//   }, 1500)
  
//   return () => clearTimeout(modalTimeout)
// }, [openModal, burdenSent]);




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
        <textarea
          name=""
          id=""
          placeholder="Enter burden here..."
          value={burdenText}
          onChange={(e) => setBurdenText(e.target.value)}
        ></textarea>

        <div className="check">
          <input
            type="checkbox"
            className="share-input"
            onChange={() => setShow(!show)}
            checked={show}
          />
          <span>I want a response</span>
        </div>

        {show && (
          <input
            type="email"
            placeholder="Enter email here..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        )}
      </form>

      <div className="share-btn">
      <Button
          onClick={() => {
            handleSendBurden();
            toggleModal();
          }}
          className="primary-btn "
        >
          Send
        </Button>
      </div>
      {openModal && burdenSent && (
        <div className="modal-bg">
          <div className="modal-container">
            <IoClose className="close" onClick={toggleModal} />
            <div className="modal-image">
              <img src={modal} alt="modal-image" />
            </div>
            <div className="modal-text">
              <h4>Burden sent successfully!</h4>
              <p>We'll get back to you as soon as possible</p>
            </div>
            <div className="modal-btns">
            <Link to="/burdens-log">
              <Button
              className="modal-btn"
                onClick={handleClick}>
                Burdens Log
              </Button>
            </Link>
            <Link to="/">
              <Button
              className="modal-btn2"
                onClick={handleClick}>
               Home page
              </Button>
            </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ShareBurden;
