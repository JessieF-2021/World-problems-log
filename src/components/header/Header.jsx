import React from "react";
import logo from "../../assets/logo/logo.svg";
import { IoSearch } from "react-icons/io5";
import Button from "../Button";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  const handleClick = () => {
    console.log("Button clicked");
  };

  return (
    <div className="header">
      <div className="logo">
        <Link to="/" className="logo-link">
          <img src={logo} alt="World Problems Log Logo" />
          <span>World Problems Log</span>
        </Link>
      </div>
      <div className="header-side">
        <div className="input">
          <IoSearch />
          <input type="text" placeholder="Search" className="search" />
        </div>

        <Link to="/share-burden">
          <Button className="primary-btn" onClick={handleClick}>
            Get Started
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Header;
