import React from "react";
import "../../styles/Header.css";
import amazonlogo from "../../assets/amazonlogo.png";
import SearchBar from "./SearchBar";
import { ReactComponent as UsaFlag } from "../../assets/usaicon.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faMapMarkerAlt, faCaretDown } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <div>
      <div id="header-container">
        <div id="header-left" className="header-column">
          <a href="/">
            <img alt="" src={amazonlogo} />
          </a>

          <a href="/" className="shiping-address-container">
            <p className="shipping-address-send-to">Send to Elizeu</p>
            <p className="shipping-address">
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              <span> 2845-093‌</span>
            </p>
            º
          </a>
        </div>

        <div id="header-center" className="header-column">
          <SearchBar />
        </div>

        <div id="header-right" className="header-column">
          <a href="/" className="language-selector">
            <UsaFlag width={24} />
            <FontAwesomeIcon className="icondown" icon={faCaretDown} />
          </a>

          <a href="/" className="header-colum myaccount-hello-message">
            <span className="hellomessage">Hello, Elizeu</span>
            <span className="account-link">
              <span>Account & Lists</span>
              <FontAwesomeIcon className="icondown" icon={faCaretDown} />
            </span>
          </a>

          <a href="/" className="header-colum myaccount-hello-message">
            <span className="hellomessage">Returns</span>
            <span className="account-link">
              <span>& Orders</span>
            </span>
          </a>

          <a href="/">
            <div id="amazoncart" className="header-colum">
              <div className="left-cart">
                <span className="total-items">8</span>
              </div>

              <div className="right-cart"></div>
            </div>
          </a>
        </div>
      </div>

      <div></div>
    </div>
  );
}
