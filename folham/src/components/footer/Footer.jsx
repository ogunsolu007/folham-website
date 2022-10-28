import React from "react";
import "./footer.css";
import { TiLocation } from "react-icons/ti";
import {
  AiFillMail,
  AiFillPhone,
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillInstagram,
} from "react-icons/ai";
import logo from "../../assets/folham-logo.png";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_container ">
        <div className="flex">
          <img src={logo} alt="logo" />
        </div>
        <div className="flex">
          <p>
            <TiLocation className="footer_icon"/> 32 Alhaji Asiri-Abo Str, Isolo, Lagos, Nigeria
          </p>
        </div>
        <div className="flex dp">
          <p>
            <AiFillPhone className="footer_icon"/> +234 705 894 2665
          </p>
          <p>
            <AiFillPhone className="footer_icon"/> +234 802 345 2832
          </p>
        </div>
        <div className="flex dp">
          <p>
            <AiFillMail className="footer_icon"/> info@folham.com
          </p>
          <div className="socials">
            <AiFillFacebook className="footer_icon"/>
            <AiFillTwitterSquare className="footer_icon"/>
            <AiFillInstagram className="footer_icon"/>
          </div>
        </div>
      </div>
      <div className="footer_copy">Copyright ©2022 Folham Nigeria Limited</div>
    </div>
  );
};

export default Footer;
