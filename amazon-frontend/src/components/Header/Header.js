import React from "react";
import "../../styles/Header.css";
import amazonlogo from "../../assets/amazonlogo.png";
import { ReactComponent as PortugalFlag } from "../../assets/portugalicon.svg";
import { ReactComponent as UsaFlag } from "../../assets/usaicon.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faCaretDown,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";


//calbacks
const onCategorySelector = () => {

    alert(8888);

}


export default function Header() {
  return (
   <div> 
       <div id="header-container">
        
      <div id="header-left" class="header-column">
        <a href="">
          <img src={amazonlogo} />
        </a>

        <a href="" class="shiping-address-container">
          <p class="shipping-address-send-to">Send to Elizeu</p>
          <p class="shipping-address">
            <FontAwesomeIcon icon={faMapMarkerAlt} />
            <span> 2845-093‌</span>
          </p>
        </a>
      </div>

      <div id="header-center" class="header-column">
        <div id="header-searchbar">
          <div class="search-category-selector" onClick={onCategorySelector}>
            <span class="label">Tools and Home Improvement</span>
            <FontAwesomeIcon className="icondown" icon={faCaretDown} />

            <select class="categories_list">
                <option>Cars and Motors</option>
                <option>Cars and Motors</option>
                <option>Cars and Motors</option>
                <option>Cars and Motors</option>
                <option>Cars and Motors</option>
                <option>Cars and Motors</option>
            </select>
          </div>

          <input type="text" />

          <a href="" class="search-button">
            <FontAwesomeIcon className="iconsearch" icon={faSearch} />
          </a>
        </div>
      </div>

      <div id="header-right" class="header-column">
        <a href="" className="language-selector">
          <UsaFlag width={24} />
          <FontAwesomeIcon className="icondown" icon={faCaretDown} />
        </a>

        <a href="" class="header-colum myaccount-hello-message">
          <span className="hellomessage">Hello, Elizeu</span>
          <span className="account-link">
            <span>Account & Lists</span>
            <FontAwesomeIcon className="icondown" icon={faCaretDown} />
          </span>
        </a>

        <a href="" class="header-colum myaccount-hello-message">
          <span className="hellomessage">Returns</span>
          <span className="account-link">
            <span>& Orders</span>
          </span>
        </a>

        <a>
          <div id="amazoncart" class="header-colum">
            <div class="left-cart">
              <span className="total-items">8</span>
            </div>

            <div class="right-cart"></div>
          </div>
        </a>

       
      </div>
      </div>

        <div>

        </div>
    
    </div>
  );
}
