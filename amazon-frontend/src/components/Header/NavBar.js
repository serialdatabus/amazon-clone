import {
  faBars,
  faCaretDown,
  faShoppingBasket,
} from "@fortawesome/free-solid-svg-icons";
import { fonticon } from "../../helpers/helpers";

export const NavBar = ({ onOpenSideMenu }) => {
  return (
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
  );
};
