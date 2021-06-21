import React, { useState } from "react";
import "../../styles/Header.css";
import amazonlogo from "../../assets/amazonlogo.png";
import SearchBar from "./SearchBar";
import { useDispatch /*useSelector*/ } from "react-redux";
import {
  showTransparentBg,
  hideTransparentBg,
} from "../../redux-slices/appslice";

import {
  faMapMarkerAlt,
  //faMailBulk,
} from "@fortawesome/free-solid-svg-icons";
import SideMenu from "../SideMenu/SideMenu";
import { fonticon } from "../../helpers/helpers";
import { FloatingLanguageSelector } from "../FloatingLanguageSelector/FloatingLanguageSelector";
import AmazonMenuItem from "../AmazonMenuItem/AmazonMenuItem";
import { getFlagComponent } from "./controllers";
import { NavBar } from "./NavBar";

export default function Header() {
  const [sidemenuisopened, setsidemenuisopened] = useState(false);
  const [selectedLanguage, setselectedLanguage] = useState("ko");
  const dispatch = useDispatch();

  const onOpenSideMenu = (e) => {
    e.preventDefault();

    setsidemenuisopened(true);
  };

  const onCloseSideMenu = () => setsidemenuisopened(false);

  const onSelectedLanguage = (code_language) =>
  
  setselectedLanguage(code_language);

  return (
    <div name="top">
      <div id="header-container">
        <div id="header-left" className="header-column">
          <AmazonMenuItem
            className="shiping-address-container"
            default
            labelcomponent={<img alt="" src={amazonlogo} />}
          />




          <AmazonMenuItem
            className="shiping-address-container"
            default
            labelcomponent={
              <>
                <p className="shipping-address-send-to">Send to Elizeu</p>
                <p className="shipping-address">
                  {fonticon(faMapMarkerAlt)}
                  <span> 2845-093‌</span>
                </p>
              </>
            }
          />
        </div>

        <div id="header-center" className="header-column">
          <SearchBar />
        </div>

        <div id="header-right" className="header-column">
          <AmazonMenuItem
            labelcomponent={getFlagComponent(selectedLanguage, 24)}
            onHover={() => dispatch(showTransparentBg())}
            onLeave={() => dispatch(hideTransparentBg())}
          >
            {
              <FloatingLanguageSelector
                selectedLanguageCallBack={onSelectedLanguage}
                isvisible={true}
                selectedLanguage={selectedLanguage}
              />
            }
          </AmazonMenuItem>

          <AmazonMenuItem
            className="header-colum myaccount-hello-message"
            labelcomponent={
              <>
                <span className="hellomessage">Hello, Elizeu</span>
                <span className="account-link">
                  <span>Account & Lists</span>
                </span>
              </>
            }
            onHover={() => dispatch(showTransparentBg())}
            onLeave={() => dispatch(hideTransparentBg())}
          />

          <AmazonMenuItem
            default
            className="header-colum myaccount-hello-message"
            labelcomponent={
              <>
                <span className="hellomessage">Returns</span>
                <span className="account-link">
                  <span>& Orders</span>
                </span>
              </>
            }
          />

          <AmazonMenuItem
            default
            className="header-colum myaccount-hello-message"
            labelcomponent={
              <div id="amazoncart" className="header-colum">
                <div className="left-cart">
                  <span className="total-items">8</span>
                </div>

                <div className="right-cart"></div>
              </div>
            }
          />
        </div>
      </div>

      <NavBar onOpenSideMenu={onOpenSideMenu} />

      <SideMenu opened={sidemenuisopened} onCloseSideMenu={onCloseSideMenu} />
 
    </div>
  );
}
