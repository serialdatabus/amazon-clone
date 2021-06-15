import React, { useState } from "react";
import "../../styles/Header.css";
import amazonlogo from "../../assets/amazonlogo.png";
import SearchBar from "./SearchBar";
import { ReactComponent as UsaFlag } from "../../assets/usaicon.svg";
import { useDispatch /*useSelector*/ } from "react-redux";
import {
  showTransparentBg,
  hideTransparentBg,
} from "../../redux-slices/appslice";

import {
  faMapMarkerAlt,
  faCaretDown,
  faBars,
  faShoppingBasket,
  //faMailBulk,
} from "@fortawesome/free-solid-svg-icons";
import SideMenu from "../SideMenu/SideMenu";
import { fonticon } from "../../helpers/helpers";
import { FloatingLanguageSelector } from "../FloatingLanguageSelector/FloatingLanguageSelector";
import AmazonMenuItem from "../AmazonMenuItem/AmazonMenuItem";

export default function Header() {
  const [sidemenuisopened, setsidemenuisopened] = useState(false);
  //const appstate = useSelector((state) => state.app);
  const dispatch = useDispatch();

  const onOpenSideMenu = (e) => {
    e.preventDefault();

    setsidemenuisopened(true);
  };

  const onCloseSideMenu = () => setsidemenuisopened(false);

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
              {fonticon(faMapMarkerAlt)}
              <span> 2845-093‌</span>
            </p>
          </a>
        </div>

        <div id="header-center" className="header-column">
          <SearchBar />
        </div>

        <div id="header-right" className="header-column">
     {/*     <a
            {...languageSelectMouseEvents({
              dispatch,
              hideTransparentBg,
              showTransparentBg,
            })}
            href="/"
            className="language-selector hasfloatmenu"
          >
            <UsaFlag width={24} />
            {fonticon(faCaretDown, "icondown")}
            {}
          </a>
*/}


          <AmazonMenuItem labelcomponent={ <UsaFlag width={24} />} onHover={()=>dispatch(showTransparentBg())} onLeave={()=>dispatch(hideTransparentBg())} >
          {<FloatingLanguageSelector isvisible={true} />}
          </AmazonMenuItem>



          <a
            href="/"
            className="header-colum myaccount-hello-message hasfloatmenu"
          >
            <span className="hellomessage">Hello, Elizeu</span>
            <span className="account-link">
              <span>Account & Lists</span>
              {fonticon(faCaretDown, "icondown")}
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
            {fonticon(faBars, "iconbars")}
            <span>All</span>
          </a>

          <a href="/">
            <span>Browsing History</span>
            {fonticon(faCaretDown, "icondown")}
          </a>
        </div>

        <div className="nav-right">
          <a href="/">
            {fonticon(faShoppingBasket, "add-product-icon")}
            <span>Add new product</span>
          </a>
        </div>
      </div>

      <SideMenu opened={sidemenuisopened} onCloseSideMenu={onCloseSideMenu} />
    </div>
  );
}
