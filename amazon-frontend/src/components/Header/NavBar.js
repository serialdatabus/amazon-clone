import {
  faBars,

  faShoppingBasket,
} from "@fortawesome/free-solid-svg-icons";
import { fonticon } from "../../helpers/helpers";
import { useDispatch /*useSelector*/ } from "react-redux";
import {
  showTransparentBg,
  hideTransparentBg,
} from "../../redux-slices/appslice";
import AmazonButtonMenu from "../AmazonButtonMenu/AmazonButtonMenu";

export const NavBar = ({ onOpenSideMenu }) => {
  const dispatch = useDispatch();

  return (
    <div id="header-navbar">
      <div className="nav-left">
        <a href="/" className="hamburger-menu" onClick={onOpenSideMenu}>
          {fonticon(faBars, "iconbars")}
          <span>All</span>
        </a>

        <AmazonButtonMenu
        
          onHover={() => {
            dispatch(showTransparentBg());
          }}
          onLeave={() => {
            dispatch(hideTransparentBg());
          }}
          labelComponent={
            <h5
              style={{
                margin: 0,
                color: "white",
                fontWeight: "bold",
                fontSize: "0.9em",
              }}
            >
              Browsing History
            </h5>
          }
        >

            <h1>Conteudo</h1>

        </AmazonButtonMenu>
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
