import React from "react";
import logo from "../assets/logo.svg";
import { RiTwitterXLine } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { IoLogoTiktok } from "react-icons/io5";
import "./Footer.css";
// import Modal from "./Modal";
function Footer() {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={logo} alt="logo" />
        <span>World Problems Log</span>
      </div>
      <p>Copyright&copy;2024WorldProblemsLogLLC.</p>
      <div className="social-media">
        <ul>
          <li>
            <a href="">
              <RiTwitterXLine className="icon" />
            </a>
          </li>
          <li>
            <a href="">
              <FaLinkedinIn className="icon" />
            </a>
          </li>
          <li>
            <a href="">
              <IoLogoYoutube className="icon" />
            </a>
          </li>
          <li>
            <a href="">
              <FaInstagram className="icon" />
            </a>
          </li>
          <li>
            <a href="">
              <IoLogoTiktok className="icon" />
            </a>
          </li>
        </ul>
      </div>
      {/* <Modal /> */}
    </div>
  );
}

export default Footer;
