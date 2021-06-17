import { faBars, faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
import { useDispatch /*useSelector*/ } from "react-redux";
import {
  showTransparentBg,
  hideTransparentBg,
} from "../../redux-slices/appslice";
import AmazonButtonMenu from "../AmazonButtonMenu/AmazonButtonMenu";
import BrowsingHistory from "../BrowsingHistory/BrowsingHistory";
import { renderTitleNavBar } from "./controllers";

export const NavBar = ({ onOpenSideMenu }) => {
  const dispatch = useDispatch();

  return (
    <div id="header-navbar">
      <div className="nav-left">
        <AmazonButtonMenu
          onClick={onOpenSideMenu}
          onHover={() => {}}
          labelComponent={renderTitleNavBar("All", faBars)}
        />

        <AmazonButtonMenu
        className="browsinghistory"
          onHover={() => {
            dispatch(showTransparentBg());
          }}
          onLeave={() => {
            dispatch(hideTransparentBg());
          }}
          labelComponent={renderTitleNavBar("Browsing History")}
        >
          

          <div className="label-top-history">
            <span>Your browsing history</span>
            <a href="/">View and edit</a>
          </div>
          <div className="browsing-history-wrapper"><BrowsingHistory /></div>


        </AmazonButtonMenu>
      </div>

      <div className="nav-right">
        <AmazonButtonMenu
          onClick={onOpenSideMenu}
          onHover={() => {}}
          labelComponent={renderTitleNavBar(
            "Add new product",
            faShoppingBasket
          )}
        />
      </div>
    </div>
  );
};
