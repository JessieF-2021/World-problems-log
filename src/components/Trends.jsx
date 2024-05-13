import React, { useState, useEffect } from "react";
import Button from "./Button";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import BurdensCard from "./BurdensCard";
import useStore from "../store";
import "./Modal.css";
import { IoClose } from "react-icons/io5";

function Trends() {
  const [burdens, setBurdens] = useState([]);
  const { data, setData } = useStore();
  const [openModal, setOpenModal] = useState(false);
  console.log(data);
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
        const newData = data?.slice(0, 2);
        setBurdens(newData);
        console.log(data);
      } catch (error) {
        console.error("Error sending burden:", error);
      }
    };

    handleGetBurdens();
  }, []);

  const handleView = (item) => {
    setData(item);
    setOpenModal(true);
    console.log(item);
  };

  return (
    <>
      <div className="trends-container">
        <div className="trends-head">
          <h2>Trending Burdens</h2>
          <p>
            Discover what's weighing on minds worldwide. <br /> Explore our
            trending burdens.
          </p>
        </div>

        <div className="burdens">
          {burdens?.map((item) => (
            <BurdensCard
              key={item?.id}
              onclick={() => handleView(item)}
              burdenText={item}
            />
          ))}
        </div>
        <div className="trends-btn">
          <Link to="/burdens-log">
            <Button className="secondary-btn">
              See all burdens <FaArrowRight className="sec-icon" />
            </Button>
          </Link>
        </div>
        {openModal && (
          <div className="modal-bg">
            <div className="modal-container">
              <IoClose
                className="close"
                onClick={() => setOpenModal(!openModal)}
              />

              <div
                className="modal-text"
                style={{
                  padding: "0",
                  fontSize: "1rem",
                  fontFamily: '"Manrope", sans-serif',
                  lineHeight: "2rem",
                }}
              >
                {data?.burden}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Trends;
