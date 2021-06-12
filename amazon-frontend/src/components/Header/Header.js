import React from "react";
import "../../styles/Header.css";
import amazonlogo from "../../assets/amazonlogo.png";
import SearchBar from "./SearchBar";
import { ReactComponent as UsaFlag } from "../../assets/usaicon.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faMapMarkerAlt,
  faCaretDown,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import SideMenu from "../SideMenu/SideMenu";

export default function Header() {
  const onOpenSideMenu = (e) => {
    e.preventDefault();
  };

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

      <div id="header-navbar">
        <div className="nav-left">
          <a href="/" className="hamburger-menu" onClick={onOpenSideMenu}>
            <FontAwesomeIcon className="iconbars" icon={faBars} />
            <span>All</span>
          </a>

          <a href="/">
            <span>Today's Deals</span>
          </a>

          <a href="/">
            <span>Buy Again</span>
          </a>

          <a href="/">
            <span>Browsing History</span>
            <FontAwesomeIcon className="icondown" icon={faCaretDown} />
          </a>

          <a href="/">
            <span>Customer Service</span>
          </a>

          <a href="/">
            <span>Registry</span>
          </a>

          <a href="/">
            <span>Gift Cards</span>
          </a>

          <a href="/">
            <span>Sell</span>
          </a>
        </div>

        <div className="nav-right">
          <a href="/">
            <span>Amazon's response to COVID-19</span>
          </a>
        </div>
      </div>

      <SideMenu />
    </div>
  );
}
